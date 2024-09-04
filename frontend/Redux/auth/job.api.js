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
        methid: "GET",
      }),
    }),
    getsingleJob: builder.query({
      query: () => ({
        url: "/job/singleJob",
        methid: "GET",
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
      query: (data) => ({
        url: "/job/deleteJob",
        method: "POST",
        body: data,
      }),
    }),
    updateJob: builder.mutation({
      query: (data) => ({
        url: "/job/updateJob",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {
  useGetallJobsQuery,
  useGetsingleJobQuery,
  useCreateJobMutation,
  useDeleteJobMutation,
  useUpdateJobMutation,
} = authApi;
