document.addEventListener('DOMContentLoaded', () => {
  const SPREADS = window.SPREADS || [];
  const TOTAL = SPREADS.length;
  if (TOTAL === 0) return;

  let current = 0;
  let animating = false;
  let hasTurnedPage = false;

  // DOM Elements
  const book = document.getElementById('book');
  const leftHalf = document.getElementById('leftHalf');
  const rightHalf = document.getElementById('rightHalf');
  const lFront = document.getElementById('lFront');
  const lBack = document.getElementById('lBack');
  const rFront = document.getElementById('rFront');
  const rBack = document.getElementById('rBack');
  
  const pInd = document.getElementById('pInd');
  const hint = document.getElementById('hint');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const dotsContainer = document.getElementById('dots');

  // Create static background elements for seamless 3D flips
  const bgLeft = document.createElement('div');
  bgLeft.className = 'half left-half';
  bgLeft.style.pointerEvents = 'none';
  bgLeft.style.zIndex = '1';
  
  const bgRight = document.createElement('div');
  bgRight.className = 'half right-half';
  bgRight.style.pointerEvents = 'none';
  bgRight.style.zIndex = '1';

  book.insertBefore(bgLeft, leftHalf);
  book.insertBefore(bgRight, leftHalf);

  // Set initial z-indices for active folding layers
  leftHalf.style.zIndex = '10';
  rightHalf.style.zIndex = '10';

  // Initialize page content
  function initPages() {
    lFront.innerHTML = SPREADS[current].left;
    rFront.innerHTML = SPREADS[current].right;
    bgLeft.innerHTML = SPREADS[current].left;
    bgRight.innerHTML = SPREADS[current].right;
    
    // Build dots indicator dynamically
    dotsContainer.innerHTML = '';
    for (let i = 0; i < TOTAL; i++) {
      const dot = document.createElement('div');
      dot.className = 'dot' + (i === current ? ' on' : '');
      dot.addEventListener('click', () => goTo(i));
      dotsContainer.appendChild(dot);
    }
    
    updateUI();
  }

  function updateUI() {
    // Enable/Disable buttons
    prevBtn.disabled = (current === 0);
    nextBtn.disabled = (current === TOTAL - 1);

    // Update Page Indicator text dynamically
    if (current === 0) {
      pInd.textContent = 'Page 1';
    } else if (current === TOTAL - 1) {
      pInd.textContent = 'Page 10';
    } else {
      const pageNumStart = current * 2;
      pInd.textContent = `Pages ${pageNumStart} - ${pageNumStart + 1}`;
    }

    // Update active dot
    const dots = dotsContainer.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
      if (index === current) {
        dot.classList.add('on');
      } else {
        dot.classList.remove('on');
      }
    });

    // Hide hint after first flip action
    if (hasTurnedPage && hint) {
      hint.style.opacity = '0';
      setTimeout(() => hint.remove(), 500);
    }
  }

  function flipForward() {
    if (animating || current >= TOTAL - 1) return;
    animating = true;
    hasTurnedPage = true;
    
    const next = current + 1;

    // Configure static backgrounds underneath the flip
    bgLeft.innerHTML = SPREADS[current].left;
    bgRight.innerHTML = SPREADS[next].right;

    // Configure the moving page (rightHalf turning to the left)
    rFront.innerHTML = SPREADS[current].right;
    rBack.innerHTML = SPREADS[next].left;

    // Setup transition and rotate
    rightHalf.style.transition = 'transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)';
    rightHalf.style.transform = 'rotateY(-180deg)';

    // Wait for animation to finish
    rightHalf.addEventListener('transitionend', function handler(e) {
      if (e.propertyName === 'transform') {
        rightHalf.removeEventListener('transitionend', handler);

        // Reset elements to static resting state
        lFront.innerHTML = SPREADS[next].left;
        rFront.innerHTML = SPREADS[next].right;
        
        rightHalf.style.transition = 'none';
        rightHalf.style.transform = 'rotateY(0deg)';

        current = next;
        updateUI();
        animating = false;
      }
    });
  }

  function flipBackward() {
    if (animating || current <= 0) return;
    animating = true;
    hasTurnedPage = true;

    const prev = current - 1;

    // Configure static backgrounds underneath the flip
    bgLeft.innerHTML = SPREADS[prev].left;
    bgRight.innerHTML = SPREADS[current].right;

    // Configure the moving page (leftHalf turning to the right)
    lFront.innerHTML = SPREADS[current].left;
    lBack.innerHTML = SPREADS[prev].right;

    // Setup transition and rotate
    leftHalf.style.transition = 'transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)';
    leftHalf.style.transform = 'rotateY(180deg)';

    // Wait for animation to finish
    leftHalf.addEventListener('transitionend', function handler(e) {
      if (e.propertyName === 'transform') {
        leftHalf.removeEventListener('transitionend', handler);

        // Reset elements to static resting state
        lFront.innerHTML = SPREADS[prev].left;
        rFront.innerHTML = SPREADS[prev].right;

        leftHalf.style.transition = 'none';
        leftHalf.style.transform = 'rotateY(0deg)';

        current = prev;
        updateUI();
        animating = false;
      }
    });
  }

  function goTo(index) {
    if (animating || index === current || index < 0 || index >= TOTAL) return;
    
    // Choose appropriate flip animation based on direction
    if (index > current) {
      flipForward();
      // If jumping multiple pages, queue subsequent flips
      if (index > current + 1) {
        setTimeout(() => goTo(index), 650);
      }
    } else {
      flipBackward();
      if (index < current - 1) {
        setTimeout(() => goTo(index), 650);
      }
    }
  }

  // Event Listeners
  nextBtn.addEventListener('click', flipForward);
  prevBtn.addEventListener('click', flipBackward);

  // Click on book sides to flip
  book.addEventListener('click', (e) => {
    // Only register clicks if we aren't clicking a button or dot
    if (e.target.closest('.btn') || e.target.closest('.dot')) return;

    const rect = book.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    
    if (clickX > rect.width / 2) {
      flipForward();
    } else {
      flipBackward();
    }
  });

  // Swipe / Touch Gestures support
  let touchStartX = 0;
  let touchStartY = 0;

  book.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
  }, { passive: true });

  book.addEventListener('touchend', (e) => {
    const diffX = e.changedTouches[0].clientX - touchStartX;
    const diffY = e.changedTouches[0].clientY - touchStartY;
    
    // Swipe left (forward) or right (backward)
    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 60) {
      if (diffX < 0) {
        flipForward();
      } else {
        flipBackward();
      }
    }
  }, { passive: true });

  // Init
  initPages();
});
