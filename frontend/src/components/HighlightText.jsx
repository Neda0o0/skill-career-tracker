"use client";

const escapeRegExp = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

const HighlightText = ({ text, highlight }) => {
  if (!highlight) return text;

  const regex = new RegExp(`(${escapeRegExp(highlight)})`, "gi");
  const parts = text.split(regex);

  return parts.map((part, index) =>
    regex.test(part) ? (
      <mark key={index} className="bg-yellow-200 text-black px-1 rounded">
        {part}
      </mark>
    ) : (
      <span key={index}>{part}</span>
    )
  );
};

export default HighlightText;
