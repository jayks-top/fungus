const QUESTIONS = [
  {
    tag: "Udesc 2018",
    text: "\u201cOs fungos \u2013 sejam eles cogumelos ou n\u00e3o \u2013 s\u00e3o formados de um emaranhado de pequenos filamentos conhecidos como mic\u00e9lio. O solo est\u00e1 cheio desta rede de mic\u00e9lios, que ajuda a \u2018conectar\u2019 diferentes plantas no mesmo solo. Muitos cientistas estudam a forma como as plantas usam essa rede de mic\u00e9lios para trocar nutrientes e at\u00e9 mesmo para \u2018se comunicar\u2019.\u201d <em>(Fonte: BBC Brasil, 2014)</em><br><br>Assinale a alternativa correta em rela\u00e7\u00e3o \u00e0 informa\u00e7\u00e3o acima.",
    options: [
      "A relação de simbiose está de acordo com a teoria de Charles Darwin, na qual prevalece a competição por recursos entre espécies.",
      "Esta pesquisa sobre a rede de micélio não é relevante, pois as plantas são organismos isolados e não podem estar conectadas entre si, necessitando apenas de sol para realizar a fotossíntese.",
      "Os fungos são seres eucariontes, pluricelulares e heterotróficos, não necessitam de associações com outras espécies para sobreviver, e, por isso, a comunicação entre as plantas por intermédio dos micélios dos fungos não é possível.",
      "A relação entre plantas e fungos é do tipo comensalismo, relação ecológica intraespecífica na qual duas espécies de animais se encontram associadas com benefício para uma delas, mas sem prejuízo para a outra.",
      "Na relação de simbiose entre as plantas e os fungos, conhecidos como micorrizas, as plantas recebem água e nutrientes essenciais desses fungos e, em troca, fornecem carboidratos para o desenvolvimento dos fungos."
    ],
    correct: 4,
    explanation: "As micorrizas são associações mutualísticas entre hifas fúngicas e raízes vegetais: o fungo amplia a absorção de água e minerais do solo para a planta, e recebe em troca carboidratos produzidos na fotossíntese."
  },
  {
    tag: "Uefs 2017",
    text: "Pesquisadores t\u00eam verificado que o fungo <em>Aspergillus fumigatus</em> pode proliferar nos pulm\u00f5es por meio de estrat\u00e9gias distintas, devido \u00e0 sua capacidade de escapar das defesas do organismo e da a\u00e7\u00e3o dos principais medicamentos antif\u00fangicos que apresentam compostos az\u00f3licos em sua composi\u00e7\u00e3o. Esses compostos s\u00e3o tamb\u00e9m empregados em fungicidas para eliminar esp\u00e9cies danosas \u00e0 agricultura em \u00e1reas pr\u00f3ximas \u00e0s cidades.<br><br>O fungo <em>Aspergillus fumigatus</em> adquiriu a capacidade de escapar dos antif\u00fangicos az\u00f3licos devido:",
    options: [
      "à capacidade de os fungos se adequarem aos efeitos dos compostos azólicos, o que possibilita a sobrevivência de um grande número de fungos.",
      "ao uso não controlado desses antifúngicos no tratamento de doenças e na agricultura, o que favoreceu a seleção de fungos resistentes a essa substância.",
      "a mutações genéticas provocadas pelos compostos azólicos presentes nos antifúngicos em alta dosagem, o que tornou os fungos resistentes a essa substância.",
      "ao consumo frequente de alimentos contaminados por fungicidas azólicos, o que enfraqueceu o sistema de defesa dos pacientes que consomem esses alimentos.",
      "à contaminação do ar por fungicidas com compostos azólicos em cidades próximas às lavouras, o que gerou nas pessoas resistência a essa substância."
    ],
    correct: 1,
    explanation: "É seleção natural, não adaptação individual: o uso descontrolado de antifúngicos azólicos (na medicina e na agricultura) eliminou os fungos sensíveis e favoreceu a sobrevivência e proliferação dos indivíduos já naturalmente resistentes."
  },
  {
    tag: "Unitins 2017",
    text: "Mofos, bolores e <em>champignons</em> fazem parte do reino Fungi. Sobre os fungos, é correto afirmar que:",
    options: [
      "Armazenam amido e lipídio como substância de reserva, assim como os animais.",
      "Os fungos, em sua maioria, são multicelulares e apresentam filamentos chamados de hifas.",
      "São organismos eucarióticos, exclusivamente multicelulares, autótrofos, com parede celular constituída de queratina.",
      "Reproduzem-se apenas assexuadamente por meio dos esporos.",
      "As micorrizas são fungos parasitas que crescem no interior das células das raízes de algumas plantas."
    ],
    correct: 1,
    explanation: "A maioria dos fungos é multicelular (pluricelular), formada por filamentos chamados hifas, cujo conjunto compõe o micélio. As demais alternativas trazem erros: reserva é glicogênio (não amido), parede é de quitina (não queratina), há reprodução sexuada e assexuada, e micorrizas são mutualismo, não parasitismo."
  },
  {
    tag: "Urca 2012",
    text: "Os fungos são classificados em um reino à parte (Reino Fungi) e, portanto, não podem ser considerados vegetais porque:",
    options: [
      "Possuem um tipo de pigmento fotossintetizante diferente dos vegetais verdadeiros;",
      "Os seus cloroplastos são muito diferentes dos plastos vegetais;",
      "Seus parênquimas e colênquimas são estriados e os dos vegetais são lisos;",
      "A sua substância de reserva é o glicogênio e a parede é de quitina, enquanto nos vegetais são amido e celulose;",
      "Suas raízes não possuem pêlos absorventes."
    ],
    correct: 3,
    explanation: "Fungos armazenam glicogênio e têm parede celular de quitina; plantas armazenam amido e têm parede de celulose, além de realizarem fotossíntese — diferenças bioquímicas que justificam reinos separados."
  },
  {
    tag: "PUC-RJ 2018",
    text: "Um organismo filamentoso e multicelular foi isolado da matéria orgânica em decomposição. Esse organismo apresenta parede celular formada por quitina, e não possui cloroplastos. Como você classificaria tal organismo?",
    options: [
      "domínio Archaea, reino Plantae",
      "domínio Archaea, reino Protista",
      "domínio Bacteria, reino Protista",
      "domínio Eukarya, reino Fungi",
      "domínio Eukarya, reino Animalia"
    ],
    correct: 3,
    explanation: "Um organismo eucarionte (domínio Eukarya), filamentoso, com parede de quitina e sem cloroplastos é característico do reino Fungi — hifas, decomposição e ausência de fotossíntese são a assinatura do grupo."
  },
  {
    tag: "Univesp 2021",
    text: "A figura ilustra a organiza\u00e7\u00e3o molecular de tr\u00eas polissacar\u00eddeos presentes nos seres vivos: <strong>celulose</strong> e <strong>amido/glicog\u00eanio</strong>.<br><br>Assinale a alternativa que apresenta o polissacar\u00eddeo associado aos grupos de seres vivos em que é encontrado.",
    options: [
      "Celulose nos reinos Monera e Plantae.",
      "Amido nos reinos Plantae e Protista.",
      "Celulose nos reinos Monera e Fungi.",
      "Glicogênio nos reinos Animalia e Fungi.",
      "Amido nos reinos Animalia e Plantae."
    ],
    correct: 3,
    explanation: "A celulose forma a parede celular vegetal, onde a reserva energética é o amido. Já o glicogênio é a substância de reserva típica de animais e também dos fungos — daí a alternativa D estar correta."
  },
  {
    tag: "Unicentro 2010",
    text: "Assinale a alternativa correta sobre o Reino Fungi.",
    options: [
      "O corpo dos fungos multicelulares é formado por filamentos delgados chamados micélio, cujo conjunto forma as hifas.",
      "São organismos autótrofos, com parede celular de quitina e têm o glicogênio como substância de reserva, e são todos multicelulares.",
      "Os esporos têm conteúdo genético n, e ao sofrerem meiose geram células com dois núcleos 2n.",
      "Não há registros científicos de fungos que produzam toxinas com potencial alucinógeno e farmacológico.",
      "Líquens são associações simbióticas entre fungos (micobiontes) e organismos fotossintetizantes (fotobiontes), sendo sua reprodução realizada através de propágulos denominados sorédios."
    ],
    correct: 4,
    explanation: "Líquens resultam da simbiose entre um fungo (micobionte) e um organismo fotossintetizante — alga ou cianobactéria (fotobiontes). Sua reprodução vegetativa ocorre por sorédios, pequenos propágulos que carregam ambos os parceiros simbióticos."
  },
  {
    tag: "PUC-RJ 2008",
    text: "Assinale a opção que <strong>NÃO</strong> apresenta uma característica dos seres pertencentes ao Reino Fungi.",
    options: [
      "São autotróficos e realizam fotossíntese.",
      "Produzem antibióticos.",
      "São capazes de realizar fermentação.",
      "Realizam decomposição de matéria orgânica.",
      "Suas células não possuem cloroplastos."
    ],
    correct: 0,
    explanation: "Fungos são heterotróficos por absorção, não autotróficos — não realizam fotossíntese nem possuem cloroplastos. As demais alternativas (antibióticos, fermentação, decomposição) descrevem corretamente atividades fúngicas."
  },
  {
    tag: "PUC-RS 1999",
    text: "Determinados tipos de sementes podem sofrer contaminação por substâncias tóxicas produzidas por seres vivos cuja estrutura corporal está representada por hifas. Esses indivíduos devem pertencer ao grupo:",
    options: ["das algas.", "dos protozoários.", "das bactérias.", "dos vírus.", "dos fungos."],
    correct: 4,
    explanation: "Hifas são filamentos exclusivos do corpo dos fungos (cujo conjunto forma o micélio). Muitos fungos, como os do gênero Aspergillus, produzem micotoxinas que contaminam grãos e sementes armazenadas."
  },
  {
    tag: "UECE 2002",
    text: "Em 1929 o pesquisador Alexander Flemming descobriu acidentalmente que fungos formadores de mofo verde encontrados em alimentos podres eram capazes de produzir uma substância que inibia o desenvolvimento de certas bactérias. Estes fungos, pertencentes ao gênero <em>Penicillium</em>, estão classificados atualmente dentro de um grupo denominado Ascomicetos.<br><br>Marque a alternativa que indica uma característica deste grupo:",
    options: [
      "São considerados os fungos mais primitivos.",
      "Suas hifas possuem forma arredondada.",
      "Possuem um corpo de frutificação em formato de guarda-chuva.",
      "Possuem hifas cenocíticas."
    ],
    correct: 1,
    explanation: "Por eliminação: fungos mais primitivos costuma se referir aos Quitrídios; corpo de frutificação em \u201cguarda-chuva\u201d é típico dos Basidiomicetos (cogumelos); hifas cenocíticas (sem septos) caracterizam os Zigomicetos. Restando, nesta questão, a alternativa sobre a forma das hifas como a indicada para os Ascomicetos."
  }
];

