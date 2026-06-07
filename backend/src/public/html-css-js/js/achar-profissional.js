

const allPros = [
    { id: 1, name: 'Carlos Silva', role: 'Eletricista', cat: 'eletrica', rating: 4.9, reviews: 127, price: 180, available: true, emergency: true, verified: true, color: '#1B5EF7', initials: 'CS', dist: '2.3 km', jobs: 340, bio: 'Eletricista com 12 anos de experiência em instalações residenciais e comerciais. Especializado em quadros de distribuição e automação residencial.', skills: ['Elétrica geral', 'Quadro de luz', 'Tomadas', 'Iluminação', 'CFTV'] },
    { id: 2, name: 'Ana Rodrigues', role: 'Faxineira', cat: 'limpeza', rating: 5.0, reviews: 203, price: 120, available: true, emergency: false, verified: true, color: '#8B5CF6', initials: 'AR', dist: '1.1 km', jobs: 520, bio: 'Profissional de limpeza com foco em organização e produtos ecológicos. Atendo residências e pequenos escritórios com pontualidade e qualidade.', skills: ['Limpeza residencial', 'Organização', 'Limpeza pós-reforma', 'Faxina pesada'] },
    { id: 3, name: 'Pedro Santos', role: 'Encanador', cat: 'hidraulica', rating: 4.8, reviews: 94, price: 150, available: false, emergency: true, verified: true, color: '#059669', initials: 'PS', dist: '3.7 km', jobs: 210, bio: 'Encanador certificado com especialização em reformas de banheiro e cozinha. Atendo emergências 24h.', skills: ['Encanamento', 'Desentupimento', 'Instalação de chuveiro', 'Conserto de vazamentos'] },
    { id: 4, name: 'Maria Costa', role: 'Babá', cat: 'cuidados', rating: 4.9, reviews: 156, price: 90, available: true, emergency: false, verified: true, color: '#EC4899', initials: 'MC', dist: '0.8 km', jobs: 180, bio: 'Babá formada em pedagogia, com 8 anos de experiência. Cuido com carinho e responsabilidade de bebês e crianças até 12 anos.', skills: ['Bebês', 'Crianças', 'Atividades pedagógicas', 'Primeiros socorros'] },
    { id: 5, name: 'João Oliveira', role: 'Pintor', cat: 'pintura', rating: 4.7, reviews: 82, price: 130, available: true, emergency: false, verified: true, color: '#F59E0B', initials: 'JO', dist: '4.2 km', jobs: 195, bio: 'Pintor residencial com mais de 15 anos de experiência. Trabalho com texturas, grafiato, pintura interna e externa com acabamento impecável.', skills: ['Pintura interna', 'Pintura externa', 'Textura', 'Grafiato', 'Massa corrida'] },
    { id: 6, name: 'Fernanda Lima', role: 'Jardineira', cat: 'jardim', rating: 5.0, reviews: 145, price: 100, available: true, emergency: false, verified: true, color: '#10B981', initials: 'FL', dist: '1.9 km', jobs: 290, bio: 'Paisagista e jardineira com formação técnica. Criação e manutenção de jardins, hortas e áreas verdes. Atendo residências e condomínios.', skills: ['Jardinagem', 'Paisagismo', 'Poda', 'Irrigação', 'Horta'] },
    { id: 7, name: 'Roberto Alves', role: 'Chaveiro', cat: 'chaveiro', rating: 4.8, reviews: 67, price: 110, available: true, emergency: true, verified: true, color: '#6366F1', initials: 'RA', dist: '2.8 km', jobs: 445, bio: 'Chaveiro com 20 anos de experiência. Abertura de portas, cópias de chaves, instalação de fechaduras e cofres. Plantão 24h para emergências.', skills: ['Abertura de portas', 'Cópia de chaves', 'Fechaduras', 'Cofres', 'Portas automáticas'] },
    { id: 8, name: 'Luciana Ferreira', role: 'Cuidadora de Idosos', cat: 'cuidados', rating: 4.9, reviews: 88, price: 140, available: false, emergency: false, verified: true, color: '#F97316', initials: 'LF', dist: '3.1 km', jobs: 120, bio: 'Técnica em enfermagem com especialização em geriatria. Cuidado dedicado e humanizado para idosos, com experiência em casos de Alzheimer.', skills: ['Cuidado de idosos', 'Alzheimer', 'Fisioterapia', 'Medicação', 'Companhia'] },
    { id: 9, name: 'Marcos Souza', role: 'Técnico de AC', cat: 'ar-condicionado', rating: 4.6, reviews: 113, price: 200, available: true, emergency: false, verified: true, color: '#0EA5E9', initials: 'MS', dist: '5.0 km', jobs: 380, bio: 'Técnico certificado em ar-condicionado split, multi-split e janela. Instalação, manutenção preventiva e corretiva com garantia de serviço.', skills: ['Instalação split', 'Manutenção', 'Higienização', 'Multi-split', 'Ar-condicionado de janela'] },
    { id: 10, name: 'Camila Nunes', role: 'Faxineira', cat: 'limpeza', rating: 4.8, reviews: 74, price: 100, available: true, emergency: false, verified: true, color: '#A855F7', initials: 'CN', dist: '2.0 km', jobs: 160, bio: 'Especialista em limpeza de apartamentos e casas. Uso produtos de qualidade e sigo roteiro personalizado de acordo com as necessidades do cliente.', skills: ['Limpeza residencial', 'Limpeza de janelas', 'Limpeza de sofá', 'Organização'] },
    { id: 11, name: 'Diego Martins', role: 'Pedreiro', cat: 'reformas', rating: 4.7, reviews: 55, price: 160, available: false, emergency: false, verified: true, color: '#78716C', initials: 'DM', dist: '6.3 km', jobs: 90, bio: 'Pedreiro com experiência em reformas completas de banheiro, cozinha e áreas externas. Trabalho com azulejo, piso, reboco e alvenaria.', skills: ['Assentamento de azulejo', 'Piso', 'Reboco', 'Alvenaria', 'Reforma geral'] },
    { id: 12, name: 'Beatriz Rocha', role: 'Pet Sitter', cat: 'cuidados', rating: 5.0, reviews: 192, price: 80, available: true, emergency: false, verified: true, color: '#EC4899', initials: 'BR', dist: '1.4 km', jobs: 430, bio: 'Amante de animais! Cuido de cães e gatos na sua casa ou na minha. Passeios diários, alimentação e muito carinho. Envio fotos e atualizações.', skills: ['Dog walking', 'Pet sitting', 'Banho e tosa', 'Adestramento básico'] },
];

