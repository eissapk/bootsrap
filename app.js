const ul = document.querySelector('.featured-work ul');

// update height function
const updateHeight = e => {
  const winH = window.innerHeight;
  const upperNavH = document.querySelector('.upper-bar').clientHeight;
  const navH = document.querySelector('.navbar').clientHeight;
  const slider = document.querySelector('.slider');
  // sync
  slider.style.height = `${winH - (upperNavH+navH)}px`;
};

// handle images
const shuffleImgs = e => {

  const showHideImgs = (className) => {
    const imgs = document.querySelectorAll('.gallery .all');
    const target = document.querySelectorAll(`.${className}`);

    // hide all
    imgs.forEach(img => img.style.display = 'none');

    // show target
    target.forEach(img => img.style.display = 'block');

  };

  if (e.target.nodeName.toLowerCase() === "li") {
    const active = ul.querySelector('.active');
    // remove class
    active.classList.remove('active');
    // add class
    e.target.classList.add('active');

    if (e.target.textContent == "all") showHideImgs(e.target.textContent);
    else if (e.target.textContent == 'websites') showHideImgs(e.target.textContent);
    else if (e.target.textContent == 'logos') showHideImgs(e.target.textContent);
    else if (e.target.textContent == 'graphic') showHideImgs(e.target.textContent);
    else if (e.target.textContent == 'marketing') showHideImgs(e.target.textContent);
    else if (e.target.textContent == 'videos') showHideImgs(e.target.textContent);

  }
};


// init
updateHeight();
//! events
window.addEventListener('resize', updateHeight);
ul.addEventListener('click', shuffleImgs);