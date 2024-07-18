"use client";
import styled from "styled-components";
import { FilterByType } from "./FilterByType";
import { FilterByPriority } from "./FilterByPriority";

interface FilterBarProps {}

const FilterContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-item: center;
`;

export function FilterBar() {
  return (
    <FilterContainer>
      <FilterByType />
      <FilterByPriority />
    </FilterContainer>
  );
}
