/* =========================================================
   Anderson Monteiro 43147 — comportamentos da página
   ========================================================= */
(function () {
  "use strict";

  /* ---------------------------------------------------------
     1. Produção legislativa
     Para incluir ou editar uma lei, basta mexer nesta lista.
     --------------------------------------------------------- */
  var LEIS = [
    ["Lei 11.529", "Criação da Política Estadual de Apoio às Vítimas de Acidente Vascular Cerebral (AVC)."],
    ["Lei 12.248", "Institui a Política Estadual de Proteção dos Direitos da Pessoa com Transtorno do Espectro Autista."],
    ["Lei 12.893", "Dispõe sobre o direito da pessoa com Deficiência Intelectual, Transtorno do Espectro Autista — TEA, Transtornos Psicológicos ou Sensoriais de ingressar e permanecer em ambientes públicos e privados acompanhado pelo seu animal de suporte emocional em todo estado da Paraíba."],
    ["Lei 13.898", "Dispõe sobre a obrigatoriedade de bares, hotéis, restaurantes, fast-foods, food-trucks, sorveterias, docerias, delicatesses, padarias e outros estabelecimentos congêneres, que comercializem produtos prontos para consumo imediato, informarem em seus cardápios a presença de glúten, lactose, leite, peixe, amêndoas, corantes, castanhas, soja, ovo e crustáceos."],
    ["Lei 13.669", "Institui a Política Estadual de Detecção de Talentos Paralímpicos no Estado da Paraíba."],
    ["Lei 13.970", "Institui a Política Estadual de Prevenção à Prematuridade Neonatal."],
    ["Lei 13.512", "Dispõe sobre programa estadual de reinserção social para dependentes químicos recuperados."],
    ["Lei 13.591", "Torna obrigatória a apresentação de certidão negativa de antecedentes criminais para profissionais que atuem em espaços clínicos que atendam crianças e adolescentes."]
  ];

  var TICK =
    '<svg class="tick" viewBox="0 0 24 24" fill="none" aria-hidden="true">' +
    '<circle cx="12" cy="12" r="10" fill="#BFFE1B"/>' +
    '<path d="M7.5 12.4l3 3 6-6.6" stroke="#00604F" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>' +
    "</svg>";

  var lista = document.getElementById("lista-leis");
  if (lista) {
    lista.innerHTML = LEIS.map(function (lei) {
      return "<li>" + TICK + "<div><b>" + lei[0] + "</b><span>" + lei[1] + "</span></div></li>";
    }).join("");
  }

  /* ---------------------------------------------------------
     2. Ano corrente no rodapé
     --------------------------------------------------------- */
  var ano = document.getElementById("ano");
  if (ano) ano.textContent = new Date().getFullYear();

  /* ---------------------------------------------------------
     3. Cabeçalho ganha fundo sólido ao rolar
     --------------------------------------------------------- */
  var hdr = document.getElementById("hdr");

  function aoRolar() {
    hdr.classList.toggle("fixo", window.scrollY > 24);
  }
  aoRolar();
  window.addEventListener("scroll", aoRolar, { passive: true });

  /* ---------------------------------------------------------
     4. Menu mobile
     --------------------------------------------------------- */
  var burger = document.getElementById("burger");
  var drawer = document.getElementById("drawer");
  drawer.hidden = false;

  function menu(abrir) {
    burger.setAttribute("aria-expanded", abrir ? "true" : "false");
    burger.setAttribute("aria-label", abrir ? "Fechar menu" : "Abrir menu");
    drawer.classList.toggle("aberto", abrir);
    document.body.style.overflow = abrir ? "hidden" : "";
    if (abrir) hdr.classList.add("fixo");
    else aoRolar();
  }

  burger.addEventListener("click", function () {
    menu(burger.getAttribute("aria-expanded") !== "true");
  });

  drawer.addEventListener("click", function (e) {
    if (e.target.closest("a")) menu(false);
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && drawer.classList.contains("aberto")) menu(false);
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth >= 860 && drawer.classList.contains("aberto")) menu(false);
  });

  /* ---------------------------------------------------------
     5. Rolagem suave (com alternativa p/ navegadores antigos)
     --------------------------------------------------------- */
  var suave = "scrollBehavior" in document.documentElement.style;
  var reduzido = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  document.addEventListener("click", function (e) {
    var link = e.target.closest('a[href^="#"]');
    if (!link) return;

    var id = link.getAttribute("href");
    if (id === "#") return;

    var alvo = document.querySelector(id);
    if (!alvo) return;

    e.preventDefault();

    if (!suave || reduzido) {
      window.scrollTo(0, alvo.getBoundingClientRect().top + window.scrollY - (hdr.offsetHeight + 8));
    } else {
      alvo.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    history.replaceState(null, "", id);
  });

  /* ---------------------------------------------------------
     6. Link do menu acompanha a seção visível
     --------------------------------------------------------- */
  var secoes = ["inicio", "sobre", "recursos", "leis", "contato"]
    .map(function (id) { return document.getElementById(id); })
    .filter(Boolean);

  var links = Array.prototype.slice.call(document.querySelectorAll(".nav a[data-link]"));

  if ("IntersectionObserver" in window) {
    var visiveis = {};

    var observador = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (en) {
        visiveis[en.target.id] = en.intersectionRatio;
      });

      var melhor = null, maior = 0;
      Object.keys(visiveis).forEach(function (id) {
        if (visiveis[id] > maior) { maior = visiveis[id]; melhor = id; }
      });

      if (!melhor) return;

      links.forEach(function (l) {
        l.classList.toggle("ativo", l.getAttribute("href") === "#" + melhor);
      });
    }, { threshold: [0, .15, .35, .55, .75, 1], rootMargin: "-20% 0px -45% 0px" });

    secoes.forEach(function (s) { observador.observe(s); });
  }

  /* ---------------------------------------------------------
     7. Animação de entrada do hero
     --------------------------------------------------------- */

  
  /* ---------------------------------------------------------
     8. Contador para o dia da eleição (04/10)
     --------------------------------------------------------- */
  (function contadorEleicao() {
    var numEl = document.getElementById("contador-dias");
    var labelEl = document.getElementById("contador-label");
    if (!numEl || !labelEl) return;

    function meiaNoite(d) {
      return new Date(d.getFullYear(), d.getMonth(), d.getDate());
    }

    function proximaEleicao(hoje) {
      var ano = hoje.getFullYear();
      var alvo = new Date(ano, 9, 4); // mês 9 = outubro (0-indexado)
      if (meiaNoite(hoje) > alvo) alvo = new Date(ano + 1, 9, 4);
      return alvo;
    }

    function atualizar() {
      var hoje = meiaNoite(new Date());
      var alvo = proximaEleicao(hoje);
      var msPorDia = 24 * 60 * 60 * 1000;
      var dias = Math.round((alvo - hoje) / msPorDia);

      if (dias > 0) {
        numEl.textContent = dias;
        labelEl.textContent = dias === 1
          ? "dia para você votar"
          : "dias para você votar";
      } else if (dias === 0) {
        numEl.textContent = "0";
        labelEl.textContent = "É hoje! Vá votar";
      } else {
        numEl.textContent = "🙏";
        labelEl.textContent = "Obrigado pelo seu voto";
      }
    }

    atualizar();
    // recalcula à meia-noite, caso a pessoa deixe a aba aberta virando o dia
    setInterval(atualizar, 60 * 60 * 1000);
  })();

  document.body.classList.add("anim");
})();
