// ! JANGAN DIMODIFIKASI
const dates = [
  "2019-01-02", // 1546387200 (epoch time, dalam detik)
  "2022-05-06 00:00:00 UTC-2", // 1651802400 (epoch time, dalam detik)
  "2021-03-04 07:00:00 UTC", // 1614841200 (epoch time, dalam detik)
  "2021-04-05 00:00:00 UTC+2", // 1617573600 (epoch time, dalam detik)
  "2020-02-03 UTC+7", // 1580662800 (epoch time, dalam detik)
];

// TODO: Buatlah fungsi createDate
const createDate = (arr, i) => {
  if (i === undefined) {
    let result = [];
    let str = "";
    for (let j = 0; j < arr.length; j++) {
      let d = new Date(arr[j]);
      result.push(d.getTime()/1000);
    }
    for (let k = 0; k < result.length; k++) {
      if (k === result.length - 1) {
        str += `${result[k]}`;  
      } else {
        str += `${result[k]}-`;
      }
    }
    return str;
  }
  
  if (i > 0) {
    let date = new Date(arr[i]);
    return date.getTime()/1000;
  }
};

// ! JANGAN DIMODIFIKASI
(() => {
  // IIFE

  // '1546387200-1580662800-1614841200-1617573600-1651802400' (dalam string)
  console.log(createDate?.(dates));

  // '1614841200' (dalam string)
  console.log(createDate?.(dates, 2));
})();

module.exports = {
  dates,
  createDate,
};
