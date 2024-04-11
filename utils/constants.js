//export const baseUrl = 'https://webaccounting.herokuapp.com/account'
export const baseUrl = 'http://localhost:8080/account'
export const createToken = (login, password) => `Basic ${window.btoa(login + ':' + password)}`;