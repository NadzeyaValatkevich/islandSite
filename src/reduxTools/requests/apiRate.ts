import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const URL = `https://api.nbrb.by/exrates/rates/`;

type Rates = {
  Cur_ID: number;
  Date: string;
  Cur_Abbreviation: string;
  Cur_Scale: number;
  Cur_Name: string;
  Cur_OfficialRate: number;
};

export const apiRate = createApi({
  reducerPath: "apiRate",
  baseQuery: fetchBaseQuery({
    baseUrl: URL,
    headers: {
      Accept: "application/json",
    },
  }),
  endpoints: (build) => ({
    getRate: build.query<Rates, string>({
      query: (name) => `${name}?parammode=2`,
    }),
  }),
});

export const { useGetRateQuery } = apiRate;
