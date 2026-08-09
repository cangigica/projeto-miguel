function mostrarSurpresa() {

    const surpresa = document.getElementById("surpresa");

    surpresa.style.display = "block";

    criarCoracoes();

}


function atualizarTempo() {

    const inicio = new Date("2026-06-14T00:00:00");

    const agora = new Date();

    const diferenca = agora - inicio;

    const dias = Math.floor(
        diferenca / (1000 * 60 * 60 * 24)
    );

    const horas = Math.floor(
        (diferenca / (1000 * 60 * 60)) % 24
    );

    const minutos = Math.floor(
        (diferenca / (1000 * 60)) % 60
    );

    document.getElementById("tempo").innerText =
        `${dias} dias, ${horas} horas e ${minutos} minutos`;

}


setInterval(atualizarTempo, 1000);

atualizarTempo();


function criarCoracoes() {

    for (let i = 0; i < 15; i++) {

        const coracao = document.createElement("div");

        coracao.innerHTML = "❤️";

        coracao.style.position = "fixed";

        coracao.style.left =
            Math.random() * 100 + "%";

        coracao.style.bottom = "-30px";

        coracao.style.fontSize =
            Math.random() * 20 + 15 + "px";

        coracao.style.animation =
            "subir 4s linear forwards";

        coracao.style.zIndex = "10";

        document.body.appendChild(coracao);

        setTimeout(() => {

            coracao.remove();

        }, 4000);

    }

}


function abrirSurpresa() {

    const telaInicial =
        document.getElementById("telaInicial");

    telaInicial.classList.add("sumir");

    setTimeout(() => {

        telaInicial.style.display = "none";

    }, 1000);

}


function mostrarCarta() {

    const carta =
        document.getElementById("cartaFinal");

    carta.style.display = "block";

    carta.scrollIntoView({
        behavior: "smooth"
    });

    criarCoracoes();

}