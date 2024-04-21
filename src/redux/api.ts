import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { AircraftsApiResponse, FlightsApiResponse } from "../typescript/types";

export const Api = createApi({
  reducerPath: "Api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://recruiting-assessment.alphasights.com/",
    prepareHeaders: (headers) => {
      headers.set("Content-type", "application/json");
      headers.set("Accept-Language", "en");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getAircrafts: builder.query<AircraftsApiResponse, void>({
      query: () => `api/aircrafts`,
    }),
    getFlights: builder.query<FlightsApiResponse, void>({
      query: () => `api/flights`,
    }),
    getAircraftData: builder.query<string, string>({
      query: (aircraftId) => `api/aircrafts/${aircraftId}`,
    }),
    getFlightData: builder.query<string, string>({
      query: (aircraftId) => `api/flights/${aircraftId}`,
    }),
  }),
});

export const {
  useGetAircraftDataQuery,
  useGetFlightDataQuery,
  useGetAircraftsQuery,
  useGetFlightsQuery,
} = Api;