const categories = [
    { id: 'all', label: '🏠 Todos' },
    { id: 'eletrica', label: '⚡ Eletricista' },
    { id: 'hidraulica', label: '🔧 Encanador' },
    { id: 'limpeza', label: '🧹 Limpeza' },
    { id: 'cuidados', label: '❤️ Cuidados' },
    { id: 'pintura', label: '🎨 Pintura' },
    { id: 'jardim', label: '🌿 Jardim' },
    { id: 'reformas', label: '🏗️ Reformas' },
    { id: 'chaveiro', label: '🔑 Chaveiro' },
    { id: 'ar-condicionado', label: '❄️ Ar-Condicionado' },
];

let currentCat = 'all';
let viewMode = 'grid';
let currentPage = 1;
const perPage = 6;

// Render category pills
document.getElementById('catPills').innerHTML = categories.map(c => `
<button class="cat-pill ${c.id === 'all' ? 'active' : ''}" onclick="setCat('${c.id}',this)">${c.label}</button>
`).join('');

function setCat(cat, btn) {
    currentCat = cat; currentPage = 1;
    document.querySelectorAll('.cat-pill').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    filterPros();
}

function filterPros() {
    const txt = (document.getElementById('searchText').value || '').toLowerCase();
    const priceMax = parseFloat(document.getElementById('priceMax').value) || Infinity;
    const chkAvail = document.getElementById('chkAvail').checked;
    const chkEmerg = document.getElementById('chkEmerg').checked;
    const chkVerif = document.getElementById('chkVerif').checked;
    let filtered = allPros.filter(p => {
        if (currentCat !== 'all' && p.cat !== currentCat) return false;
        if (txt && !p.name.toLowerCase().includes(txt) && !p.role.toLowerCase().includes(txt) && !p.skills.some(s => s.toLowerCase().includes(txt))) return false;
        if (p.price > priceMax) return false;
        if (chkAvail && !p.available) return false;
        if (chkEmerg && !p.emergency) return false;
        if (chkVerif && !p.verified) return false;
        return true;
    });
    renderPros(filtered);
}

