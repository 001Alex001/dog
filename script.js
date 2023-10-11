const image = document.getElementById("image");
const button = document.getElementById("button");
const loader = document.getElementById("loader");
button.onclick = function () {
  getImageUrl().then(function (result) {
    try {
      const data = JSON.parse(result);
      image.src = data.message;
    } catch {}
  });
};
function getImageUrl() {
  return new Promise(function (res, rej) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://dog.ceo/api/breeds/image/random");
    xhr.send();
    xhr.onload = function (params) {
      if (xhr.status === 200) {
        res(xhr.response);
      } else {
        rej(new Error());
      }
    };
  });
}