// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Creamos el array para guardar los amigos
let amigos = [];

// Función para añadir un amigo a la lista
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim(); // eliminamos espacios extras

    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    if (amigos.includes(nombre)) {
        alert("Ese nombre ya está en la lista.");
        return;
    }

    amigos.push(nombre); // lo guardamos en el array
    actualizarLista(); // mostramos en la lista HTML
    input.value = ""; // limpiamos el campo
}

// Función para actualizar la lista visual en el HTML
function actualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // limpiamos antes de volver a pintar

    amigos.forEach(amigo => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Debes ingresar al menos 2 nombres para sortear.");
        return;
    }

    // Selección aleatoria
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSecreto = amigos[indiceAleatorio];

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>🎉 El amigo secreto es: <strong>${amigoSecreto}</strong></li>`;
}
