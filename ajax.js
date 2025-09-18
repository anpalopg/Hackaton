document.addEventListener("DOMContentLoaded", function () {
  let formulario = document.querySelector("form");
  let btnRegistro = document.querySelector(".button");
  let labelUsername = document.getElementById("username");
  let labelPassword = document.getElementById("password");

  btnRegistro.addEventListener("click", function (e) {
    e.preventDefault();

    let username = labelUsername.value;
    let password = labelPassword.value;

    enviarDatos(username, password);
  });
});

function enviarDatos(username, password) {
  setTimeout(() => {
    mostrarResultado("El registro ha sido exitoso");
  }, 1500);
}

function mostrarResultado(mensaje) {
  let contenedor = document.querySelector(".regform");
  contenedor.innerHTML = `
        <h1>Resultado del registro</h1>
        <p>${mensaje}</p>
        <a href="login.html">Ir al login</a>
    `;
}
