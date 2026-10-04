const toast = document.querySelector('#toast');
const dialog = document.querySelector('#expenseDialog');
const showToast = (message) => { toast.textContent = message; toast.classList.add('show'); setTimeout(() => toast.classList.remove('show'), 2200); };

document.querySelectorAll('.reminder').forEach((item) => item.addEventListener('click', () => {
  item.classList.toggle('done');
  showToast(item.classList.contains('done') ? `${item.dataset.label} logged. The wallet felt that.` : `${item.dataset.label} unlogged.`);
}));

document.querySelector('#skipAll').addEventListener('click', () => { document.querySelectorAll('.reminder').forEach((item) => item.classList.remove('done')); showToast('Skipped. Future you says thanks.'); });
document.querySelector('#addExpense').addEventListener('click', () => dialog.showModal());
document.querySelectorAll('.category').forEach((button) => button.addEventListener('click', () => { document.querySelectorAll('.category').forEach((item) => item.classList.remove('active')); button.classList.add('active'); }));
document.querySelector('#expenseForm').addEventListener('submit', (event) => { event.preventDefault(); dialog.close(); event.target.reset(); showToast('Logged. The wallet felt that.'); });
document.querySelector('#themeToggle').addEventListener('click', () => document.body.classList.toggle('light'));

document.querySelector('.avatar').addEventListener('click', () => showToast('Profile settings are coming soon.'));

const animateNumber = (element) => { const target = Number(element.textContent.replace(/,/g, '')); let current = 0; const step = Math.max(target / 35, 1); const tick = () => { current = Math.min(current + step, target); element.textContent = Math.floor(current).toLocaleString('en-IN'); if (current < target) requestAnimationFrame(tick); }; tick(); };
animateNumber(document.querySelector('#balance'));

document.querySelectorAll('.main-nav a').forEach((link) => link.addEventListener('click', () => { document.querySelectorAll('.main-nav a').forEach((item) => item.classList.remove('active')); link.classList.add('active'); }));
