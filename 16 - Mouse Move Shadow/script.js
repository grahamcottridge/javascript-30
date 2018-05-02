const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');

function shadow(e) {
  const width = hero.offsetWidth;
  const height = hero.offsetWidth;
  const walk = 100; // 100px
  // get position where cursor is
  let { offsetX: x, offsetY: y } = e;
  // stop the x, y changing if children elements
  if(this !== e.target) {
    x = x + e.target.offsetLeft;
    y = y + e.target.offsetTop;
  }

  //how many pixels should shadow stretch at each point - the 'walk'
  const xWalk = Math.round(x / width * walk) - (walk / 2);
  const yWalk = Math.round(x / width * walk) - (walk / 2);

  text.style.textShadow = `${xWalk}px ${yWalk}px 0 red`;

}

hero.addEventListener('mousemove', shadow);
