"use client";

export default function Button({
  children,
  onClick,
  type = "button",
  disabled = false,
  variant = "primary",
  className = "",
}) {
  const base = `
  relative overflow-hidden inline-flex items-center justify-center px-6 py-2 rounded-lg font-medium transition-transform duration-200 active:scale-95
  disabled:opacity-50 disabled:cursor-not-allowed 
  focus:outline-none focus:ring-2 focus:ring-green-500/40 active:scale-95
  `;

  const variants = {
    primary: `
  bg-green-600 text-white border-2 border-green-600
  before:absolute before:inset-0
  before:bg-green-700
  before:origin-left before:scale-x-0
  before:transition-transform before:duration-300 before:ease-in-out
  hover:before:scale-x-100
  dark:bg-green-400 dark:text-black dark:border-green-400 dark:hover:bg-green-500
`,

    outline: `
    bg-transparent border-2 border-green-600 text-green-600
    before:absolute before:inset-0
    before:bg-green-600
    before:origin-left before:scale-x-0
    before:transition-transform before:duration-300 before:ease-in-out
    hover:before:scale-x-100
    hover:text-white 
    dark:border-green-400 dark:text-green-400 dark:hover:bg-green-400 dark:hover:text-black
    `,
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${base} ${variants[variant]} ${className}`}
    >
      <span className="relative z-10">{children}</span>
    </button>
  );
}
