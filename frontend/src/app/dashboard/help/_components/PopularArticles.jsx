"use client";

import { useMemo } from "react";
import Link from "next/link";

const PopularArticles = ({ items, searchQuery }) => {
  const filteredItems = useMemo(() => {
    if (!searchQuery) return items;

    return items.filter((item) =>
      item.label.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [items, searchQuery]);

  return (
    <section className="flex-1">
      <h2 className="text-xl font-semibold py-4">Popular Articles</h2>

      <ul className="space-y-2">
        {filteredItems.map((item) => (
          <li key={item.id}>
            <Link
              href={`/help/${item.slug}`}
              className="block p-3 rounded-md border hover:bg-gray-50 transition"
            >
              {item.label}
            </Link>
          </li>
        ))}

        {filteredItems.length === 0 && (
          <li className="text-sm text-gray-500">No matching articles found.</li>
        )}
      </ul>
    </section>
  );
};

export default PopularArticles;
