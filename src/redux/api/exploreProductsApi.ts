import { baseApi } from "../api/baseApi";

export const exploreProductsApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: ({ page, limit }) => ({
                url: `/products?page=${page}&limit=${limit}`,
                method: "GET",
            }),
            providesTags: ["Product"],
        }),
        getProductById: builder.query({
            query: (id) => ({
                url: `/products/${id}`,
                method: "GET",
            }),
            providesTags: ["Product"],
        }),

    }),
});

export const { useGetProductsQuery, useGetProductByIdQuery } = exploreProductsApi;