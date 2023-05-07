const cylinder = document.querySelector('.cylinder');
const btn = document.querySelector('.button');

let defaultRotation = 90;

btn.addEventListener('click', () => {
  const randomRotations = (Math.floor(Math.random() * 2) + 1)*5; 
  const rotationAmount = 180 * randomRotations; 
  
  cylinder.classList.add('flipping');
  cylinder.style.transform = `rotateX(${defaultRotation + rotationAmount}deg)`;

  defaultRotation = defaultRotation + rotationAmount;


  setTimeout(() => {
    cylinder.classList.remove('flipping');
  }, 1000);
});
