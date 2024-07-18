"use client";

import { FilterType } from "@/types/filterTypes";
import { priorityTypes } from "@/types/priorityTypes";
import { createContext, ReactNode, useState } from "react";

export const FilterContext = createContext({
  search: "",
  page: 0,
  type: FilterType.ALL,
  priority: priorityTypes.NEWS,
  setPriority: (value: priorityTypes) => {},
  setSearch: (value: string) => {},
  setPage: (value: number) => {},
  setType: (value: FilterType) => {},
});

interface FilterContextProviderProps {
  children: ReactNode;
}

export function FilterContextProvider({
  children,
}: FilterContextProviderProps) {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(0);
  const [type, setType] = useState(FilterType.ALL);
  const [priority, setPriority] = useState(priorityTypes.NEWS);

  return (
    <FilterContext.Provider
      value={{
        search,
        page,
        type,
        priority,
        setPriority,
        setSearch,
        setPage,
        setType,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}
