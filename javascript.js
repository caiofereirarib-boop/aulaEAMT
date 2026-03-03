// Atualizar a data no cabeçalho automaticamente
const dateElement = document.getElementById('current-date');
if (dateElement) {
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    dateElement.innerText = new Date().toLocaleDateString('pt-BR', options);
}

// Configuração do Gráfico de Crescimento (Chart.js)
const ctx = document.getElementById('mainChart').getContext('2d');

// Criar gradiente para a linha
const gradient = ctx.createLinearGradient(0, 0, 0, 400);
gradient.addColorStop(0, 'rgba(99, 102, 241, 0.4)');
gradient.addColorStop(1, 'rgba(99, 102, 241, 0)');

new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['2019', '2020', '2021', '2022', '2023', '2024', '2025', '2026'],
        datasets: [{
            label: 'Adesão Digital (%)',
            data: [18, 65, 72, 68, 75, 82, 88, 94],
            borderColor: '#6366f1',
            borderWidth: 3,
            fill: true,
            backgroundColor: gradient,
            tension: 0.4,
            pointRadius: 2
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
            y: { grid: { color: 'rgba(255,255,255,0.05)' }, ticks: { color: '#64748b' } },
            x: { grid: { display: false }, ticks: { color: '#64748b' } }
        }
    }
});

// Interatividade da Sidebar (Troca de classe ativa)
const navItems = document.querySelectorAll('.sidebar-item');
navItems.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        navItems.forEach(i => i.classList.remove('active'));
        item.classList.add('active');
    });
});
