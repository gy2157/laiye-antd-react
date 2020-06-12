import * as cookie from 'js-cookie';

export const getCache = (key, autoParse = true) => {
    let value = window.localStorage.getItem(key);
    if (autoParse !== false && isNotNull(value)) {
        try {
            value = JSON.parse(value);
        } catch (e) {}
    }
    return value as any;
};

export const setCache = (key, value) => {
    if (isNull(value)) {
        window.localStorage.removeItem(key);
    } else if (isPlainObject(value) || isArray(value)) {
        window.localStorage.setItem(key, JSON.stringify(value));
    } else if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
        window.localStorage.setItem(key, String(value));
    } else {
        throw new Error(`unsupported value type : ${value}, ${typeof value}`);
    }
};

export const getCookie = (key) => {
    return cookie.get(key);
};

export const setCookie = (key, value, options = { expires: 1 }) => {
    if (isNull(value)) {
        return cookie.remove(key, options);
    }
    return cookie.set(key, value, options);
};

export const isNull = (value) => {
    const isEmpty = typeof value === 'string' && value === '';
    const isNotANumber = typeof value === 'number' && isNaN(value);
    return value === null || value === undefined || isEmpty || isNotANumber;
};

export const isNotNull = (value) => !isNull(value);

export const isEmptyObj = (value) => {
    if (typeof value === 'undefined' || value === null || typeof value !== 'object') {
        return true;
    }
    let name;
    for (name in value) {
        return false;
    }
    return true;
};

export const isNotEmptyObj = (value) => !isEmptyObj(value);
export const isPlainObject = (value) =>
    isNotNull(value) && typeof value === 'object' && Object.getPrototypeOf(value) === Object.prototype;

export const isArray = (value) =>
    isNotNull(value) && typeof value === 'object' && Object.getPrototypeOf(value) === Array.prototype;
