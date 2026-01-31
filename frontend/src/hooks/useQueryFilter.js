"use client";

import { useSearchParams } from "next/navigation";
import { useMemo } from "react";

/**
 * useQueryFilter
 * فیلتر کردن آرایه داده‌ها بر اساس query پارامتر "q" در URL
 *
 * @param {Array} items - آرایه داده‌ها
 * @param {Array} fields - فیلدهایی از آیتم که باید جستجو شود
 * @returns {Array} filteredItems
 */
export default function useQueryFilter(items, fields = []) {
  const searchParams = useSearchParams();
  const query = searchParams.get("q")?.toLowerCase() || "";

  const filteredItems = useMemo(() => {
    if (!query) return items;

    return items.filter((item) =>
      fields.some((field) => String(item[field]).toLowerCase().includes(query))
    );
  }, [items, query, fields]);

  return filteredItems;
}