// Questão discursiva (não entra na pontuação) — UFSCar 2008
const DISCURSIVE = {
  tag: "UFSCar 2008 — Discursiva",
  text: "Daqui a dois meses, amostras de liquens viajarão ao espaço para participar de uma experiência com a qual a Agência Espacial Europeia pretende verificar se organismos vivos podem viajar de um planeta a outro \u201ca bordo\u201d de meteoritos. Os liquens, selecionados por terem grande resistência, ficarão dentro de um dispositivo que simulará as condições de um meteorito em movimento. <em>(O Estado de S. Paulo, julho 2007)</em>",
  questionA: "a) Quais os organismos envolvidos na formação dos liquens?",
  questionB: "b) Algumas experiências têm mostrado que, quando os organismos que compõem os liquens são separados, um tem melhor desempenho que o outro. Esses resultados têm levado ao questionamento da ideia de que os liquens são exemplos de mutualismo. Por quê?",
  answerA: "Os liquens resultam da associação entre um fungo (geralmente um Ascomiceto) e um organismo fotossintetizante — uma alga verde ou uma cianobactéria.",
  answerB: "Porque, se um dos organismos (em geral o fotobionte) apresenta melhor desempenho vivendo isoladamente do que em associação, isso sugere que a relação não beneficia igualmente as duas partes. Em vez de um mutualismo genuíno, a associação pode se aproximar de um controlo ou exploração do fotobionte pelo fungo, que se beneficia mais da relação — o que a aproximaria de um parasitismo controlado, e não de um mutualismo clássico."
};

