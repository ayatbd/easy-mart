import { baseApi } from "./baseApi";

const wishlistApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        // Get all wishlist items for a specific user
        getWishlistItems: builder.query({
            query: (email) => `/wishlist?email=${email}`,
            providesTags: ["Wishlist"],
        }),
        addToWishlist: builder.mutation({
            query: (item) => ({
                url: "/wishlist",
                method: "POST",
                body: item,
            }),
            invalidatesTags: ["Wishlist"],
        }),
        deleteWishlistItem: builder.mutation({
            query: (id) => ({
                url: `/wishlist/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Wishlist"],
        }),
    }),
});

export const { useGetWishlistItemsQuery, useAddToWishlistMutation, useDeleteWishlistItemMutation } = wishlistApi;