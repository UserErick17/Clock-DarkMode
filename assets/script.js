const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const relogio = setInterval(function time() {
	let dateToday = new Date();
	let hr = dateToday.getHours();
	let min = dateToday.getMinutes();
	let s = dateToday.getSeconds();

	if (hr < 10) hr = "0" + hr
	if (min < 10) min = "0" + min
	if (s < 10) s = "0" + s

	horas.textContent = hr;
	minutos.textContent = min;
	segundos.textContent = s;
});


/*
old code 

const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
const btn = document.getElementById('dark-mode-btn');

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

// Detecta automaticamente se o modo escuro está habilitado
if (darkModeMediaQuery.matches) {
    document.body.classList.add('dark-mode');
}

// Adiciona um listener de eventos ao botão para alternar manualmente entre os modos
if (btn.addEventListener('click', toggleDarkMode)){

	var dark = "Shine";

	let input = document.getElementById("dark-mode-btn").innerHTML = Shine;
  input.value = Shine;
  
  Inclui o input no elemento body
  document.body.appendChild( button )
}
*/



//Da preferencia ao modo escuro na janela
const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
const btn = document.getElementById('dark-mode-btn');

//ativa e desativa o darkMode
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    updateButtonText();
}

//Verifica se o modo escuro esta ativo e modifica o texto no botão
function updateButtonText() {
    const isDarkMode = document.body.classList.contains('dark-mode');
    btn.textContent = isDarkMode ? 'Light Mode' : 'Dark Mode';
}

// Detecta automaticamente se o modo escuro está habilitado
if (darkModeMediaQuery.matches) {
    document.body.classList.add('dark-mode');
}

// Adiciona um listener de eventos ao botão para alternar manualmente entre os modos
btn.addEventListener('click', toggleDarkMode);

// Atualiza o texto do botão ao carregar a página
updateButtonText();