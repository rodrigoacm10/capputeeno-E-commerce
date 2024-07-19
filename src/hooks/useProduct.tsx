import { useQuery } from "@tanstack/react-query";
import { ProductsFetchResponse } from "@/types/productsFetchResponse";
import axios, { AxiosPromise } from "axios";
import { FilterType } from "@/types/filterTypes";
import {
  getCategoryByType,
  getFieldByPriority,
  mountQuery,
} from "@/utils/getCategoryByType";
import { useFilter } from "./useFilter";
import { PriorityTypes } from "@/types/priorityTypes";
import { useDeferredValue } from "react";

const API_URL = process.env.NEXT_PUBLIC_API_URL as string;

const fetcher = (query: string): AxiosPromise<ProductsFetchResponse> => {
  return axios.post(API_URL, {
    query,
  });
};

export function useProducts() {
  const { type, priority, search } = useFilter();
  const searchD = useDeferredValue(search);
  const query = mountQuery(type, priority);
  const { data } = useQuery({
    queryFn: () => fetcher(query),
    queryKey: ["products", type, priority],
  });

  const products = data?.data?.data?.allProducts;
  const filteredProducts = products?.filter((product) =>
    product.name.toLowerCase().includes(searchD.toLowerCase())
  );

  return {
    data: filteredProducts,
  };
}
