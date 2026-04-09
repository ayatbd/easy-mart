import { baseApi } from "./baseApi";

const cartApi = baseApi.injectEndpoints({
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
            invalidatesTags: ["Cart"], // This forces the header count to update
        }),
        // Add to Wishlist
        addToWishlist: builder.mutation({
            query: (item) => ({
                url: "/wishlist",
                method: "POST",
                body: item,
            }),
            invalidatesTags: ["Wishlist"],
        }),
    }),
});

export const {
    useGetCartItemsQuery,
    useAddToCartMutation,
    useAddToWishlistMutation
} = cartApi;