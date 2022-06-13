let selectorIndex = document.getElementById("sel-index");
let selectorReg = document.getElementById("sel-reg");

let filePath = self.location.href;
let lastSlash = filePath.lastIndexOf("/");
let fileName = filePath.substring(lastSlash + "/".length, filePath.length);



if (fileName === "index.html" || fileName === "index-en.html") {
  selectorIndex.addEventListener("click", () => {
    selectorIndex.addEventListener("change", () => {
      switch (selectorIndex.value) {
        case "es":
          location.href = "index.html";
          break;
        case "en":
          location.href = "index-en.html";
          break;
      }
    });
  });
}

if (fileName === "registration.html" || fileName === "registration-en.html") {
  selectorReg.addEventListener("click", () => {
    selectorReg.addEventListener("change", () => {
      switch (selectorReg.value) {
        case "es":
          location.href = "registration.html";
          break;
        case "en":
          location.href = "registration-en.html";
          break;
      }
    });
  });
}