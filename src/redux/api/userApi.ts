import { baseApi } from "./baseApi";

export const userApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        // Get user by email
        getUserByEmail: builder.query({
            query: () => `/users`,
            providesTags: ["User"],
        })
    }),
});

export const { useGetUserByEmailQuery } = userApi;