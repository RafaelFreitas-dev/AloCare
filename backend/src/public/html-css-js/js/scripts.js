  // ─── DATA ────────────────────────────────────────
  const services = {
    manutencao: [
      {icon:'🔧', name:'Encanador'}, {icon:'⚡', name:'Eletricista'}, {icon:'🎨', name:'Pintor'},
      {icon:'❄️', name:'Instalação de Ar-Condicionado'}, {icon:'🪟', name:'Vidraceiro'}, {icon:'🚪', name:'Marceneiro'},
      {icon:'🔩', name:'Serralheiro'}, {icon:'🛠️', name:'Pedreiro'}
    ],
    limpeza: [
      {icon:'🧹', name:'Faxineira'}, {icon:'🪣', name:'Limpeza Pós-Obra'}, {icon:'🪟', name:'Lavagem de Vidros'},
      {icon:'🛋️', name:'Limpeza de Sofá'}, {icon:'🧺', name:'Lavanderia'}, {icon:'🏢', name:'Limpeza Comercial'}
    ],
    cuidados: [
      {icon:'👶', name:'Babá'}, {icon:'👴', name:'Cuidador de Idosos'}, {icon:'🐶', name:'Pet Sitter'},
      {icon:'🐾', name:'Dog Walker'}, {icon:'👩‍🍳', name:'Cozinheira'}, {icon:'🧑‍🦽', name:'Acompanhante'}
    ],
    reformas: [
      {icon:'🏗️', name:'Reforma Geral'}, {icon:'🚿', name:'Reforma Banheiro'}, {icon:'🍽️', name:'Reforma Cozinha'},
      {icon:'🪵', name:'Deck e Terraço'}, {icon:'🏊', name:'Construção de Piscina'}, {icon:'🧱', name:'Alvenaria'}
    ],
    jardim: [
      {icon:'🌿', name:'Jardineiro'}, {icon:'🌳', name:'Poda de Árvores'}, {icon:'🏊', name:'Limpeza de Piscina'},
      {icon:'💧', name:'Irrigação'}, {icon:'🌺', name:'Paisagismo'}, {icon:'🍂', name:'Manutenção de Gramado'}
    ]
  };

  const professionals = [
    {name:'Carlos Silva', role:'Eletricista', rating:4.9, reviews:127, color:'#1B5EF7', initials:'CS'},
    {name:'Ana Rodrigues', role:'Faxineira', rating:5.0, reviews:203, color:'#8B5CF6', initials:'AR'},
    {name:'Pedro Santos', role:'Encanador', rating:4.8, reviews:94, color:'#059669', initials:'PS'},
    {name:'Maria Costa', role:'Babá', rating:4.9, reviews:156, color:'#EC4899', initials:'MC'},
    {name:'João Oliveira', role:'Pintor', rating:4.7, reviews:82, color:'#F59E0B', initials:'JO'},
    {name:'Fernanda Lima', role:'Jardineira', rating:5.0, reviews:145, color:'#10B981', initials:'FL'},
  ];

  // ─── RENDER SERVICES ────────────────────────────
  function renderServices(category) {
    const grid = document.getElementById('servicesGrid');
    const list = services[category] || services.manutencao;
    grid.innerHTML = list.map(s => `
      <div class="col-6 col-sm-4 col-md-3">
        <div class="service-card">
          <div class="icon">${s.icon}</div>
          <h6>${s.name}</h6>
        </div>
      </div>
    `).join('');
  }

  function filterCategory(btn, cat) {
    document.querySelectorAll('.tab-pill').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderServices(cat);
  }

  // ─── RENDER PROFESSIONALS ────────────────────────
  function renderProfessionals() {
    const grid = document.getElementById('prosGrid');
    grid.innerHTML = professionals.map(p => `
      <div class="col-md-4 col-sm-6 fade-up">
        <div class="pro-card">
          <div class="d-flex align-items-center gap-3 mb-12">
            <div class="avatar-placeholder" style="background:${p.color}">${p.initials}</div>
            <div class="flex-grow-1">
              <div class="d-flex align-items-center gap-2">
                <h6>${p.name}</h6>
                <span class="verified-badge">✔</span>
              </div>
              <div class="role">${p.role}</div>
            </div>
          </div>
          <div class="d-flex align-items-center gap-2 my-3">
            <span class="stars">⭐ ${p.rating}</span>
            <span style="color:var(--gray);font-size:.83rem">(${p.reviews} avaliações)</span>
          </div>
          <div class="mb-3">
            <span class="badge-verified">✓ Antecedentes Verificados</span>
          </div>
          <button class="btn-ver">Ver Perfil</button>
        </div>
      </div>
    `).join('');
    observeFadeUps();
  }

  // ─── SCROLL ANIMATIONS ───────────────────────────
  function observeFadeUps() {
    const els = document.querySelectorAll('.fade-up:not(.observed)');
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); } });
    }, {threshold: 0.12});
    els.forEach(el => { io.observe(el); el.classList.add('observed'); });
  }

  // ─── NAVBAR SCROLL ───────────────────────────────
  window.addEventListener('scroll', () => {
    document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 20);
  });

  // ─── INIT ────────────────────────────────────────
  renderServices('manutencao');
  renderProfessionals();
  observeFadeUps();