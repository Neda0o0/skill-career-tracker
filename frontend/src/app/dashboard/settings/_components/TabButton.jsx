import { memo } from "react";

const TabButton = ({ label, isActive, onClick }) => {
  return (
    <li role="presentation">
      <button
        type="button"
        onClick={onClick}
        role="tab"
        aria-selected={isActive}
        className={`pb-2 transition ${
          isActive
            ? "border-b-2 border-purple-600 font-semibold text-purple-600"
            : "text-gray-500 hover:text-purple-500"
        }`}
      >
        {label}
      </button>
    </li>
  );
};

export default memo(TabButton);
