// Data
const categories = [
    { icon: '⚡', name: 'Eletricista', jobs: '320 pedidos/mês' },
    { icon: '🔧', name: 'Encanador', jobs: '280 pedidos/mês' },
    { icon: '🎨', name: 'Pintor', jobs: '190 pedidos/mês' },
    { icon: '❄️', name: 'Técnico AC', jobs: '240 pedidos/mês' },
    { icon: '🧹', name: 'Faxineira', jobs: '410 pedidos/mês' },
    { icon: '🌿', name: 'Jardineiro', jobs: '160 pedidos/mês' },
    { icon: '🔑', name: 'Chaveiro', jobs: '200 pedidos/mês' },
    { icon: '🪚', name: 'Marceneiro', jobs: '130 pedidos/mês' },
    { icon: '🏗️', name: 'Pedreiro', jobs: '210 pedidos/mês' },
    { icon: '👶', name: 'Babá', jobs: '350 pedidos/mês' },
    { icon: '👴', name: 'Cuidador', jobs: '180 pedidos/mês' },
    { icon: '🐶', name: 'Pet Sitter', jobs: '220 pedidos/mês' },
];

const testimonials = [
    { name: 'Carlos Silva', role: 'Eletricista • 2 anos na plataforma', text: 'Em 2 anos, saí de biscates esporádicos para uma renda fixa de R$6.000/mês. A plataforma me deu visibilidade que eu nunca teria sozinho.', earnings: 'R$ 6.200/mês', color: '#1B5EF7', initials: 'CS' },
    { name: 'Ana Rodrigues', role: 'Faxineira • 1 ano na plataforma', text: 'Antes trabalhava numa empresa ganhando R$1.400. Hoje tenho meus próprios clientes, faço meu horário e ganho mais que o dobro.', earnings: 'R$ 3.800/mês', color: '#8B5CF6', initials: 'AR' },
    { name: 'Pedro Santos', role: 'Encanador • 3 anos na plataforma', text: 'Tentei outras plataformas mas o HomeExpert é diferente: os clientes são verificados, o pagamento é garantido e o suporte resolve tudo rápido.', earnings: 'R$ 5.100/mês', color: '#059669', initials: 'PS' },
];

// Render categories
document.getElementById('catsGrid').innerHTML = categories.map(c => `
<div class="col-6 col-sm-4 col-md-3 fade-up">
    <div class="cat-card">
    <span class="cat-icon">${c.icon}</span>
    <h6>${c.name}</h6>
    <p>${c.jobs}</p>
    </div>
</div>
`).join('');

// Render skills chips
const skills = ['Elétrica', 'Hidráulica', 'Pintura', 'Ar-Condicionado', 'Limpeza', 'Jardinagem', 'Chaveiro', 'Marcenaria', 'Pedreiro', 'Babá', 'Cuidador de Idosos', 'Pet Sitter', 'Reforma Geral', 'Gás', 'Informática'];
document.getElementById('skillsChips').innerHTML = skills.map(s => `<span class="skill-chip" onclick="this.classList.toggle('selected')">${s}</span>`).join('');

// Render testimonials
document.getElementById('testiGrid').innerHTML = testimonials.map(t => `
<div class="col-md-4 fade-up">
    <div class="testi-card">
    <div class="testi-stars">⭐⭐⭐⭐⭐</div>
    <p class="testi-text">"${t.text}"</p>
    <div class="testi-author">
        <div class="testi-avatar" style="background:${t.color}">${t.initials}</div>
        <div>
        <div class="testi-name">${t.name}</div>
        <div class="testi-role">${t.role}</div>
        <span class="testi-earnings">💰 ${t.earnings}</span>
        </div>
    </div>
    </div>
</div>
`).join('');

// Calculator
function calcEarnings() {
    const rate = parseInt(document.getElementById('calcCat').value);
    const days = parseInt(document.getElementById('daysRange').value);
    const jobs = parseInt(document.getElementById('jobsRange').value);
    const monthly = rate * days * 4 * jobs * 0.85;
    document.getElementById('calcResult').textContent = 'R$ ' + monthly.toLocaleString('pt-BR', { minimumFractionDigits: 0 });
}
calcEarnings();

// Form steps
function nextStep(n) {
    document.querySelectorAll('.form-step').forEach(s => s.classList.remove('active'));
    document.getElementById('step' + n)?.classList.add('active');
    const dots = ['dot1', 'dot2', 'dot3', 'dot4'];
    const labels = document.querySelectorAll('.prog-label');
    dots.forEach((id, i) => {
        const dot = document.getElementById(id);
        dot.className = 'prog-dot ' + (i + 1 < n ? 'done' : i + 1 === n ? 'active' : 'pending');
        labels[i].className = 'prog-label' + (i + 1 === n ? ' active' : '');
        dot.textContent = i + 1 < n ? '✓' : i + 1;
    });
}

function finishSignup() {
    document.querySelectorAll('.form-step').forEach(s => s.classList.remove('active'));
    document.getElementById('progressSteps').style.display = 'none';
    document.getElementById('successScreen').style.display = 'block';
}

// Chip toggle for availability
document.querySelectorAll('.skill-chip').forEach(c => {
    if (c.closest('#skillsChips')) return;
    c.addEventListener('click', () => c.classList.toggle('selected'));
});

// Scroll animations
const io = new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }), { threshold: .1 });
document.querySelectorAll('.fade-up').forEach(el => io.observe(el));
window.addEventListener('scroll', () => document.getElementById('navbar').classList.toggle('scrolled', scrollY > 20));