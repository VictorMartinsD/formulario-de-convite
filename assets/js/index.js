// 1. Variáveis Globais e Seletores de Elementos
const themeToggle = document.getElementById('theme-toggle');
const themeText = document.getElementById('theme-text');
const archiveButton = document.getElementById('archive-button');
const fileInput = document.getElementById('file-input');
const fileNameDisplay = document.getElementById('file-name');
const errorMessage = document.getElementById('error-upload');
const form = document.querySelector('form');

// 2. Funções Principais

// Funções de localStorage
function saveFormData() {
  const formData = new FormData(form);
  const data = {};

  // Salva todos os inputs, textareas e selects
  form.querySelectorAll('input, textarea, select').forEach(element => {
    if (element.type === 'radio' || element.type === 'checkbox') {
      if (element.checked) {
        if (element.type === 'checkbox') {
          data[element.name] = data[element.name] || [];
          data[element.name].push(element.value);
        } else {
          data[element.name] = element.value;
        }
      }
    } else if (element.type === 'file') {
      // Não salva arquivos no localStorage
      if (element.files.length > 0) {
        data[element.name] = element.files[0].name;
      }
    } else {
      data[element.name] = element.value;
    }
  });

  // Salva o estado do tema
  data.theme = themeToggle.classList.contains('active') ? 'light' : 'dark';

  localStorage.setItem('formularioConvite', JSON.stringify(data));
}

function loadFormData() {
  const savedData = localStorage.getItem('formularioConvite');

  if (!savedData) return;

  try {
    const data = JSON.parse(savedData);

    // Restaura todos os inputs, textareas e selects
    form.querySelectorAll('input, textarea, select').forEach(element => {
      const value = data[element.name];

      if (value !== undefined) {
        if (element.type === 'radio') {
          element.checked = element.value === value;
        } else if (element.type === 'checkbox') {
          if (Array.isArray(value)) {
            element.checked = value.includes(element.value);
          } else {
            element.checked = value === element.value;
          }
        } else if (element.type === 'file') {
          // Não restaura arquivos, apenas o nome
          if (value && fileNameDisplay) {
            fileNameDisplay.textContent = value;
            fileNameDisplay.style.color = "var(--text-body)";
          }
        } else {
          element.value = value;
        }
      }
    });

    // Restaura o estado do tema
    if (data.theme) {
      if (data.theme === 'light') {
        themeToggle.classList.add('active');
        themeText.textContent = 'Claro';
      } else {
        themeToggle.classList.remove('active');
        themeText.textContent = 'Escuro';
      }
    }
  } catch (error) {
    console.error('Erro ao carregar dados do localStorage:', error);
  }
}

function clearFormData() {
  localStorage.removeItem('formularioConvite');
}

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

// Carrega dados salvos quando a página carrega
document.addEventListener('DOMContentLoaded', () => {
  loadFormData();
});

// Auto-salva quando os campos do formulário mudam
form.addEventListener('input', (e) => {
  if (e.target.type !== 'file') {
    saveFormData();
  }
});

// Auto-salva quando radio buttons e checkboxes mudam
form.addEventListener('change', (e) => {
  if (e.target.type === 'radio' || e.target.type === 'checkbox') {
    saveFormData();
  }
});

// Limpa localStorage quando o formulário é enviado com sucesso
form.addEventListener('submit', (e) => {
  // Se o formulário for enviado com sucesso, limpa os dados salvos
  setTimeout(() => {
    clearFormData();
  }, 1000);
});

// Controle da mascara de telefone
const phoneInput = document.getElementById('phone');

phoneInput.addEventListener('input', (e) => {
  e.target.value = maskPhone(e.target.value);
});

// Controle do Switch de Tema
themeToggle.addEventListener('click', () => {
  themeToggle.classList.toggle('active');
  themeText.textContent = themeToggle.classList.contains('active') ? 'Claro' : 'Escuro';
  saveFormData(); // Salva o estado do tema
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

      // Salva o nome do arquivo
      saveFormData();
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
