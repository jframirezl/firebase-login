let selector = document.getElementById("sel"); 
 
selector.addEventListener("click", () => {
  selector.addEventListener("change", () => {
    switch (selector.value) {
      case "es":
          location.href="registration.html";
        break;  
      case "en":
       location.href="registration-en.html";
        break; 
    }
  });
});