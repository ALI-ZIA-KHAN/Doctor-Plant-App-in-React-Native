import axios from 'axios';




export const  transactionWithimage = async data => {
    console.log(data,'transaction')
    return new Promise(async (resolve, reject) => {
    axios({
      url: `http://192.168.43.34:5000`,
      method: 'post',
      data: data,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data'
      },
    })
      .then(function (response) {
        console.log('*****handle success******');
        resolve(response)
        console.log(response.data);
 
      })
      .catch(function (response) {
        console.log('*****handle failure******');
        console.log(response);
        reject(response)
      });

  
})
};