import {baseUrl, createToken} from "./constants.js";

export const registerUser = (user) => {
    return fetch(`${baseUrl}/register`, {
        method: 'Post',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

export const fetchUser = (login, password) => {
    return fetch(`${baseUrl}/login`, {
        method: 'Post',
        headers: {
            'Authorization': createToken(login, password)
        }
    })
}

export const changePassword = (login, oldPassword, newPassword) => {
    return fetch(`${baseUrl}/user/password`, {
        method: 'Put',
        headers: {
            'Authorization': createToken(login, oldPassword),
            'X-Password': newPassword
        }
    })
}