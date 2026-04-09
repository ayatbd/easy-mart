import { baseApi } from "../api/baseApi";

export const exploreProductsApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: (params) => {
                const { page = 1, limit = 10, category, search } = params || {};

                let url = `/products?page=${page}&limit=${limit}`;

                if (category) url += `&category=${category}`;
                if (search) url += `&search=${search}`;

                return url;
            },
        }),
        getProductById: builder.query({
            query: (id) => `/products/${id}`,
        }),

    }),
});

export const { useGetProductsQuery, useGetProductByIdQuery } = exploreProductsApi;