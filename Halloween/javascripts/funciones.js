function sleep(time) {
	return new Promise((resolve) => setTimeout(resolve, time));
}

function mostrar(identificador) {
	document.getElementById(identificador).style.visibility = 'visible';
}

function ocultar(identificador) {
	document.getElementById(identificador).style.visibility = 'hidden';
}

function sonar(elemento) {
	document.getElementById(elemento).play();
}

function parar(elemento) {
	sleep(1000).then(() => {
		document.getElementById(elemento).pause();
	});
}
