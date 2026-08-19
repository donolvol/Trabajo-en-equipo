// ---------- 3. TABS ----------
const tabButtons = document.querySelectorAll('.tabs-nav button');
const tabPanels = document.querySelectorAll('.tab-panel');

tabButtons.forEach((button) => {
  button.addEventListener('click', () => {
    tabButtons.forEach((b) => b.classList.remove('activo'));
    tabPanels.forEach((panel) => panel.classList.remove('activo'));

    button.classList.add('activo');

    const panel = document.getElementById(button.dataset.tab);

    if (panel) {
      panel.classList.add('activo');
    }
  });
});


// ---------- 4. TARJETAS INTERACTIVAS -----------
const consideraciones = [
  {
    frente: "🤝 Compromiso",
    dorso: "Si falta, algunas tareas pueden quedar sin hacer y los demás tendrán que ayudar a terminarlas."
  },
  {
    frente: "✅ Responsabilidad",
    dorso: "Si falta, pueden aparecer atrasos y el trabajo del grupo se puede complicar."
  },
  {
    frente: "🧠 Habilidades complementarias",
    dorso: "Si no están, puede ser más difícil hacer algunas tareas o se puede terminar haciendo lo mismo dos veces."
  },
  {
    frente: "😊 Actitud para colaborar",
    dorso: "Si no hay una buena actitud, pueden aparecer problemas y discusiones dentro del grupo."
  },
  {
    frente: "💬 Comunicación",
    dorso: "Si no hay buena comunicación, es más fácil que ocurran malentendidos o errores."
  },
  {
    frente: "⏰ Confiabilidad (cumple plazos)",
    dorso: "Si alguien no cumple con los plazos, puede terminar atrasando el trabajo de todos."
  }
];

const flipGrid = document.getElementById('flip-grid');

consideraciones.forEach((item) => {
  const card = document.createElement('button');

  card.type = 'button';
  card.className = 'flip-card';

  card.innerHTML = `
    <span class="flip-inner">
      <span class="flip-front">${item.frente}</span>
      <span class="flip-back">${item.dorso}</span>
    </span>
  `;

  card.addEventListener('click', () => {
    const isFlipped = card.classList.toggle('volteada');

    card.setAttribute(
      'aria-pressed',
      String(isFlipped)
    );
  });

  flipGrid.appendChild(card);
});
