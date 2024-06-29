const insertUser = require('./insertUser');

describe('insertUser', ()=> {
    beforeEach(() => {
        return insertUser.initData();
    });
      
    afterEach(() => {
        return insertUser.clearData();
    });
    
    test('User is ADMIN', () => {
        expect(insertUser.isUser('ADMIN')).toBeTruthy();
    })

    test('User is not ADMIN', () => {
        expect(insertUser.isUser('JELLOPY')).toBeFalsy();
    })
})

