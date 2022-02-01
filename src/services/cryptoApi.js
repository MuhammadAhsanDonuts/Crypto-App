import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': '3a5ecf99e6msh722f8853e5dbe74p1bc7c7jsn70ced27551d8'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com'


const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi', 
    baseQuery: fetchBaseQuery({baseUrl}), 
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: () => createRequest('/coins')
        }), 

        // getCryptoDetails: builder.query({
        //     query: (coinId) => createRequest(`/coin/${coinId}`),
        //   }),
    })
}) 

export const { 
    useGetCryptosQuery,
    // useGetCryptoDetailsQuery,
 } = cryptoApi;