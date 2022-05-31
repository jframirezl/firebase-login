
let selector = document.getElementById("sel"); 
 
selector.addEventListener("click", () => {
  selector.addEventListener("change", () => {
    switch (selector.value) {
      case "es":
          location.href="index.html";
        break;  
      case "en":
       location.href="index-en.html";
        break; 
    }
  });
});