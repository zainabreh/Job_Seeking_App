import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const jobApi = createApi({
  reducerPath: "jobApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000",
    credentials: "include",
    mode: "cors",
  }),
  endpoints: (builder) => ({
    getallJobs: builder.query({
      query: () => ({
        url: "/job/all",
        method: "GET",
      }),
    }),
    getsingleJob: builder.query({
      query: (id) => ({
        url: `/job/singleJob/${id}`,
        method: "GET",
      }),
    }),
    createJob: builder.mutation({
      query: (data) => ({
        url: "/job/newJob",
        method: "POST",
        body: data,
      }),
    }),

    deleteJob: builder.mutation({
      query: (id) => ({
        url: `/job/deleteJob/${id}`,
        method: "DELETE",
      }),
    }),
    updateJob: builder.mutation({
      query: (data) => ({
        url: `/job/updateJob/${data._id}`,
        method: "PUT",
        body: data.formData,
      }),
    }),
    getMyJobs: builder.query({
      query: () => ({
        url: "/job/getmyJobs",
        method: "GET"
      })
    }),
  }),
});

export const {
  useGetallJobsQuery,
  useGetMyJobsQuery,
  useGetsingleJobQuery,
  useCreateJobMutation,
  useDeleteJobMutation,
  useUpdateJobMutation,
} = jobApi;
