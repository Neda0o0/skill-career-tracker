"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Breadcrumb = () => {
  const pathname = usePathname();

  const segments = pathname.split("/").filter(Boolean);

  // لینک‌ها را مرحله‌به‌مرحله می‌سازیم
  const crumbs = segments.map((segment, index) => {
    const href = "/" + segments.slice(0, index + 1).join("/");
    return { label: segment, href };
  });
  return (
    <nav className="mb-4 text-sm text-gray-500">
      <ul className="flex items-center flex-wrap gap-2">
        {crumbs.map((item, index) => (
          <li key={item.href} className="flex items-center gap-2">
            {index !== 0 && <span>/</span>}
            <Link href={item.href} className="hover:text-purple-600 capitalize">
              {item.label.replace("-", " ")}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Breadcrumb;
