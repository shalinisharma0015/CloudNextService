function loadComponent(id, file){
  fetch(file)
    .then(res => res.text())
    .then(data => {
      document.getElementById(id).innerHTML = data;
    });
}

document.addEventListener("DOMContentLoaded", function(){
  loadComponent("header", "header.html");
  loadComponent("footer", "footer.html");
});