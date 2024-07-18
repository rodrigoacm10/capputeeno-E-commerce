import styled from "styled-components";
import { ArrowIcon } from "./icons/ArrowIcon";
import { useState } from "react";
import { useFilter } from "@/hooks/useFilter";
import { priorityTypes } from "@/types/priorityTypes";

const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  button {
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--text-dark);
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    font-family: inherit;
  }

  svg {
    margin-left: 16px;
  }
`;

const ProrityFilter = styled.ul`
  width: 200px;
  background-color: white;
  position: absolute;
  top: 100%;
  right: 0px;
  border-radius: 4px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  padding: 12px 16px;
  background: transparent;
  list-style: none;

  li {
    cursor: pointer;

    color: var(--text-dark);
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
  }

  li + li {
    margin-top: 4px;
  }
`;

export function FilterByPriority() {
  const [isOpen, setIsOpen] = useState(false);
  const { setPriority } = useFilter();

  const handleUpdatePriority = (value: priorityTypes) => {
    setPriority(value);
    setIsOpen(false);
  };

  return (
    <FilterContainer>
      <button onClick={() => setIsOpen(!isOpen)}>
        Organizar por
        <ArrowIcon />
      </button>
      {isOpen ? (
        <ProrityFilter>
          <li onClick={() => handleUpdatePriority(priorityTypes.NEWS)}>
            Novidades
          </li>
          <li onClick={() => handleUpdatePriority(priorityTypes.BIGGEST_PRICE)}>
            Preço: Maior - menor
          </li>
          <li onClick={() => handleUpdatePriority(priorityTypes.MINOR_PRICE)}>
            Preço: Maior - menor
          </li>
          <li onClick={() => handleUpdatePriority(priorityTypes.POPULARITY)}>
            Mais vendidos
          </li>
        </ProrityFilter>
      ) : (
        ""
      )}
    </FilterContainer>
  );
}
