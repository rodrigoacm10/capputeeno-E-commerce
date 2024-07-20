"use client";

import { useProducts } from "@/hooks/useProduct";
import { ProductCard } from "./ProductCard";
import styled from "styled-components";

const ListContainer = styled.div`
  margin-top: 32px;
  display: grid;
  grid-template-columns: repeat(auto-fill, 256px);
  grid-gap: 32px;
  max-width: 100%;
`;

export function ProductsList() {
  const { data } = useProducts();
  console.log(data);
  return (
    <ListContainer>
      {data?.map((product) => (
        <ProductCard
          key={product.id}
          image={product.image_url}
          price={product.price_in_cents}
          title={product.name}
          id={product.id}
        />
      ))}
    </ListContainer>
  );
}
