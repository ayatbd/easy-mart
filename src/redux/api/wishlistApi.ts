import { baseApi } from "./baseApi";

const wishlistApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        // Get all wishlist items for a specific user
        getWishlistItems: builder.query({
            query: (email) => `/wishlist?email=${email}`,
            providesTags: ["Wishlist"],
        }),
    }),
});

export const { useGetWishlistItemsQuery } = wishlistApi;