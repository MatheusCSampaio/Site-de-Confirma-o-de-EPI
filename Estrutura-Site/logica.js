            //Peguei o quadro de assinatura e o botão de limpar do HTML
const canvas = document.getElementById("quadrado-assinatura");
const botãoLimpar = document.getElementById("botão-limpar");
const formulario = document.getElementById("formulario-de-epi");
            //Defini o contexto do desenho para duas dimensões
const contexto = canvas.getContext("2d");
            //Agora eu criei uma variável para saber se o usuário está desenhando ou não
let desenhando = false;
            //Irei separar por alguns passos, para que seja melhor de entender como farei para o desenho funcionar

            //1- Função que ativa quando clicar ou tocar na tela.
function iniciarDesenho(evento) {
    desenhando = true;
    contexto.beginPath(); //Essa linha, avisa ao navegador para começar uma linha nova
}
            //2- Função que ativa quando o usuário soltar o clique ou tirar o dedo
function pararDesenho() {
    desenhando=false;
}
            //3- Essa é a função principal. Vai rodar sempre que o mouse ou o dedo se movem no quadrado
function desenhar(evento) {
    if (desenhando === false) return; //Se não estier clicado, vai sair da função e não desenha nada.
    
    evento.preventDefault(); //Essa função, impede o celular de rodar a tela enquanto desenha.

    const limites = canvas.getBoundingClientRect(); //Sabe a posição exata do quadrado na tela
            //Pega a posição do mouse ou do toque.
    const clienteX = evento.touches ? evento.touches[0].clientX : evento.clientX;
    const clienteY = evento.touches ? evento.touches[0].clientY : evento.clientY;
            //Ajusta a posição proporcionalmente se o CSS esticar o quadrado
    const posiçãoX = (clienteX - limites.left) * (canvas.width / limites.width);
    const posiçãoY = (clienteY - limites.top) * (canvas.height / limites.height);

            //Configuração do traço da caneta.
    contexto.lineWidth = 2; //Grossura da linha
    contexto.linecap = "round"; //Ponta da caneta mais arredondada
    contexto.strokeStyle = "#000000"; //Cor
            //Faz o desenho acontecer na posição correta.
    contexto.lineTo(posiçãoX, posiçãoY);
    contexto.stroke();
            //O lineTO é um caminho em linha reta que a caneta faz. Stroke passa a tinta para que o usuário possa ver o desenho e o lineCap deixa a ponta redonda.
}

            //Mouse
canvas.addEventListener("mousedown", iniciarDesenho);
canvas.addEventListener("mouseup", pararDesenho);
canvas.addEventListener("mousemove", desenhar);
            //Touch
canvas.addEventListener("touchstart", iniciarDesenho);
canvas.addEventListener("touchend", pararDesenho);
canvas.addEventListener("touchmove", desenhar);
            //Função para limpar tudo que foi desenhado no quadradado.
function limparTela() {
    contexto.clearRect(0, 0, canvas.width, canvas.height); //Apaga tudo do ponto inicial ao final.
}

botãoLimpar.addEventListener("click", limparTela);

            //Função que vai rodar quando o funcionario confirmar a retirada.
function enviarFormulario(evento) {
    evento.preventDefault(); //Essa função impede a página de recarregar e sumir com os dados.

    alert("Botão clicado com sucesso!");

            //1- Vou pegar os valores do usuário
    const nome = document.getElementById("nome-funcionario").value;
    const epi = document.getElementById("lista-epis").value;
            //2- Transformar o desenho do canvas em um texto.
    const imagemAssinatura = canvas.toDataURL();

    alert("Dados capturados com sucesso!:\Nome: " + nome + " \nEPI: " + epi);
}
            //Agora aqui é para o formulario ouvir o envio e chamar a função acima
formulario.addEventListener("submit", enviarFormulario);