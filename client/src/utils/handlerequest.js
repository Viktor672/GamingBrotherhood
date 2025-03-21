export let handleRequest = async (url, method, data = {}, additionOpts = {}) => {
    let options = {
        method,
        headers: {
            'Content-Type': 'application/json',
            ...additionOpts.headers
        },
    };

    if (method !== 'GET') {
        options.body = JSON.stringify(data);
    }

    let response = await fetch(url, options);

    if (response.status === 204) {
        return;
    }

    let result = await response.json();

    return result;
}
