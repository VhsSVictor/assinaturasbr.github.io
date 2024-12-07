document.querySelectorAll("button").forEach(button => {
  button.addEventListener("click", () => {
    alert("Funcionalidade de compra será implementada!");
  });
});

document.querySelector("form").addEventListener("submit", event => {
  event.preventDefault();
  alert("Mensagem enviada com sucesso!");
});
