const user = [];

function initData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            user.push("ADMIN");
            resolve("User initialized!");
        }, 2000);
    })
}

function clearData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            user.pop();
            resolve("User cleared!");
        }, 2000);
    })
}

function isUser(name) {
    return user[0] === name
}

module.exports = {initData, clearData, isUser};