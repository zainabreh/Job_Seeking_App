import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { clearUserInfo, setUserInfo } from './auth.slice';
export const authApi = createApi({
    reducerPath:"authApi",
    baseQuery: fetchBaseQuery({
        baseUrl:"http://localhost:8000",
        credentials:'include',
        mode: 'cors'
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
            }),
            async onQueryStarted(args,{dispatch,queryFulfilled}){
                try {
                    await queryFulfilled
                    console.log("inside query login");

                    dispatch(authApi.endpoints.getProfile.initiate(null))
                    
                } catch (error) {
                    dispatch(clearUserInfo)
                }
            }
        }),

        getProfile:  builder.query({
            query: ()=>"getUserProfile",
            async onQueryStarted(args,{dispatch,queryFulfilled}){
                try {
                    console.log("inside get profile api");
                    
                    const {data} = await queryFulfilled
                    console.log("get profile api data",data);

                    if(data.success === false){
                        dispatch(clearUserInfo({
                            user: null,
                            isAuthenticated: false
                        }))
                    }
                    
                    dispatch(setUserInfo({
                        user: data,
                        isAuthenticated: true
                    }))


                } catch (error) {
                    dispatch(clearUserInfo({
                        user: null,
                        isAuthenticated: false
                    }))
                }
            }
        }),

        logoutUser: builder.mutation({
            query: ()=>({
                url:"/auth/logout",
                method:"POST",
            })

        })

    })
})

export const {useRegisterUserMutation,useLoginUserMutation,useLogoutUserMutation,useGetProfileQuery} = authApi