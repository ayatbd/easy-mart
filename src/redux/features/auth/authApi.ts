import { baseApi } from "../../api/baseApi";

const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        registerUser: builder.mutation({
            query: (userData) => ({
                url: "/users",
                method: "POST",
                body: userData,
            }),
        }),
        login: builder.mutation({
            query: (credentials) => ({
                url: "/jwt",
                method: "POST",
                body: credentials,
            }),
        }),
    }),
});

export const { useRegisterUserMutation, useLoginMutation } = authApi;