// 1. Variáveis Globais e Seletores de Elementos
const themeToggle = document.getElementById('theme-toggle');
const themeText = document.getElementById('theme-text');
const archiveButton = document.getElementById('archive-button');
const fileInput = document.getElementById('file-input');
const fileNameDisplay = document.getElementById('file-name');
const errorMessage = document.getElementById('error-upload');

// 2. Funções Principais

// Controle de mascara de telefone
function maskPhone(value) {
  value = value.replace(/\D/g, "");

  if (value.length > 10) {
    // Layout para Celular: (99) 99999-9999
    return value
      .replace(/(\d{2})(\d)/, "($1) $2")
      .replace(/(\d{5})(\d)/, "$1-$2")
      .replace(/(-\d{4})\d+?$/, "$1");
  } else {
    // Layout para Fixo: (99) 9999-9999
    return value
      .replace(/(\d{2})(\d)/, "($1) $2")
      .replace(/(\d{4})(\d)/, "$1-$2")
      .replace(/(-\d{4})\d+?$/, "$1");
  }
}

// 3. Eventos (Clicks, Forms, etc)

// Controle da mascara de telefone
const phoneInput = document.getElementById('phone');

phoneInput.addEventListener('input', (e) => {
  e.target.value = maskPhone(e.target.value);
});

// Controle do Switch de Tema
themeToggle.addEventListener('click', () => {
  themeToggle.classList.toggle('active');
  themeText.textContent = themeToggle.classList.contains('active') ? 'Claro' : 'Escuro';
});

// Aciona o seletor de arquivos ao clicar no botão personalizado
archiveButton.addEventListener('click', () => {
  fileInput.click();
});

// Lógica de seleção e validação do arquivo
fileInput.addEventListener('change', function() {
  const file = this.files[0];

  if (file) {
    if (file.type.startsWith('image/')) {
      // Caso seja imagem: Sucesso
      fileNameDisplay.textContent = file.name;
      fileNameDisplay.style.color = "var(--text-body)";

      // Esconde o erro
      errorMessage.style.display = "none";
      errorMessage.style.visibility = "hidden";
    } else {
      // Caso não seja imagem: Erro
      fileNameDisplay.textContent = "Nenhum arquivo selecionado";
      fileNameDisplay.style.color = "var(--input-placeholder)";

      // Força a exibição do erro (sobrepondo o visibility:hidden da classe geral)
      errorMessage.style.display = "flex";
      errorMessage.style.visibility = "visible";
      errorMessage.style.opacity = "1";

      this.value = ""; // Limpa o input para permitir tentar de novo
    }
  }
});
