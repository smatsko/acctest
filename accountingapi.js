import User from "./utils/classUser.js";
import {changePassword, fetchUser, registerUser} from "./utils/accountActions.js";

let button = document.getElementById('register');
button.addEventListener('click', () => {
    let user = new User(
        document.getElementById('login').value,
        document.getElementById('password').value,
        document.getElementById('firstName').value,
        document.getElementById('familyName').value
    )
    registerUser(user)
        .then(
            response => {
                if (response.ok) return response.json();
                return response.json().then(response => {
                    throw new Error(response.error)
                })
            })
        .then(res => {
            const elementRes = createElement(`Result: ${JSON.stringify(res)}`, 'h1');
            addResult(elementRes);
            document.getElementById('login1').value = document.getElementById('login2').value = user.login;
        })
        .catch(e => {
            const elementError = createElement(`Error: ${e.message}`, 'h1');
            addResult(elementError);
        })

})


button = document.getElementById('changePasswordBtn');
button.addEventListener('click', () => {
    changePassword(document.getElementById('login2').value,
        document.getElementById('oldPassword').value,
        document.getElementById('newPassword').value)
        .then(
            response => {
                if (!response.ok) {
                    return response.json().then(response => {
                        throw new Error(response.error);
                    })
                }
                return (response);
            })
        .then( response => {
            const element = createElement( "Password changed", 'h1');
            addResult(element);
        })
        .catch(e => {
            const elementError = createElement(`Error: ${e.message}`, 'h1');
            addResult(elementError);
        })
});


button = document.getElementById('getInfo');
button.addEventListener('click', () => {
    fetchUser(document.getElementById('login1').value,
        document.getElementById('password1').value)
        .then(
            response => {
                if (response.ok) return response.json();
                return response.json().then(response => {
                    throw new Error(response.error)
                })
            })
        .then(res => {
            const elementRes = createElement(`Result: ${JSON.stringify(res)}`, 'h1');
            addResult(elementRes);
        })
        .catch(e => {
            const elementError = createElement(`Error: ${e.message}`, 'h1');
            addResult(elementError);
        })
});


function addResult(element) {
    let result = document.getElementById('result');
    result.innerHTML = "";
    result.appendChild(element);
}

function createElement(content, tag) {
    const element = document.createElement(tag);
    const text = document.createTextNode(content);
    element.appendChild(text);
    return element;
}




