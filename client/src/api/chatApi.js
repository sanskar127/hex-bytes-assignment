import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const chatApi = createApi({
    reducerPath: 'chatApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3000/api',
        prepareHeaders: (headers, { getState }) => {
            const token = getState().auth.accesstoken

            if (token) {
                headers.set('Authorization', `Bearer ${token}`)
            }
            return headers
        }
    }),
    endpoints: builder => ({
        getMessages: builder.query({
            query: receiverId => `/message/${receiverId}`
        }),
        sendMessage: builder.mutation({
            query: ({ receiverId, message }) => ({
                url: `/message/send/${receiverId}`,
                method: 'PUT',
                body: {message},
            }),
        }),
        getUsers: builder.query({
            query: () => '/users',
        }),
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetMessagesQuery, useSendMessageMutation, useGetUsersQuery } = chatApi