import { IDepartment, IMeta } from "@/types"
import { tagTypes } from "../features/tag-types"
import { baseApi } from "./baseApi"
const DEPARTMENT_URL = '/management-departments'

export const departmentApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    addDepartment: build.mutation({
      query: (data) => ({
        url: DEPARTMENT_URL,
        method: 'POST',
        data: data
      }),
      invalidatesTags: [tagTypes.department]
    }),
    getDepartments: build.query({
      query: (arg:Record<string, any>) => ({
        url: DEPARTMENT_URL,
        method: 'GET',
        params: arg
      }),
      transformErrorResponse: (response: IDepartment, meta: IMeta) => {
        return {
          departments: response,
          meta
        }
      },
      providesTags: [tagTypes.department]
    }),
  }),
})

export const { useAddDepartmentMutation, useGetDepartmentsQuery } = departmentApi