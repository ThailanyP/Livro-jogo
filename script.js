var conteudoA = `
    <img id="fotos" src='imagens/city.png' />
    <h2>Capítulo 1: A Descoberta</h2>
    <p>Em uma pequena cidade chamada Nova Esperança, vivia uma jovem chamada Thay. Ela sempre foi fascinada por moda, vendo-a como uma forma de arte e expressão pessoal. Desde cedo, Thay sonhava em se tornar uma estilista famosa, capaz de criar roupas únicas e influenciar a cultura ao seu redor.</p>
    <button class="btn" id="botoes" onclick='carregarConteudo(conteudoB1)'>Ir para a Direita</button>
    <button class="btn" id="botoes" onclick='carregarConteudo(conteudoB2)'>Ir para a Esquerda</button>
`;

var conteudoB1 = `
    <img id="fotos" src='imagens/street.png' />
    <h2>Capítulo 2: A Ascensão</h2>
    <p>Com o passar dos anos, Thay começou a ganhar reconhecimento na indústria da moda. Suas criações únicas, combinando influências culturais e seu próprio estilo autêntico, conquistaram a atenção dos críticos e das celebridades. Ela se tornou uma das estilistas mais influentes da época.</p>
    <button class="btn" id="botoes" onclick='carregarConteudo(conteudoC1)'>Ir para a Direita</button>
    <button class="btn" id="botoes" onclick='carregarConteudo(conteudoC2)'>Ir para a Esquerda</button>
`;

var conteudoB2 = `
    <img id="fotos" src='imagens/party.png' />
    <h2>Capítulo 2: A Ascensão</h2>
    <p>Thay decide ir a uma festa na cidade, conhecida por ser um local onde as pessoas exibem suas melhores roupas e mostram sua criatividade. A festa é uma celebração da moda como forma de expressão e cultura, com diferentes estilos se misturando em harmonia.</p>
    <button class="btn" id="botoes" onclick='carregarConteudo(conteudoC3)'>Ir para a Direita</button>
    <button class="btn" id="botoes" onclick='carregarConteudo(conteudoC4)'>Ir para a Esquerda</button>
`;

var conteudoC1 = `
    <img id="fotos" src='imagens/designers.png' />
    <h2>Capítulo 3: O Desafio</h2>
    <p>Apesar de seu sucesso, Thay começou a se sentir presa às expectativas da indústria da moda. Ela percebeu que muitas vezes suas criações eram limitadas pelo que era considerado "tendência" naquele momento. Thay queria romper essas barreiras e criar algo completamente novo e revolucionário.</p>
    <button class="btn" id="botoes" onclick='carregarConteudo(conteudoD1)'>Ir para a Direita</button>
    <button class="btn" id="botoes" onclick='carregarConteudo(conteudoD2)'>Ir para a Esquerda</button>
`;

var conteudoC2 = `
    <img id="fotos" src='imagens/streetstyle.png' />
    <h2>Capítulo 3: O Desafio</h2>
    <p>Thay encontra um grupo de entusiastas da moda de rua, conhecidos por seus estilos únicos e ousados. Eles a convidam para um photoshoot de street style, onde cada um pode mostrar sua individualidade e compartilhar suas histórias através da moda.</p>
    <button class="btn" id="botoes" onclick='carregarConteudo(conteudoC3)'>Ir para a Direita</button>
    <button class="btn" id="botoes" onclick='carregarConteudo(conteudoC4)'>Ir para a Esquerda</button>
`;

var conteudoC3 = `
    <img id="fotos" src='imagens/workshop.png' />
    <h2>Capítulo 3: O Desafio</h2>
    <p>Thay descobre um workshop de moda em andamento, liderado por um renomado estilista. O workshop aborda técnicas de design, criação de padrões e costura. Ela participa do workshop e aprende a criar suas próprias roupas, expressando sua individualidade através do design.</p>
    <button class="btn" id="botoes" onclick='carregarConteudo(conteudoD1)'>Ir para a Direita</button>
    <button class="btn" id="botoes" onclick='carregarConteudo(conteudoD2)'>Ir para a Esquerda</button>
`;

var conteudoC4 = `
    <img id="fotos" src='imagens/exhibition.png' />
    <h2>Capítulo 3: O Desafio</h2>
    <p>Thay descobre uma exposição de moda que celebra os ícones do passado e as tendências atuais. A exposição é uma jornada através da história da moda, mostrando como a moda evoluiu ao longo do tempo e como influencia a cultura e a sociedade.</p>
    <button class="btn" id="botoes" onclick='carregarConteudo(conteudoD3)'>Ir para a Direita</button>
    <button class="btn" id="botoes" onclick='carregarConteudo(conteudoD4)'>Ir para a Esquerda</button>
`;

