export function pulse(event) {
  const element = event.target;
  element.classList.add('animate__animated', 'animate__pulse');

  element.addEventListener('animationend', () => {
    element.classList.remove('animate__animated');
    element.classList.remove('animate__pulse');
  });
}

export function shake(event) {
  const element = event.target;
  element.classList.add('animate__animated', 'animate__shakeX');

  element.addEventListener('animationend', () => {
    element.classList.remove('animate__animated');
    element.classList.remove('animate__shakeX');
  });
}

export function slideInRight(element) {
  element.classList.add('animate__animated', 'animate__slideInRight');

  element.addEventListener('animationend', () => {
    element.classList.remove('animate__animated');
    element.classList.remove('animate__slideInRight');
  });
}

export function slideOutLeft(element) {
  element.classList.add('animate__animated', 'animate__slideOutLeft');

  element.addEventListener('animationend', () => {
    element.classList.remove('animate__animated');
    element.classList.remove('animate__slideOutLeft');
    slideInRight(element);
  });
}
