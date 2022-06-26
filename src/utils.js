export function random(min, max) {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1))
}

export function easyHide(elDom) {
  return (elDom.style.transition = 'opacity 1s')
  && (elDom.style.opacity = '0')
  && setTimeout(() => elDom.remove(), 1000);  
}