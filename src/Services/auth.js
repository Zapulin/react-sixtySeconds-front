
export function isLoggedIn() {
    const token = window.localStorage.getItem("token")
    return !!token
}

export function storeToken (token) {
    window.localStorage.removeItem("token")
    window.localStorage.setItem("token", token)
}

export function getStorageToken () {
    return window.localStorage.getItem("token")
}

export function logOut (){
    localStorage.clear();
    window.location.href = '/';
}