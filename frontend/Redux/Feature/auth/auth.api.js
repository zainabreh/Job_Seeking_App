import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'
export const authApi = createApi({
    reducerPath:"authApi",
    baseQuery: fetchBaseQuery({
        baseUrl:"http://localhost:8000",
        credentials:'include'
    }),
    endpoints: (builder)=>({
        registerUser: builder.mutation({
            query: (data)=>({
                url:"/auth/signup",
                method:'POST',
                body: data,
            })
        }),

        loginUser:  builder.mutation({
            query: (data)=>({
                url:"/auth/login",
                method:"POST",
                body:data,
            })
        }),

        getProfile:  builder.query({
            query: ()=>"/user/getUserProfile"
        }),

        logoutUser: builder.mutation({
            url:"/auth/logout",
            method:"POST",

        })

    })
})

export const {useRegisterUserMutation,useLoginUserMutation,useLogoutUserMutation,useGetProfileQuery} = authApi