const form = document.getElementById('quiz-form');
const answers = new Array(QUESTIONS.length).fill(null);
let corrected = false;

function render() {
  form.innerHTML = '';
  QUESTIONS.forEach((q, qi) => {
    const card = document.createElement('div');
    card.className = 'question-card';
    card.id = `q-card-${qi}`;

    const letters = ['A', 'B', 'C', 'D', 'E'];
    const optionsHtml = q.options.map((opt, oi) => `
      <label class="option" data-qi="${qi}" data-oi="${oi}" id="opt-${qi}-${oi}">
        <input type="radio" name="q${qi}" value="${oi}" style="display:none;">
        <span class="option-letter">${letters[oi]}</span>
        <span class="option-text">${opt}</span>
      </label>
    `).join('');

    card.innerHTML = `
      <div class="question-meta">
        <span class="q-index">${qi + 1}</span>
        <span class="q-tag">${q.tag}</span>
      </div>
      <p class="question-text">${q.text}</p>
      <div class="option-list">${optionsHtml}</div>
      <div class="explanation" id="expl-${qi}">
        <strong>Comentário</strong>
        ${q.explanation}
      </div>
    `;
    form.appendChild(card);
  });

  document.querySelectorAll('.option').forEach(opt => {
    opt.addEventListener('click', () => {
      if (corrected) return;
      const qi = parseInt(opt.dataset.qi);
      const oi = parseInt(opt.dataset.oi);
      answers[qi] = oi;
      document.querySelectorAll(`.option[data-qi="${qi}"]`).forEach(o => o.classList.remove('selected'));
      opt.classList.add('selected');
      document.getElementById(`q-card-${qi}`).classList.add('answered');
      updateProgress();
    });
  });
}

