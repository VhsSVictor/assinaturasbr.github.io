// Função para alternar as abas
function showTab(tabName) {
  const tabs = document.querySelectorAll('.tab-content');
  tabs.forEach(tab => {
    if (tab.id === tabName) {
      tab.style.display = 'block';
    } else {
      tab.style.display = 'none';
    }
  });
}

// Função para registrar um usuário
async function registrar(event) {
  event.preventDefault();
  const email = document.getElementById("novo-email").value;
  const senha = document.getElementById("nova-senha").value;
  
  const response = await fetch("https://seuservidor.com/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ email, senha })
  });
  const data = await response.json();
  alert(data.message);
}

// Função de login
async function logar(event) {
  event.preventDefault();
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;
  
  const response = await fetch("https://seuservidor.com/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ email, senha })
  });
  const data = await response.json();
  if (data.token) {
    alert("Login bem-sucedido");
    // Redirecionar ou armazenar token de sessão
  } else {
    alert("Falha no login");
  }
}

// Função de compra
function comprar(plano) {
  alert(`Você comprou o plano ${plano}`);
  // Enviar a compra para o back-end
  fetch("https://seuservidor.com/comprar", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ plano })
  });
}

// Função de envio de suporte
function enviarSuporte(event) {
  event.preventDefault();
  const nome = document.getElementById("nome").value;
  const mensagem = document.getElementById("mensagem").value;
  
  fetch("https://seuservidor.com/suporte", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ nome, mensagem })
  })
  .then(response => response.json())
  .then(data => alert(data.message))
  .catch(error => alert("Erro ao enviar mensagem"));
}
