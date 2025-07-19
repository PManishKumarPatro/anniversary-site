
const sliderImages = [
  'Screenshot_20250718_105731_Gallery.jpg',
  '20240901_120726.jpg',
  '20240707_204521.jpg',
  'IMG-20240427-WA0004.jpg',
  '20240707_204521.jpg',
  '20240901_120726.jpg'
];
let currentSlide = 0;
function unlock() {
  const input = document.getElementById('nicknameInput').value.trim().toLowerCase();
  const allowed = ['bunuuuu', 'bunu', 'bunuuu'];
  if (allowed.includes(input)) {
    document.getElementById('unlockScreen').classList.add('hidden');
    document.getElementById('interactive').classList.remove('hidden');
    createFloatingHearts();
  } else {
    document.getElementById('error').innerText = 'Oops! Try again ❤️';
  }
}
function revealMessage() {
  const msgSection = document.getElementById('messageSection');
  msgSection.classList.remove('hidden');
  msgSection.scrollIntoView({ behavior: 'smooth' });
  startSlider();
}
function startSlider() {
  setInterval(() => {
    currentSlide = (currentSlide + 1) % sliderImages.length;
    document.getElementById('sliderImage').src = sliderImages[currentSlide];
  }, 2500);
}
function showRejectionMessage() {
  const modal = document.getElementById('rejectionModal');
  modal.classList.remove('hidden');
  modal.style.display = 'flex';
}
function closeRejectionModal() {
  const modal = document.getElementById('rejectionModal');
  modal.classList.add('hidden');
  modal.style.display = 'none';
}
function createFloatingHearts() {
  const container = document.querySelector('.hearts-container');
  const emojis = ['💖', '💘', '💕', '💗', '💞', '💓'];
  for (let i = 0; i < 30; i++) {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerText = emojis[Math.floor(Math.random() * emojis.length)];
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.animationDelay = `${Math.random() * 10}s`;
    heart.style.fontSize = `${16 + Math.random() * 24}px`;
    container.appendChild(heart);
  }
}
function openRomanticWorld() {
  document.getElementById('romanticWorld').classList.remove('hidden');
  document.getElementById('romanticWorld').scrollIntoView({ behavior: 'smooth' });
}
function openTab(tabId) {
  const tabs = document.querySelectorAll('.tab-content');
  tabs.forEach(tab => tab.classList.add('hidden'));
  document.getElementById(tabId).classList.remove('hidden');
}
