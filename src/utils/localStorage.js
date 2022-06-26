export function get(key) {
    const session = JSON.parse(window.localStorage.getItem(key));

    return session;
}

export function set(key, data) {
    window.localStorage.setItem(key, JSON.stringify(data));
}
