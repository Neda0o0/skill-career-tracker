"use client";

const FaqItem = ({ question, answer, isOpen, onToggle }) => {
  return (
    <div className="border rounded-md overflow-hidden">
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex justify-between items-center p-3 text-left font-medium hover:bg-gray-50 transition"
      >
        <span>{question}</span>
        <span className="text-lg">{isOpen ? "−" : "+"}</span>
      </button>

      {isOpen && (
        <div className="p-3 text-sm text-gray-600 border-t">
          {answer || "Answer will be added soon."}
        </div>
      )}
    </div>
  );
};

export default FaqItem;
