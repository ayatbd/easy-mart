import { baseApi } from "./baseApi";

export const cartApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        // Get all cart items for a specific user
        getCartItems: builder.query({
            query: (email) => `/carts?email=${email}`,
            providesTags: ["Cart"],
        }),
        // Add to Cart
        addToCart: builder.mutation({
            query: (item) => ({
                url: "/carts",
                method: "POST",
                body: item,
            }),
            invalidatesTags: ["Cart"],
        }),
        deleteCartItem: builder.mutation({
            query: (id) => ({
                url: `/carts/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Cart"],
        }),
    }),
});

export const { useGetCartItemsQuery, useAddToCartMutation, useDeleteCartItemMutation } = cartApi;