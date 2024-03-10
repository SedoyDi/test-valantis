import { AUTH_KEY, BASE_URL } from "./constantsApi";

const _getResponse = (res) => {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
};

const getIds = () => {
    return fetch({ BASE_URL }, {
        method: "POST",
        headers: {
            "X-Auth": AUTH_KEY,
            "Content-Type": "application/json",
        },
        body:
            JSON.stringify({
                "action": "get_ids",
            })
    }).then(_getResponse);
};

export { getIds };