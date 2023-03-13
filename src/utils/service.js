import axios from 'axios';

var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Origin","Access-Control-Allow-Origin");


// var raw = JSON.stringify(data);

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};  

export const datass =async () => {
  const check = await fetch("https://540b-122-172-81-166.in.ngrok.io/elections/", requestOptions)
  .then(response => response.text())
  .then(result => {
      sessionStorage.setItem("token" ,result.refresh);
      console.log(result)})
  .catch(error => console.log('error', error));
    
}
