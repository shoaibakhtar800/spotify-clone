import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam-song-recognizer.p.rapidapi.com',
        prepareHeaders: (headers) => {
            // headers.set('X-RapidAPI-Key', 'f3b3f0d1bcmsh82bddf219e6b9e7p1b619ejsn9cdc680adb5a');
            headers.set('X-RapidAPI-Key', import.meta.env.VITE_SHAZAM_CORE_RAPID_API_KEY);
            
            console.log(headers);
            return headers;
        },
    }),
    endpoints: (builder) => ({
        getTopCharts: builder.query({ query: () => '/top_country_tracks?country_code=US&limit=200&start_from=0' }),
        getSongDetails: builder.query({ query: ({ songid }) => `/track_about?track_id=${songid}` }),
        getSongRelated: builder.query({ query: ({ songid }) => `/related_tracks/?track_id=${songid}&limit=20&start_from=0` }),
        getArtistDetails: builder.query({ query: ( artistName ) => `/search_artist/?query=${artistName}&limit=50&start_from=0&lang=-`}),
        getSongsByCountry: builder.query({ query : (countryCode) => `/top_country_tracks?country_code=${countryCode}&limit=200&start_from=0`}),
        // getSongBySearch: builder.query({ query: (searchTerm) => `/search_track/?query=${searchTerm}&limit=50&start_from=0&lang=-` })
        getSongBySearch: builder.query({ query: (searchTerm) => `/search/?query=${searchTerm}&limit=50&start_from=0&lang=-` })
    }),
});

export const {
    useGetTopChartsQuery,
    useGetSongDetailsQuery,
    useGetSongRelatedQuery,
    useGetArtistDetailsQuery,
    useGetSongsByCountryQuery,
    useGetSongBySearchQuery,
} = shazamCoreApi;

