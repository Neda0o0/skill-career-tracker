"use client";

const QuickHelpCard = ({ title, description, color, icon: Icon, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        ${color}
        text-white
        rounded-lg
        shadow-md
        p-4
        flex
        flex-col
        gap-2
        text-left
        transition
        hover:scale-[1.02]
        hover:shadow-lg
        focus:outline-none
        focus:ring-2
        focus:ring-offset-2
      `}
    >
      {Icon && <Icon className="text-2xl" />}

      <h3 className="text-lg font-semibold">{title}</h3>

      <p className="text-sm opacity-90 leading-relaxed">{description}</p>
    </button>
  );
};

export default QuickHelpCard;
