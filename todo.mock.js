 function inital() {
    return Promise.resolve();
}

function addTodo(todo) {
    return Promise.resolve({
        id: 1,
        title: todo
    });
}

function updateTodo(id, todo) {
    if(id !== 1) return Promise.reject('Data not found');
    return Promise.resolve({
        id,
        title: todo
    });
}

function deleteTodo(id) {
    if(id !== 1) return Promise.reject('Data not found')
    return Promise.resolve({
        id
    });
}

function getTodoById(id) {
    if(id !== 1) return Promise.reject('Data not found');
    return Promise.resolve({
        id,
        title: 'Buy milk'
    });
}

function getTodo() {
    return Promise.resolve([
        {
            id: 1,
            title: 'Buy milk'
        }
    ]);
}

function clear() {
    return Promise.resolve();
}


module.exports = {inital, addTodo, updateTodo, deleteTodo, clear, getTodoById,getTodo};