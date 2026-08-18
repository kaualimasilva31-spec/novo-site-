// Script do Meu Blog Tech
// Aqui voce pode adicionar interatividade no futuro

document.addEventListener('DOMContentLoaded', () => {
  console.log('⚽ Meu Blog Tech carregado com sucesso!');
    
      // Exemplo simples: aumenta o logo ao clicar
        const logo = document.querySelector('.logo');
          if (logo) {
              logo.addEventListener('click', () => {
                    logo.style.transform = logo.style.transform === 'scale(1.1)' ? 'scale(1)' : 'scale(1.1)';
                          logo.style.transition = 'transform 0.3s ease';
                              });
                                }
                                });
                                <button>❤️<span>0</span></button>
                                const botao = document.querySelector("button");
                                botao.addEventListener("click", botaoClicado);
                                function botaoClicado() {
                                  let texto = botao.querySelector("span");
                                  texto.textContent++;
                                  }
                                function botaoClicado() {
                                  console.log("fui clicado");
                                  let texto = botao.querySelector("span");

                                  if (curtiu === false) {
                                  texto.textContent++;
                                  curtiu = true;
                                  } else {
                                  texto.textContent--;
                                  curtiu = false;
                                  }
                                  }
                                