document.addEventListener("DOMContentLoaded", () => {
    const sky = document.querySelector(".sky");
    let intervaloPassaros;
    let formacaoAtiva = true;
  
    /**
     * Cria um grupo de pássaros em formação V
     */
    function criarGrupoDePassaros() {
      const grupo = document.createElement("div");
      grupo.classList.add("bird-group");
  
      const altura = Math.random() * 35 + 15;
      grupo.style.top = `${altura}%`;
  
      const duracao = Math.random() * 10 + 10;
      grupo.style.animationDuration = `${duracao}s`;
  
      const quantidade = Math.floor(Math.random() * 3) + 3;
  
      for (let i = 0; i < quantidade; i++) {
        const passaro = document.createElement("div");
        passaro.classList.add("bird");
        passaro.style.marginTop = `${i * 10}px`;
        grupo.appendChild(passaro);
      }
  
      sky.appendChild(grupo);
  
      grupo.addEventListener("animationend", () => {
        grupo.remove();
      });
    }
  
    /**
     * Inicia a formação automática de pássaros
     */
    function iniciarFormacao() {
      intervaloPassaros = setInterval(() => {
        if (Math.random() > 0.4 && formacaoAtiva) {
          criarGrupoDePassaros();
        }
      }, 5000);
    }
  
    function pararFormacao() {
      clearInterval(intervaloPassaros);
    }
  
    iniciarFormacao();
  
    // Eventos do mouse
  
    // Clique simples → Exibe alerta
    document.addEventListener("click", () => {
      alert("Usuário clicou na tela");
    });
  
    // Duplo clique → Cria um grupo extra de pássaros
    document.addEventListener("dblclick", () => {
      criarGrupoDePassaros();
    });
  
    // Movimento do mouse → Mostra posição no console
    document.addEventListener("mousemove", (evento) => {
      console.log(`Mouse em: X=${evento.clientX}, Y=${evento.clientY}`);
    });
  
    // Eventos do teclado
  
    document.addEventListener("keydown", (evento) => {
      const tecla = evento.key.toLowerCase();
  
      switch (tecla) {
        case "b": // Adiciona grupo de pássaros manualmente
          criarGrupoDePassaros();
          break;
  
        case "s": // Liga/Desliga formação automática
          formacaoAtiva = !formacaoAtiva;
          alert(formacaoAtiva ? "Pássaros ativados" : "Pássaros desativados");
          break;
  
        case "c": // Remove todos os pássaros
          document.querySelectorAll(".bird-group").forEach((grupo) => grupo.remove());
          alert("Todos os pássaros foram removidos");
          break;
  
        default:
          console.log(`Tecla pressionada: ${tecla}`);
      }
    });
  });
  