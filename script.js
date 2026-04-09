// ⚠️ SUBSTITUA PELO SEU LINK SHOPEE
const SHOPEE_LINK = 'https://shope.ee/SEU-LINK-AQUI';

// COUNTDOWN
function startCountdown() {
    const el = document.getElementById('countdown');
    let time = 24 * 60 * 60; // 24 horas
    
    setInterval(() => {
        const h = Math.floor(time / 3600);
        const m = Math.floor((time % 3600) / 60);
        const s = time % 60;
        
        el.textContent = `${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
        
        time--;
        if (time < 0) time = 24 * 60 * 60;
    }, 1000);
}

// STOCK COUNTER
function stockCounter() {
    const el = document.getElementById('stock');
    let stock = 47;
    
    setInterval(() => {
        if (Math.random() < 0.3) {
            stock = Math.max(20, stock - 1);
            el.textContent = stock;
            el.style.color = '#E74C3C';
            setTimeout(() => el.style.color = '#F39C12', 500);
        }
    }, 8000);
}

// FAQ ACCORDION
function initFAQ() {
    const items = document.querySelectorAll('.faq-item');
    
    items.forEach(item => {
        const question = item.querySelector('.faq-q');
        question.addEventListener('click', () => {
            items.forEach(i => {
                if (i !== item) i.classList.remove('active');
            });
            item.classList.toggle('active');
        });
    });
}

// REDIRECT SHOPEE
function goToShopee() {
    window.open(SHOPEE_LINK, '_blank');
}

// CTAs
function initCTAs() {
    const buttons = ['cta-main', 'cta-final', 'cta-floating'];
    
    buttons.forEach(id => {
        const btn = document.getElementById(id);
        if (btn) {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                goToShopee();
            });
        }
    });
}

// FLOATING BUTTON
function initFloating() {
    const floating = document.getElementById('floating');
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300 && window.innerWidth <= 768) {
            floating.style.display = 'block';
        } else if (window.pageYOffset < 100) {
            floating.style.display = 'none';
        }
    });
}

// INIT ALL
document.addEventListener('DOMContentLoaded', () => {
    startCountdown();
    stockCounter();
    initFAQ();
    initCTAs();
    initFloating();
    console.log('✅ Landing page carregada!');
});
