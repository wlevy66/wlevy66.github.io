function load() {
  document.getElementById('yes').addEventListener('click', yes);
  document.getElementById('no').addEventListener('mouseover', no);
  document.getElementById('no').addEventListener('touchstart', function(e) {
    e.preventDefault();
    no();
  });
}

function no() {
  const btn = document.getElementById('no');
  btn.style.position = 'fixed';

  const isMobile = window.innerWidth < 768;
  const factor = isMobile ? 0.95 : 0.85;

  const windowH = window.innerHeight * factor;
  const windowW = window.innerWidth * factor;

  const top = Math.floor(Math.random() * windowH);
  const left = Math.floor(Math.random() * windowW);

  btn.style.top = top + 'px';
  btn.style.left = left + 'px';
}

function yes() {
  document.getElementById('container').innerHTML = `
    <div id="message">
      Annie-san ❤️<br>
      lo prometido es deuda :)<br>
      🌹🍺
    </div>
  `;
  document.body.style.backgroundImage = "url('./slime.jpg')";
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundPosition = "center";
  document.body.style.backgroundColor = "";
}