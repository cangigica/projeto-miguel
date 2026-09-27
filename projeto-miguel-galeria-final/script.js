document.addEventListener("DOMContentLoaded", () => {

    const telaInicial = document.querySelector(".tela-inicial");

    const telas = [
        document.getElementById("telaJogo"),
        document.getElementById("telaHistoria"),
        document.getElementById("telaConquistas"),
        document.getElementById("telaGol"),
        document.getElementById("telaCarta"),
        document.getElementById("telaGaleria"),
        document.getElementById("telaFinal")
    ];

    function mostrarTela(tela) {
        telas.forEach(secao => {
            if (secao) secao.classList.remove("ativa");
        });

        if (tela) {
            tela.classList.add("ativa");
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    }

    // TELA INICIAL → RELATIONSHIP.EXE
    const botaoEntrar = document.getElementById("botaoEntrar");

    if (botaoEntrar) {
        botaoEntrar.addEventListener("click", () => {
            if (telaInicial) {
                telaInicial.classList.add("saindo");

                setTimeout(() => {
                    telaInicial.style.display = "none";
                    mostrarTela(document.getElementById("telaJogo"));
                }, 700);
            } else {
                mostrarTela(document.getElementById("telaJogo"));
            }
        });
    }

    // RELATIONSHIP.EXE → MEMORY DATABASE
    const botaoContinuar = document.getElementById("botaoContinuar");

    if (botaoContinuar) {
        botaoContinuar.addEventListener("click", () => {
            mostrarTela(document.getElementById("telaHistoria"));
        });
    }

    // MEMÓRIAS
    const mapaMemorias = {
        memoriaComeco: "modalComeco",
        memoriaPenDrive: "modalPenDrive",
        memoriaEncontro: "modalEncontro",
        memoriaFamilia: "modalFamilia",
        memoriaAniversario: "modalAniversario"
    };

    document.querySelectorAll(".botao-memoria").forEach(botao => {
        botao.addEventListener("click", () => {
            const idModal = botao.getAttribute("data-modal") || mapaMemorias[botao.id];
            const modal = document.getElementById(idModal);

            if (modal) {
                modal.classList.add("aberta");
                document.body.style.overflow = "hidden";
            }
        });
    });

    // FECHAR MODAIS
    document.querySelectorAll(".fechar-modal").forEach(botao => {
        botao.addEventListener("click", () => {
            const modal = botao.closest(".modal");

            if (modal) {
                modal.classList.remove("aberta");
                document.body.style.overflow = "";
            }
        });
    });

    document.querySelectorAll(".modal").forEach(modal => {
        modal.addEventListener("click", event => {
            if (event.target === modal) {
                modal.classList.remove("aberta");
                document.body.style.overflow = "";
            }
        });
    });

    document.addEventListener("keydown", event => {
        if (event.key === "Escape") {
            const modalAberto = document.querySelector(".modal.aberta");

            if (modalAberto) {
                modalAberto.classList.remove("aberta");
                document.body.style.overflow = "";
            }
        }
    });

    // MEMORY DATABASE → ACHIEVEMENTS
    const botaoFinalHistoria = document.getElementById("botaoFinalHistoria");

    if (botaoFinalHistoria) {
        botaoFinalHistoria.addEventListener("click", () => {
            mostrarTela(document.getElementById("telaConquistas"));
        });
    }

    // ACHIEVEMENTS
    const conquistas = document.querySelectorAll(".conquista");
    const mensagemConquista = document.getElementById("mensagemConquista");

    conquistas.forEach(conquista => {
        conquista.addEventListener("click", () => {
            const mensagem = conquista.getAttribute("data-mensagem");

            if (mensagem && mensagemConquista) {
                mensagemConquista.textContent = mensagem;
            }

            conquistas.forEach(item => item.classList.remove("selecionada"));
            conquista.classList.add("selecionada");
        });
    });

    // ACHIEVEMENTS → GOL
    const botaoGol = document.getElementById("botaoGol");

    if (botaoGol) {
        botaoGol.addEventListener("click", () => {
            mostrarTela(document.getElementById("telaGol"));
        });
    }

    // GOL → CARTA
    const botaoContinuarGol = document.getElementById("botaoContinuarGol");

    if (botaoContinuarGol) {
        botaoContinuarGol.addEventListener("click", () => {
            mostrarTela(document.getElementById("telaCarta"));
        });
    }

    // ABRIR CARTA
    const botaoAbrirCarta = document.getElementById("botaoAbrirCarta");
    const envelope = document.getElementById("envelope");
    const cartaAberta = document.getElementById("cartaAberta");

    if (botaoAbrirCarta) {
        botaoAbrirCarta.addEventListener("click", () => {
            if (envelope) envelope.style.display = "none";
            if (cartaAberta) cartaAberta.classList.add("visivel");
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }

    // CARTA → GALERIA
    const botaoGaleria = document.getElementById("botaoGaleria");

    if (botaoGaleria) {
        botaoGaleria.addEventListener("click", () => {
            mostrarTela(document.getElementById("telaGaleria"));
        });
    }

    // GALERIA → FINAL
    const botaoFinalGaleria = document.getElementById("botaoFinalGaleria");

    if (botaoFinalGaleria) {
        botaoFinalGaleria.addEventListener("click", () => {
            mostrarTela(document.getElementById("telaFinal"));
        });
    }

    // GALERIA: FOTO AMPLIADA
    const modalFoto = document.getElementById("modalFoto");
    const imagemAmpliada = document.getElementById("imagemAmpliada");
    const legendaFoto = document.getElementById("legendaFoto");
    const fecharFoto = document.getElementById("fecharFoto");

    document.querySelectorAll(".foto-card").forEach(card => {
        card.addEventListener("click", () => {
            const imagem = card.querySelector("img");
            const legenda = card.querySelector(".foto-legenda");

            if (imagemAmpliada && imagem) {
                imagemAmpliada.src = imagem.src;
                imagemAmpliada.alt = imagem.alt;
            }

            if (legendaFoto && legenda) {
                legendaFoto.textContent = legenda.textContent;
            }

            if (modalFoto) {
                modalFoto.classList.add("aberta");
                document.body.style.overflow = "hidden";
            }
        });
    });

    function fecharModalFoto() {
        if (modalFoto) modalFoto.classList.remove("aberta");
        document.body.style.overflow = "";
    }

    if (fecharFoto) {
        fecharFoto.addEventListener("click", fecharModalFoto);
    }

    if (modalFoto) {
        modalFoto.addEventListener("click", event => {
            if (event.target === modalFoto) {
                fecharModalFoto();
            }
        });
    }

    document.addEventListener("keydown", event => {
        if (event.key === "Escape" && modalFoto && modalFoto.classList.contains("aberta")) {
            fecharModalFoto();
        }
    });

    // CARTA → FINAL (mantido como alternativa caso o botão exista)
    const botaoFinalCarta = document.getElementById("botaoFinalCarta");

    if (botaoFinalCarta) {
        botaoFinalCarta.addEventListener("click", () => {
            mostrarTela(document.getElementById("telaFinal"));
        });
    }

});
