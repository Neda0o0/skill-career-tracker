const navItems = [
  {
    label: "Home",
    href: "/",
    visibility: "always",
    activeType: "strict",
  },
  {
    label: "About us",
    href: "/about",
    visibility: "always",
    activeType: "strict",
  },
  {
    label: "Login",
    href: "/login",
    visibility: "guest", // فقط وقتی لاگین نیست
    activeType: "none",
  },
  {
    label: "Dashboard",
    href: "/dashboard",
    visibility: "auth", // فقط وقتی لاگین است
    activeType: "prefix",
  },
  {
    label: "Profile",
    href: "/profile",
    visibility: "auth",
    activeType: "prefix",
  },
  {
    label: "Logout",
    href: "/logout",
    visibility: "auth",
    activeType: "none",
  },
];

export default navItems;
