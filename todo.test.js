
const todo = require('./todo.mock');

describe('todo', ()=> {
    beforeEach(()=> {
        return todo.inital();
    })
    test('Add todo', async ()=> {
        return expect(todo.addTodo('Buy milk')).resolves.toEqual({
            id: expect.any(Number),
            title: 'Buy milk'
        });
    })

    test('Update todo', async ()=> {
        return expect(todo.updateTodo(1, 'Buy coffee')).resolves.toEqual({
            id: 1,
            title: 'Buy coffee'
        });
    })

    test('Delete todo', async ()=> {
        return expect(todo.deleteTodo(1)).resolves.toEqual({id: 1});
    })

    test('Update todo with wrong id', async ()=> {
        return expect(todo.updateTodo(2, 'Buy coffee')).rejects.toEqual(
           'Data not found'
        );
    })

    test('Delete todo with wrong id', async ()=> {
        return expect(todo.deleteTodo(2)).rejects.toEqual(
            'Data not found'
        );
    })

    test('Get todo by id', async ()=> {
        return expect(todo.getTodoById(1)).resolves.toEqual({
            id: 1,
            title: expect.any(String)
        });
    })

    test('Get todo by id with wrong id', async ()=> {
        return expect(todo.getTodoById(2)).rejects.toEqual(
            'Data not found'
        );
    })

    test('Get All todo', async ()=> {
        const result = await todo.getTodo();
        if(!result) {
            expect(result).toEqual(expect.any(Array));
        }
        if(result.length === 0) {
            expect(result).toEqual([]);
        }
        else if(result.length){
            for (let i = 0; i < result.length; i++) {
                expect(result[i]).toEqual(
                    expect.objectContaining({
                        id: expect.any(Number),
                        title: expect.any(String)
                    })
                )
            }
        }
    })

    afterEach(()=> {
        return todo.clear();
    })

})