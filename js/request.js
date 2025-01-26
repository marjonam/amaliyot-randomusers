// api
const API = "https://randomuser.me/api/?results=9";

// for leader
const overlay = document.getElementById("overlay");

//toggle loader

//request promise

const getData = (resource) => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    request.addEventListener("readystatechange", () => {
      if (request.readyState < 4) {
        console.log("loading....");
      } else if (request.readyState == 4 && request.status == 200) {
        const data = JSON.parse(request.responseText);
        console.log(data.results);
      } else if (request.request == 4) {
        console.log("error");
      }
    });
    request.open("GET", resource);
    request.send();
  });
};

getData(API);
