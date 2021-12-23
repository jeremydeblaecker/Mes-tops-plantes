const divPlantes = `
<div class="col-12 col-md-4">
    <div onclick="openInAppBrowser('__link__')">
      <div class="card">
      <img src="__src__" class="card-img-top" />
      <div class="card-body">
          <h5 class="card-title">__top__. __title__</h5>
          <p class="card-text">
              __description__
          </p>
      </div>
      </div>
    </div>
</div>
`;

const htmlToElement = (html) => {
  const template = document.createElement("template");
  html = html.trim(); // Never return a text node of whitespace as the result
  template.innerHTML = html;
  return template.content.firstChild;
};
const divList = document.getElementById("list");

const fetchApiDone = (json) => {
  json.forEach((plantes, i) => {
    const newDivPlante = divPlantes
      .replace("__link__", plantes.link)
      .replace("__src__", plantes.img)
      .replace("__top__", i + 1)
      .replace("__title__", plantes.name)
      .replace("__description__", plantes.description);
    divList.appendChild(htmlToElement(newDivPlante));
  });
};

const fetchLocal = (url) => {
  return new Promise(function (resolve, reject) {
    const xhr = new XMLHttpRequest();
    xhr.onload = function () {
      resolve(new Response(xhr.response, { status: xhr.status }));
    };
    xhr.onerror = function () {
      reject(new TypeError("Local request failed"));
    };
    xhr.open("GET", url);
    xhr.responseType = "arraybuffer";
    xhr.send(null);
  });
};

const fetchApiPlantes = () => {
  fetchLocal("api/plantes.json").then((response) =>
    response.json().then(fetchApiDone)
  );
};

if ("cordova" in window) {
  document.addEventListener("deviceready", fetchApiPlantes);
} else {
  document.addEventListener("DOMContentLoaded", fetchApiPlantes);
}

const stockage = JSON.parse(localStorage.getItem("plantesStockage"));
function creationDiv()
{    
  for (let i=0; i<stockage.length; i++)
  {
      const newDivPlante = divPlantes
        .replace("__top__", i + 6)
        .replace("__title__", stockage[i].nom)
        .replace("__description__", stockage[i].description);
      divList.appendChild(htmlToElement(newDivPlante));
  } 
}
creationDiv();