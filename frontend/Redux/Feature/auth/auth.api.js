import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'
export const authApi = createApi({
    reducerPath:"authApi",
    baseQuery: fetchBaseQuery({
        baseUrl:"http://localhost:8000/auth",
        credentials:'include'
    }),
    endpoints: (builder)=>({
        registerUser: builder.mutation({
            query: (data)=>({
                url:"/signup",
                method:'POST',
                body: data,
            })
        }),

        loginUser:  builder.mutation({
            query: (data)=>({
                url:"/login",
                method:"POST",
                body:data,
            })
        }),

        logoutUser: builder.mutation({
            url:"/logout",
            method:"POST",

        })

    })
})

export const {useRegisterUserMutation,useLoginUserMutation,useLogoutUserMutation} = authApi