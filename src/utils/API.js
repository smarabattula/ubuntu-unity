import Papa from 'papaparse';

export default {
  getQuizQuestions: function () {

    return new Promise((resolve, reject) => {
      Papa.parse('https://docs.google.com/spreadsheets/d/e/2PACX-1vS8y7TVxHMPBuAVo_HZVax8yoz5GgbbWZQkTWmk2DJ9VIOMGgDbqn8ek2dSfbSHeIAHyIQi0ixhz8_H/pub?output=csv', {
        download: true,
        header: true,
        complete: function (results) {
          var data = results.data
          resolve(data);
        },
        error: function (error) {
          reject(error);
        },
      });
    });
  },
};