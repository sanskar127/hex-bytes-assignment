import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3000/api/auth',
        prepareHeaders: (headers, { getState }) => {
            // Add Authorization or other custom headers here
            const token = getState().auth.accesstoken; // Assuming the token is stored in the auth slice

            if (token) {
                headers.set('Authorization', `Bearer ${token}`);
            }
            return headers;
        },
    }),
    endpoints: builder => ({
        signin: builder.mutation({
            query: credentials => ({
                url: '/login',
                method: 'POST',
                body: credentials,
            }),
        }),
        signup: builder.mutation({
            query: credentials => ({
                url: '/signup',
                method: 'PUT',
                body: credentials,
            }),
        }),
        getdetails: builder.query({
            query: () => '/getdetails'
        })
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useSigninMutation, useSignupMutation, useGetdetailsQuery } = authApi