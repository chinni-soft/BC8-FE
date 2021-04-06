

export const getIdToken = () => {
    return sessionStorage.getItem('idToken');
}

export const oAuthRequest = (request) => {
    return {
        ...request,
        headers: {
            ...request.headers,
            'Authorization': `Bearer ${getIdToken()}`
        }
  };
}