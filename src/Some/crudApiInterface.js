function request() {
    const apiCall = async (url, config = {}) => {

        try {
            const res = await fetch(url, config);
            const data = await res.json();
            return {
                success: true,
                data
            };
        } catch (err) {
            return {
                success: false,
                error: err.message
            };
        }
    };

    const get = (url, config = {}) => {
        return apiCall(url, config);
    };

    const post = (url, data, config = {}) => {
        config.method = "POST";
        config.body = JSON.stringify(data);
        return apiCall(url, config);
    };

    const put = (url, data, config = {}) => {
        config.method = "PUT";
        config.body = JSON.stringify(data);
        return apiCall(url, config);
    };

    const patch = (url, data, config = {}) => {
        config.method = "PATCH";
        config.body = JSON.stringify(data);
        return apiCall(url, config);
    };

    const del = (url, config = {}) => {
        config.method = "DELETE";
        return apiCall(url, config);
    };

    return { get, post, put, patch, del };
}

export default request();