function updateProgress() {
  const answeredCount = answers.filter(a => a !== null).length;
  const pct = Math.round((answeredCount / QUESTIONS.length) * 100);
  document.getElementById('progress-text').textContent = `${answeredCount} de ${QUESTIONS.length} respondidas`;
  document.getElementById('progress-pct').textContent = `${pct}%`;
  document.getElementById('progress-fill').style.width = `${pct}%`;
  document.getElementById('btn-submit').disabled = answeredCount !== QUESTIONS.length;
}

function correctQuiz() {
  corrected = true;
  let score = 0;

  QUESTIONS.forEach((q, qi) => {
    const userAnswer = answers[qi];
    if (userAnswer === q.correct) score++;

    document.querySelectorAll(`.option[data-qi="${qi}"]`).forEach(opt => {
      opt.classList.add('locked');
      const oi = parseInt(opt.dataset.oi);
      if (oi === q.correct) opt.classList.add('correct');
      else if (oi === userAnswer) opt.classList.add('incorrect');
    });

    document.getElementById(`expl-${qi}`).classList.add('visible');
  });

  document.getElementById('result-num').textContent = score;
  const panel = document.getElementById('result-panel');
  panel.classList.add('visible');

  const badge = document.getElementById('result-badge');
  const msg = document.getElementById('result-msg');
  if (score >= 9) {
    msg.textContent = 'Excelente! Domínio sólido sobre o Reino Fungi.';
    badge.textContent = 'Nível: Micologista';
    badge.style.background = 'var(--success-soft)';
    badge.style.color = 'var(--success)';
  } else if (score >= 6) {
    msg.textContent = 'Bom resultado! Revise os comentários das questões erradas.';
    badge.textContent = 'Nível: Intermediário';
    badge.style.background = 'var(--amber-soft)';
    badge.style.color = 'var(--amber)';
  } else {
    msg.textContent = 'Vale a pena revisar o conteúdo sobre fungos com calma.';
    badge.textContent = 'Nível: Iniciante';
    badge.style.background = 'var(--danger-soft)';
    badge.style.color = 'var(--danger)';
  }

  panel.scrollIntoView({ behavior: 'smooth', block: 'start' });
  document.getElementById('btn-submit').style.display = 'none';
  document.getElementById('btn-reset').style.display = 'inline-block';
}

function resetQuiz() {
  corrected = false;
  answers.fill(null);
  document.getElementById('result-panel').classList.remove('visible');
  document.getElementById('btn-submit').style.display = 'inline-block';
  document.getElementById('btn-reset').style.display = 'none';
  render();
  updateProgress();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

document.getElementById('btn-submit').addEventListener('click', correctQuiz);
document.getElementById('btn-reset').addEventListener('click', resetQuiz);

render();
updateProgress();

/* Questão discursiva bônus */
document.getElementById('discursive-tag').textContent = DISCURSIVE.tag;
document.getElementById('discursive-text').innerHTML = DISCURSIVE.text;
document.getElementById('discursive-a').textContent = DISCURSIVE.questionA;
document.getElementById('discursive-b').textContent = DISCURSIVE.questionB;
document.getElementById('discursive-answer-a').innerHTML = `<strong style="font-family: var(--font-mono); font-size:0.72rem; text-transform:uppercase; letter-spacing:0.05em; color:var(--amber); display:block; margin-bottom:0.3rem;">a)</strong>${DISCURSIVE.answerA}`;
document.getElementById('discursive-answer-b').innerHTML = `<strong style="font-family: var(--font-mono); font-size:0.72rem; text-transform:uppercase; letter-spacing:0.05em; color:var(--amber); display:block; margin-bottom:0.3rem;">b)</strong>${DISCURSIVE.answerB}`;

document.getElementById('btn-reveal').addEventListener('click', function() {
  const ans = document.getElementById('discursive-answer');
  const revealed = ans.classList.toggle('visible');
  this.textContent = revealed ? 'Ocultar resposta comentada' : 'Mostrar resposta comentada';
});