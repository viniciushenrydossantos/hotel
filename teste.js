// Seleciona elementos do modal
const authModal = document.getElementById("authModal");
const aContainer = document.getElementById("a-container"); // Cadastro
const bContainer = document.getElementById("b-container"); // Login

// Botões do header
const loginBtn = document.getElementById("btn-login");
const signupBtn = document.getElementById("btn-signup");

// Botão fechar
const closeBtn = document.getElementById("closeAuth");

// Funções para abrir/fechar modal
function openLogin() {
  authModal.style.display = "flex";
  aContainer.style.display = "none";
  bContainer.style.display = "block";
}

function openSignup() {
  authModal.style.display = "flex";
  aContainer.style.display = "block";
  bContainer.style.display = "none";
}

function closeModal() {
  authModal.style.display = "none";
}

// Event listeners header
loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  openLogin();
});

signupBtn.addEventListener("click", (e) => {
  e.preventDefault();
  openSignup();
});

// Fechar modal clicando no X
closeBtn.addEventListener("click", closeModal);

// Fechar clicando fora do modal
window.addEventListener("click", (e) => {
  if (e.target === authModal) closeModal();
});

// Fechar com ESC
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});

// Alternar entre Login e Cadastro dentro do modal
const switchToLogin = bContainer.querySelector(".submit"); // botão "Entrar" → vai para login
const switchToSignup = aContainer.querySelector(".submit"); // botão "Registrar" → vai para cadastro

switchToLogin.addEventListener("click", (e) => {
  e.preventDefault();
  openSignup();
});

switchToSignup.addEventListener("click", (e) => {
  e.preventDefault();
  openLogin();
});
