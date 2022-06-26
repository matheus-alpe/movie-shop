const APIKEY = process.env.VUE_APP_API_KEY || '';

export const requestInterceptor = (config) => {
    config.url += `&api_key=${APIKEY}`;
    return config;
};

export const responseInterceptor = (response) => {
    if (response.status === 401) {
        console.log('### response:', response);
    }

    return response;
};
