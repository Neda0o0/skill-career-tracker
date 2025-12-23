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
    relative 
    overflow-hidden 
    inline-flex 
    items-center 
    justify-center 
    px-6 
    py-2  
    font-medium 
    transition-all 
    duration-200 
    cursor-pointer
    disabled:opacity-50 
    disabled:cursor-not-allowed 
    focus:outline-none 
    focus:ring-2 
    focus:ring-offset-2
    focus:ring-black/20
    active:scale-95
  `;

  const variants = {
    primary: `
      bg-green-600 
      text-white 
      border-2 
      border-green-600 
      rounded-lg
      before:absolute 
      before:inset-0
      before:bg-green-700
      before:origin-left 
      before:scale-x-0
      before:transition-transform 
      before:duration-600 
      before:ease-in-out
      hover:before:scale-x-100
      dark:bg-green-400 
      dark:text-black 
      dark:border-green-400 
      dark:hover:bg-green-500
`,
    primaryOutline: `
      bg-transparent 
      border-2 
      border-green-600 
      text-green-600 
      rounded-lg
      before:absolute 
      before:inset-0
      before:bg-green-600
      before:origin-left 
      before:scale-x-0
      before:transition-transform 
      before:duration-600 
      before:ease-in-out
      hover:before:scale-x-100
      hover:text-white 
      dark:border-green-400 
      dark:text-green-400 
      dark:before:bg-green-400 
      dark:hover:text-black
    `,
    secondary: `
      bg-blue-500 
      text-white
      rounded-full
      before:absolute 
      before:inset-0
      before:bg-blue-800
      before:origin-left
      before:scale-x-0
      before:transition-transform 
      before:duration-400 
      before:ease-in-out
      before:rounded-full
      hover:before:scale-x-100
      dark:bg-blue-700
`,
    secondaryOutline: `
      bg-transparent 
      border-2 
      border-blue-500 
      text-blue-500 
      rounded-full
      before:absolute 
      before:inset-0
      before:rounded-full
      before:bg-blue-500
      before:origin-left 
      before:scale-x-0
      before:transition-transform 
      before:duration-400 
      before:ease-in-out
      hover:before:scale-x-100
      hover:text-white 
      dark:border-blue-400
      dark:text-blue-400 
      dark:before:bg-blue-400
    `,
  };
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${base} ${
        variants[variant] ?? variants.primary
      } ${className}`}
    >
      <span className="relative z-10">{children}</span>
    </button>
  );
}
