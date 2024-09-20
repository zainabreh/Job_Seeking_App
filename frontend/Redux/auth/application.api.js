import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const applicationApi = createApi({
    
    reducerPath:"applicationApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:8000",
        mode:'cors',
        credentials:"include"
    }),    
    endpoints: (builder)=>({
        createApplication: builder.mutation({
            query: (data)=>({
                url:"/application/create",
                method:"POST",
                body: data
            })
        }),
        getUserApplication: builder.query({
            query: ()=>({
                url:"/applications/employerAll",
                method:"GET"
            })
        }),
        getRecuiterApplication: builder.query({
            query: ()=>({
                url:"/applications/recuiterAll",
                method:"GET"
            })
        })
    })
})

export const {useCreateApplicationMutation,useGetUserApplicationQuery,useGetRecuiterApplicationQuery} = applicationApi