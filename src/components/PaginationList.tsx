"use client";

import { useFilter } from "@/hooks/useFilter";
import styled from "styled-components";
import { ArrowLeftIcon } from "./icons/ArrowLeftIcon";
import { ArrowRightIcon } from "./icons/ArrowRightIcon";

const PaginationContainer = styled.div`
  font-family: inherit;

  margin-top: 24px;

  display: flex;
  align-items: center;
  gap: 8px;
  place-self: end;
`;

const PaginationUList = styled.ul`
  font-family: inherit;
  list-style: none;
  display: flex;
  gap: 2px;
`;

const PaginationItem = styled.button<{ onPage: boolean }>`
  font-family: inherit;
  border: 1.5px solid
    var(${(props) => (props.onPage ? "--nav-color-active" : "--nav-color")});
  background-color: var(--nav-color);
  font-weight: ${(props) => (props.onPage ? "600" : "400")};
  color: ${(props) =>
    props.onPage ? "var(--nav-color-active)" : "var(--text-dark)"};
  width: 32px;
  height: 32px;
  border-radius: 8px;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const PaginationBtnsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
`;

const PaginationButtons = styled.button`
  cursor: pointer;
  font-family: inherit;
  border: 1.5px solid var(--nav-color);
  background-color: var(--nav-color);
  font-weight: 400;
  color: var(--text-dark);
  width: 32px;
  height: 32px;
  border-radius: 8px;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export function PaginationList() {
  const { page, setPage } = useFilter();

  return (
    <PaginationContainer>
      <PaginationUList>
        <li>
          <PaginationItem onPage={page == 0} onClick={() => setPage(0)}>
            1
          </PaginationItem>
        </li>
        <li>
          <PaginationItem onPage={page == 1} onClick={() => setPage(1)}>
            2
          </PaginationItem>
        </li>
        <li>
          <PaginationItem onPage={page == 2} onClick={() => setPage(2)}>
            3
          </PaginationItem>
        </li>
        <li>
          <PaginationItem onPage={page == 3} onClick={() => setPage(3)}>
            4
          </PaginationItem>
        </li>
        <li>
          <PaginationItem onPage={page == 4} onClick={() => setPage(4)}>
            5
          </PaginationItem>
        </li>
      </PaginationUList>
      <PaginationBtnsContainer>
        <PaginationButtons
          onClick={() => {
            if (page == 0) {
              setPage(4);
            } else {
              setPage(page - 1);
            }
          }}
        >
          <ArrowLeftIcon />
        </PaginationButtons>
        <PaginationButtons
          onClick={() => {
            if (page == 4) {
              setPage(0);
            } else {
              setPage(page + 1);
            }
          }}
        >
          <ArrowRightIcon />
        </PaginationButtons>
      </PaginationBtnsContainer>
    </PaginationContainer>
  );
}