var conteudoD1 = `
    <img id="fotos" src='imagens/fashionweek.png' />
    <h2>Capítulo 4: Os Finais Diferentes</h2>
    <h2>Final 1: Sucesso Inabalável</h2>
    <p>O desafio de Thay foi um grande sucesso. Suas criações revolucionárias chamaram a atenção dos principais influenciadores da moda e foram amplamente elogiadas pela originalidade e coragem. Isso inspirou uma nova geração de artistas a se arriscar e criar suas próprias tendências. Thay tornou-se uma figura icônica na indústria da moda e sua influência continuou a crescer, levando-a a abrir sua própria casa de moda e criar uma marca renomada em todo o mundo.</p>
    <button class="btn btn-secondary" onclick='carregarConteudo(conteudoA)'>Ir para início</button>
    <button class="btn" id="botoes"><a href="capa.html">Sair</a></button>
`;

var conteudoD2 = `
    <img id="fotos" src='imagens/creativespace.png' />
    <h2>Capítulo 4: Os Finais Diferentes</h2>
    <h2>Final 2: Mudança Cultural</h2>
    <p>O desafio de Thay desencadeou uma mudança cultural na indústria da moda. Sua abordagem inovadora e corajosa inspirou outros a experimentarem e expressarem sua individualidade através da moda. Novos estilistas emergiram, criando uma comunidade vibrante e diversificada. A moda se tornou um meio de empoderamento e autoexpressão, refletindo a diversidade e a liberdade de pensamento. Thay, como uma das pioneiras desse movimento, continuou a promover a inclusão e a diversidade na indústria, deixando um legado duradouro.</p>
    <button class="btn btn-secondary" onclick='carregarConteudo(conteudoA)'>Ir para início</button>
    <button class="btn" id="botoes"><a href="capa.html">Sair</a></button>
 `;

 var conteudoD3 = `
    <img id="fotos" src='imagens/runway.png' />
    <h2>Capítulo 4: Os Finais Diferentes</h2>
    <h2>Final 3: Redescoberta Pessoal</h2>
    <p>Após o desafio, Thay sentiu a necessidade de se afastar da indústria da moda tradicional e se reconectar com suas raízes. Ela decidiu embarcar em uma jornada de autodescoberta, viajando pelo mundo e explorando diferentes culturas. Durante essa jornada, Thay mergulhou nas tradições e no artesanato local, encontrando inspiração em formas de expressão tradicionais. Ao retornar à moda, ela trouxe consigo uma nova abordagem, combinando sua visão original com as influências que descobriu em suas viagens. Seus designs refletiam uma síntese única de culturas e se tornaram uma celebração da diversidade e da beleza das tradições.</p>
    <button class="btn btn-secondary" onclick='carregarConteudo(conteudoA)'>Ir para início</button>
    <button class="btn" id="botoes"><a href="capa.html">Sair</a></button>
`;

var conteudoD4 = `
    <img id="fotos" src='imagens/retirement.png' />
    <h2>Capítulo 4: Os Finais Diferentes</h2>
    <h2>Final 4: Aposentadoria Pacífica</h2>
    <p>Após o desafio, Thay começou a questionar o impacto da indústria da moda no meio ambiente e na sociedade de consumo em geral. Ela decidiu que queria se afastar dessa realidade e se dedicar a causas sociais e ambientais. Thay usou sua influência para educar as pessoas sobre a importância da moda sustentável e trabalhou em projetos que ajudaram a fornecer empregos dignos para comunidades carentes. Embora tenha se afastado do mundo da moda tradicional, ela encontrou um novo propósito e satisfação em ajudar a construir um futuro mais justo e sustentável.</p>
    <button class="btn" id="botoes" onclick='carregarConteudo(conteudoA)'>Ir para início</button>
    <button class="btn" id="botoes"><a href="capa.html">Sair</a></button>
`;



var elemento = document.getElementById('conteudo');
var audio = document.getElementById('audio');
var modoNoturno = false;

function carregarConteudo(conteudo) {
    elemento.innerHTML = conteudo;
    reproduzirAudio();
}

function reproduzirAudio() {
    audio.pause();
    audio.currentTime = 0;
    audio.play();
}

function alternarModo() {
    modoNoturno = !modoNoturno;

    if (modoNoturno) {
        document.body.classList.add('noturno');
    } else {
        document.body.classList.remove('noturno');
    }
}

carregarConteudo(conteudoA);
