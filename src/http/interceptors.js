const APIKEY = process.env.VUE_APP_API_KEY || '';


/**
 * Concat APIKEY for each request to API domain.
 * 
 * @param { import("axios").AxiosRequestConfig } config 
 * @returns 
 */
export const requestInterceptor = (config) => {
    config.url += `&api_key=${APIKEY}`;
    return config;
};