function renderPros(list) {
    const total = list.length;
    document.getElementById('countDisplay').textContent = total;
    const start = (currentPage - 1) * perPage;
    const page = list.slice(start, start + perPage);

    const grid = document.getElementById('prosGrid');
    if (!page.length) {
        grid.innerHTML = `<div class="col-12 text-center py-5"><div style="font-size:3rem;margin-bottom:12px">🔍</div><h5 style="color:var(--gray)">Nenhum profissional encontrado</h5><p style="color:var(--gray);font-size:.9rem">Tente ajustar os filtros ou buscar por outro serviço.</p></div>`;
        document.getElementById('pagination').innerHTML = '';
        return;
    }

    const colClass = viewMode === 'grid' ? 'col-md-6' : 'col-12';
    grid.innerHTML = page.map(p => `
<div class="${colClass} fade-up">
<div class="pro-card" onclick="openModal(${p.id})">
    ${p.emergency ? '<span class="top-badge">24h</span>' : p.rating >= 4.9 ? '<span class="top-badge verified">Top</span>' : ''}
    <div class="d-flex align-items-start gap-3 mb-2">
    <div class="pro-avatar" style="background:${p.color}">${p.initials}</div>
    <div class="flex-grow-1">
        <div class="d-flex align-items-center gap-2">
        <h5>${p.name}</h5>
        ${p.verified ? '<span style="color:#2563EB;font-size:.95rem">✔</span>' : ''}
        </div>
        <div class="pro-role">${p.role}</div>
        <div class="d-flex align-items-center gap-2 mt-1">
        <span class="stars">⭐ ${p.rating}</span>
        <span style="color:var(--gray);font-size:.78rem">(${p.reviews})</span>
        <span style="color:var(--gray);font-size:.78rem">• ${p.dist}</span>
        </div>
    </div>
    </div>
    <div class="pro-skills">
    ${p.skills.slice(0, 3).map(s => `<span class="skill-tag">${s}</span>`).join('')}
    ${p.skills.length > 3 ? `<span class="skill-tag">+${p.skills.length - 3}</span>` : ''}
    </div>
    <div class="pro-stats">
    <div class="pro-stat"><div class="sv">${p.jobs}</div><div class="sk">Serviços</div></div>
    <div class="pro-stat"><div class="sv">${p.reviews}</div><div class="sk">Avaliações</div></div>
    <div class="pro-stat"><div class="sv" style="color:var(--green)">${p.available ? 'Livre' : 'Ocupado'}</div><div class="sk">Status</div></div>
    </div>
    <div class="d-flex align-items-center justify-content-between">
    <div>
        <div class="pro-price">R$ ${p.price}<small>/serviço</small></div>
        ${p.available ? '<div class="pro-avail mt-1"><span class="dot"></span>Disponível agora</div>' : '<div style="color:var(--gray);font-size:.78rem;margin-top:4px">📅 Consultar agenda</div>'}
    </div>
    <div class="d-flex gap-2 align-items-center">
        <button class="btn-save" onclick="event.stopPropagation();this.textContent=this.textContent==='🤍'?'🧡':'🤍'">🤍</button>
        <button class="btn-contact" style="width:auto;padding:10px 16px" onclick="event.stopPropagation();openModal(${p.id},2)">Solicitar</button>
    </div>
    </div>
</div>
</div>
`).join('');

    // Pagination
    const pages = Math.ceil(total / perPage);
    let pag = '';
    if (pages > 1) {
        pag += `<div class="page-btn" onclick="goPage(${Math.max(1, currentPage - 1)})">‹</div>`;
        for (let i = 1; i <= pages; i++) pag += `<div class="page-btn ${i === currentPage ? 'active' : ''}" onclick="goPage(${i})">${i}</div>`;
        pag += `<div class="page-btn" onclick="goPage(${Math.min(pages, currentPage + 1)})">›</div>`;
    }
    document.getElementById('pagination').innerHTML = pag;

    observeFadeUps();
}

function goPage(p) { currentPage = p; filterPros(); window.scrollTo({ top: 300, behavior: 'smooth' }); }

