export let handleRequest = async (url, method, data = {}, additionOpts = {}) => {
    let options = {
        method,
        headers: {
            'Content-Type': 'application/json',
            ...additionOpts.headers
        },
        ...additionOpts
    };

    if (method !== 'GET') {
        options.body = JSON.stringify(data);
    }

    let response = await fetch(url, options);

   if(!response.ok){
    return;
   }

    if (response.status === 204) {
        return;
    }

    let result = await response.json();

    return result;
}
