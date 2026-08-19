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


// ---------- 4. TARJETAS INTERACTIVAS ----------
const consideraciones = [
  {
    frente: "🤝 Compromiso",
    dorso: "Si falta: las tareas quedan sin hacer y el resto debe cubrirlas."
  },
  {
    frente: "✅ Responsabilidad",
    dorso: "Si falta: se generan atrasos para todo el equipo."
  },
  {
    frente: "🧠 Habilidades complementarias",
    dorso: "Si no existen: se duplican esfuerzos o faltan capacidades clave."
  },
  {
    frente: "😊 Actitud para colaborar",
    dorso: "Si es mala: genera conflictos y mal ambiente."
  },
  {
    frente: "💬 Comunicación",
    dorso: "Si es pobre: aparecen malentendidos y errores evitables."
  },
  {
    frente: "⏰ Confiabilidad (cumple plazos)",
    dorso: "Si falla: se atrasa la entrega de todo el equipo."
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