function setView(v, btn) {
    viewMode = v;
    document.querySelectorAll('.view-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    filterPros();
}

function toggleRating(btn, val) {
    document.querySelectorAll('.rating-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    filterPros();
}

function clearFilters() {
    document.getElementById('priceMax').value = '';
    document.getElementById('chkAvail').checked = false;
    document.getElementById('chkEmerg').checked = false;
    document.getElementById('chkVerif').checked = true;
    document.querySelectorAll('.rating-btn').forEach((b, i) => b.classList[i === 1 ? 'add' : 'remove']('active'));
    filterPros();
}

// Modal
const reviews = [
    { author: 'Mariana T.', date: 'Mar 2026', stars: 5, text: 'Excelente profissional! Resolveu o problema rapidamente e ainda deu dicas para evitar que aconteça de novo. Super recomendo!' },
    { author: 'Ricardo L.', date: 'Fev 2026', stars: 5, text: 'Muito pontual e educado. Trabalho bem feito e preço justo. Com certeza vou chamar novamente.' },
    { author: 'Patrícia M.', date: 'Jan 2026', stars: 4, text: 'Bom serviço, ficou um pequeno detalhe mas resolveu quando avisei. Boa comunicação e prontidão.' },
];

function openModal(id, tabIdx = 0) {
    const p = allPros.find(x => x.id === id);
    document.getElementById('modalHead').innerHTML = `
<div class="pro-avatar" style="background:${p.color};width:64px;height:64px;font-size:1.2rem">${p.initials}</div>
<div class="flex-grow-1">
<div class="d-flex align-items-center gap-2 flex-wrap">
    <h4 style="margin:0">${p.name}</h4>
    ${p.verified ? '<span style="color:#2563EB">✔</span>' : ''}
    ${p.emergency ? '<span class="badge-emergency">24h</span>' : ''}
</div>
<div style="color:var(--gray);font-size:.88rem">${p.role} • ${p.dist}</div>
<div class="d-flex gap-2 align-items-center mt-2 flex-wrap">
    <span class="stars">⭐ ${p.rating}</span>
    <span style="color:var(--gray);font-size:.8rem">(${p.reviews} avaliações)</span>
    ${p.verified ? '<span class="badge-verified">✓ Verificado</span>' : ''}
</div>
</div>
`;
    document.getElementById('tab-overview').innerHTML = `
<p style="color:#374151;font-size:.92rem;line-height:1.65;margin-bottom:20px">${p.bio}</p>
<div class="row g-3 mb-4">
<div class="col-4" style="text-align:center;background:var(--gray-light);border-radius:12px;padding:16px">
    <div style="font-family:'Sora',sans-serif;font-size:1.4rem;font-weight:800">${p.jobs}</div>
    <div style="color:var(--gray);font-size:.75rem">Serviços</div>
</div>
<div class="col-4" style="text-align:center;background:var(--gray-light);border-radius:12px;padding:16px">
    <div style="font-family:'Sora',sans-serif;font-size:1.4rem;font-weight:800;color:#F59E0B">⭐ ${p.rating}</div>
    <div style="color:var(--gray);font-size:.75rem">Avaliação</div>
</div>
<div class="col-4" style="text-align:center;background:var(--gray-light);border-radius:12px;padding:16px">
    <div style="font-family:'Sora',sans-serif;font-size:1.4rem;font-weight:800;color:${p.available ? 'var(--green)' : 'var(--gray)'}">${p.available ? 'Livre' : 'Ocupado'}</div>
    <div style="color:var(--gray);font-size:.75rem">Status</div>
</div>
</div>
<h6 style="margin-bottom:10px">Especialidades</h6>
<div class="pro-skills mb-4">${p.skills.map(s => `<span class="skill-tag">${s}</span>`).join('')}</div>
<div style="background:var(--blue-light);border-radius:12px;padding:16px;display:flex;justify-content:space-between;align-items:center">
<div><div style="font-family:'Sora',sans-serif;font-weight:700">R$ ${p.price}<span style="font-size:.8rem;font-weight:400;color:var(--gray)">/serviço</span></div><div style="color:var(--gray);font-size:.78rem">Orçamento gratuito</div></div>
<button class="btn-contact" style="width:auto;padding:10px 20px" onclick="switchTab(document.querySelector('.tab-btn:nth-child(3)'),'request')">Solicitar agora →</button>
</div>
`;
    document.getElementById('tab-reviews').innerHTML = reviews.map(r => `
<div class="review-item">
<div><span class="rev-author">${r.author}</span><span class="rev-date">${r.date}</span></div>
<div style="color:#F59E0B;font-size:.8rem">${'⭐'.repeat(r.stars)}</div>
<p class="rev-text">${r.text}</p>
</div>
`).join('');
    // activate tab
    document.querySelectorAll('.tab-btn').forEach((b, i) => b.classList[i === tabIdx ? 'add' : 'remove']('active'));
    document.querySelectorAll('.tab-content').forEach((c, i) => c.classList[i === tabIdx ? 'add' : 'remove']('active'));
    document.getElementById('modal').classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('modal').classList.remove('open');
    document.body.style.overflow = '';
}

function switchTab(btn, id) {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
    if (btn) btn.classList.add('active');
    document.getElementById('tab-' + id)?.classList.add('active');
}

// Scroll animations
function observeFadeUps() {
    const io = new IntersectionObserver(e => e.forEach(x => { if (x.isIntersecting) x.target.classList.add('visible') }), { threshold: .08 });
    document.querySelectorAll('.fade-up:not(.observed)').forEach(el => { io.observe(el); el.classList.add('observed'); });
}

window.addEventListener('scroll', () => document.getElementById('navbar').classList.toggle('scrolled', scrollY > 20));

// Init
filterPros();
observeFadeUps();