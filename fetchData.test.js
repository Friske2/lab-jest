const fetchData = require("./fetchData");

test("the data is Data fetched!", async () => {
    return expect(fetchData(1)).resolves.toBe('Data fetched!');
});

test("test data is data not fetched!", async () => {
    return expect(fetchData(null)).rejects.toMatch('Data not fetched!');
});