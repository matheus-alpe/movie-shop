import store from '@/store'

const APIKEY = process.env.VUE_APP_API_KEY || '';

/**
 * Concat APIKEY for each request to API domain.
 * 
 * @param { import("axios").AxiosRequestConfig } config 
 * @returns { import("axios").AxiosRequestConfig }
 */
export const requestInterceptor = (config) => {
    store.dispatch('setLoadingState', true);
    config.url += `&api_key=${APIKEY}`;
    return config;
};

export const responseInterceptor = (response) => {
    store.dispatch('setLoadingState', false);
    return response;
}