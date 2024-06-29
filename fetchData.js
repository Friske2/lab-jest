function fetchData(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(id === 1) {
        resolve("Data fetched!");
      } else {
        reject("Data not fetched!");
      }
    }, 2000);
  });
}

module.exports = fetchData;