"use client";

import { useState, useMemo } from "react";
import FaqItem from "./FaqItem";

const splitIntoColumns = (items) => {
  const left = [];
  const right = [];

  items.forEach((item, index) => {
    if (index % 2 === 0) left.push(item);
    else right.push(item);
  });

  return [left, right];
};

const FaqSection = ({ items, searchQuery }) => {
  const [activeId, setActiveId] = useState(null);

  const filteredItems = useMemo(() => {
    if (!searchQuery) return items;

    return items.filter((item) =>
      `${item.label} ${item.description}`
        .toLowerCase()
        .includes(searchQuery.toLowerCase())
    );
  }, [items, searchQuery]);

  const [leftColumn, rightColumn] = splitIntoColumns(filteredItems);

  const toggle = (id) => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  return (
    <section>
      <h2 className="text-xl font-semibold py-4">FAQ</h2>

      {filteredItems.length === 0 && (
        <p className="text-sm text-gray-500 mb-3">
          No matching questions found.
        </p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col gap-3">
          {leftColumn.map((item) => (
            <FaqItem
              key={item.id}
              question={item.label}
              answer={item.description}
              isOpen={activeId === item.id}
              onToggle={() => toggle(item.id)}
            />
          ))}
        </div>

        <div className="flex flex-col gap-3">
          {rightColumn.map((item) => (
            <FaqItem
              key={item.id}
              question={item.label}
              answer={item.description}
              isOpen={activeId === item.id}
              onToggle={() => toggle(item.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
