import { AUTH_KEY, BASE_URL } from "./constantsApi";

const _getResponse = (res) => {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
};

const _getResponseIds = (res) => {
    if (res.ok) {
        return res.json();
    }
    console.log("повтор запроса")
    return fetch(BASE_URL, {
        method: "POST",
        headers: {
            "X-Auth": AUTH_KEY,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            "action": "get_ids",
        })
    }).then(_getResponse);
}

const _getResponseItems = (res, arrayIds) => {
    if (res.ok) {
        return res.json();
    }
    console.log("повтор запроса")
    return fetch(BASE_URL, {
        method: "POST",
        headers: {
            "X-Auth": AUTH_KEY,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            "action": "get_items",
            "params": { "ids": arrayIds }
        })
    }).then(_getResponse);
}

const getIds = () => {
    return fetch(BASE_URL, {
        method: "POST",
        headers: {
            "X-Auth": AUTH_KEY,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            "action": "get_ids",
        })
    }).then(_getResponseIds);
};
const getItems = (arrayIds) => {
    return fetch(BASE_URL, {
        method: "POST",
        headers: {
            "X-Auth": AUTH_KEY,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            "action": "get_items",
            "params": { "ids": arrayIds }
        })
    }).then((res) => _getResponseItems(res, arrayIds));

}

export { getIds, getItems };