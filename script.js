// Minimal JavaScript to handle WhatsApp ordering
// Set your WhatsApp number here (use country code, no + or 0 prefixes; e.g., 62 for Indonesia)
const WA_NUMBER = '6281234567890';

function createWhatsAppLink(name, price) {
  const safeName = name || 'Produk';
  const priceText = price ? ` seharga ${price}` : '';
  const message = `Halo, saya tertarik memesan "${safeName}"${priceText}. Mohon info ketersediaan dan cara pembayaran. Terima kasih.`;
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${WA_NUMBER}?text=${encoded}`;
}

function initWhatsAppButtons() {
  const buttons = document.querySelectorAll('.wa-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const name = btn.dataset.name || 'Produk';
      const price = btn.dataset.price || '';
      const url = createWhatsAppLink(name, price);
      window.open(url, '_blank', 'noopener');
    });
  });
}

// Initialize on DOM ready
function initHeroButtons(){
  const heroBtns = document.querySelectorAll('.hero-btn[data-target]');
  heroBtns.forEach(btn=>{
    btn.addEventListener('click', (e)=>{
      const target = btn.dataset.target;
      if(!target) return;
      const el = document.querySelector(target);
      if(el){
        el.scrollIntoView({behavior:'smooth',block:'start'});
      }
    });
  });
}

function initHeroCarousel(options = { interval: 3500, retryDelay: 500, maxRetries: 8 }){
  const heroImg = document.querySelector('.hero-image img');
  if(!heroImg) return;

  let tries = 0;
  let intervalId = null;
  let started = false;

  function buildProductList(){
    return Array.from(document.querySelectorAll('#products .product-card img')).map(i => ({ src: i.getAttribute('src'), alt: i.getAttribute('alt') }));
  }

  function rotateOnce(productImgs, state){
    state.index = (state.index + 1) % productImgs.length;
    const next = productImgs[state.index];

    // Fade out, swap src after transition duration, then fade in.
    // Using a timeout is more robust across browsers than relying solely on 'transitionend'.
    heroImg.style.opacity = 0;
    setTimeout(()=>{
      heroImg.setAttribute('src', next.src);
      heroImg.setAttribute('alt', next.alt || '');
      // Force reflow so the opacity transition will apply
      void heroImg.offsetWidth;
      heroImg.style.opacity = 1;
    }, 650); // slightly more than CSS duration
  }

  function start(productImgs, state){
    if(started) return;
    started = true;
    heroImg.style.opacity = 1;

    // Start an immediate short timeout so user sees movement without needing a manual refresh
    setTimeout(()=> rotateOnce(productImgs, state), Math.min(600, options.interval));

    intervalId = setInterval(()=> rotateOnce(productImgs, state), options.interval);

    const pause = ()=>{ if(intervalId){ clearInterval(intervalId); intervalId = null; } };
    const resume = ()=>{ if(!intervalId){ intervalId = setInterval(()=> rotateOnce(productImgs, state), options.interval); } };

    heroImg.addEventListener('mouseenter', pause);
    heroImg.addEventListener('mouseleave', resume);
    heroImg.addEventListener('focus', pause);
    heroImg.addEventListener('blur', resume);
  }

  function tryInit(){
    const productImgs = buildProductList();
    if(productImgs.length < 2){
      // retry after a short delay, and also wait for window 'load' as fallback
      tries++;
      if(tries <= options.maxRetries){
        setTimeout(tryInit, options.retryDelay);
      } else {
        // final fallback: start on window load
        window.addEventListener('load', () => {
          const list = buildProductList();
          if(list.length >= 2){
            const state = { index: (list.findIndex(p => p.src.split('/').pop() === (heroImg.getAttribute('src')||'').split('/').pop()) || 0) };
            start(list, state);
          }
        }, { once: true });
      }
      return;
    }

    const state = { index: (productImgs.findIndex(p => p.src.split('/').pop() === (heroImg.getAttribute('src')||'').split('/').pop()) ) };
    if(state.index === -1) state.index = 0;

    start(productImgs, state);
  }

  tryInit();
}

function initContactPanel(){
  const select = document.getElementById('contact-product');
  const btn = document.getElementById('contact-wa-btn');
  if(!btn) return;
  function buildUrl(){
    const product = select && select.value ? select.value : '';
    const message = product ? `Halo, saya ingin info & memesan "${product}". Mohon bantuannya.` : `Halo, saya ingin info pemesanan dan promo. Mohon bantuannya.`;
    return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
  }
  btn.setAttribute('href', buildUrl());
  if(select){
    select.addEventListener('change', ()=> btn.setAttribute('href', buildUrl()));
  }
  btn.addEventListener('click', (e)=>{
    e.preventDefault();
    window.open(buildUrl(), '_blank', 'noopener');
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', ()=>{ initWhatsAppButtons(); initHeroButtons(); initHeroCarousel(); initContactPanel(); });
} else {
  initWhatsAppButtons(); initHeroButtons(); initHeroCarousel(); initContactPanel();
}