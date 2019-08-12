function animate(element) {
  element.style.animation = 'none';
  element.offsetHeight;
  element.style.animation = null;
  element.classList.add('animated');
}

function send(event) {
  animate(event.currentTarget);
  flow();
}

sendButton = document.getElementById('send');
sendButton.addEventListener('click', send);

function flow(duration = 1) {
  const svg = document.getElementsByTagName('svg')[0];
  const namespaceURI = 'http://www.w3.org/2000/svg';
  const circle = document.createElementNS(namespaceURI, 'circle');
  const animate = document.createElementNS(namespaceURI, 'animate');
  animate.setAttribute('attributeName', 'cx');
  animate.setAttribute('dur', duration);
  animate.setAttribute('from', -3);
  animate.setAttribute('to', 103);
  circle.setAttribute('r', 3);
  circle.setAttribute('cx', -3);
  circle.setAttribute('cy', 16);
  circle.appendChild(animate);
  svg.appendChild(circle);
  animate.beginElement();
  setTimeout(() => circle.remove(), duration * 1000);
}
