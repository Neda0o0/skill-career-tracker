"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import navItems from "@/data/navItems";

export default function Header() {
  const pathname = usePathname();
  const { resolvedTheme, setTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  const lockVisibility = useRef(false);
  const isAuthenticated = false;

  /* -------------------- RESET ON ROUTE CHANGE -------------------- */
  useEffect(() => {
    const t1 = setTimeout(() => {
      setIsVisible(true);
      lockVisibility.current = true;
    }, 0);

    const t2 = setTimeout(() => {
      lockVisibility.current = false;
    }, 300);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [pathname]);

  /* -------------------- SCROLL -------------------- */
  useEffect(() => {
    const onScroll = () => {
      if (lockVisibility.current || isMenuOpen) return;

      const current = window.scrollY;

      if (current < 64) {
        setIsVisible(true);
      } else if (current > lastScrollY.current) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      lastScrollY.current = current;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isMenuOpen]);

  /* -------------------- ESC -------------------- */
  useEffect(() => {
    if (!isMenuOpen) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isMenuOpen]);

  /* -------------------- NAV ITEMS -------------------- */
  const items = navItems
    .filter((item) => {
      if (item.visibility === "always") return true;
      if (item.visibility === "guest") return !isAuthenticated;
      if (item.visibility === "auth") return isAuthenticated;
      return false;
    })
    .map((item) => {
      const isActive =
        item.activeType === "strict"
          ? pathname === item.href
          : item.activeType === "prefix"
          ? pathname.startsWith(item.href) && item.href !== "/"
          : false;

      return { ...item, isActive };
    });

  return (
    <>
      {/* HEADER */}
      <header
        className={`
          fixed top-0 inset-x-0 z-50
          h-16
          bg-white dark:bg-gray-900
          border-b border-gray-200 dark:border-gray-800
          transition-transform duration-300 ease-out
          will-change-transform
          ${isVisible ? "translate-y-0" : "-translate-y-full"}
        `}
      >
        <nav className="container mx-auto px-4 h-full flex items-center justify-between">
          {/* Hamburger */}
          <button
            onClick={() => setIsMenuOpen((p) => !p)}
            className="md:hidden relative w-10 h-10 flex items-center justify-center"
            aria-label="Toggle menu"
          >
            <Menu
              className={`absolute transition-all duration-200 ${
                isMenuOpen ? "opacity-0 rotate-90 scale-75" : "opacity-100"
              }`}
            />
            <X
              className={`absolute transition-all duration-200 ${
                isMenuOpen ? "opacity-100" : "opacity-0 -rotate-90 scale-75"
              }`}
            />
          </button>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-6">
            {items.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={
                    item.isActive
                      ? "font-medium text-blue-600 dark:text-blue-400"
                      : "text-gray-700 dark:text-gray-300 hover:text-blue-600"
                  }
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Theme */}
          <button
            onClick={() =>
              setTheme(resolvedTheme === "dark" ? "light" : "dark")
            }
            className="w-10 h-10 flex items-center justify-center"
            aria-label="Toggle theme"
          >
            {resolvedTheme === "dark" ? <Moon size={20} /> : <Sun size={20} />}
          </button>
        </nav>
      </header>

      {/* OVERLAY */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* MOBILE MENU */}
      <div
        className={`
          fixed top-16 inset-x-0 z-50 md:hidden
          transition-all duration-300 ease-out
          ${
            isMenuOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-4 pointer-events-none"
          }
        `}
      >
        <ul className="flex flex-col items-center gap-5 py-6 bg-white dark:bg-gray-900">
          {items.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={
                  item.isActive
                    ? "text-lg font-medium text-blue-600 dark:text-blue-400"
                    : "text-lg text-gray-700 dark:text-gray-300 hover:text-blue-600"
                }
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
