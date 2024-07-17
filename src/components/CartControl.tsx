"use client";

import { useLocalStorage } from "@/hooks/useLocalStorage";
import styled from "styled-components";
import { CartIcon } from "./icons/CartIcon";

const CarCount = styled.span`
  color: white;
  backgroun-color: var(--delete-color);
  width: 17px;
  height: 17px;
  padding: 0px 5px;

  font-size: 10px;

  border-radius: 100%;
  margin-left: 10px;
`;
// position: absolute;
//   transform: translateY(-50%);
//   right: -10px;
const Container = styled.div`
  position: relative;
`;

export function CartControl() {
  const { value } = useLocalStorage("cart-items", []);

  return (
    <Container>
      <CartIcon />
      {value.length ? <CarCount>{value.length}</CarCount> : ""}
    </Container>
  );
}
