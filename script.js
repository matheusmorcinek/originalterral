document.getElementById("clickBtn").addEventListener("click", () => {
    document.getElementById("message").textContent = "Obrigado por visitar! 🌱";
  });
  

  const container = document.querySelector('.image-3d-container');
const image = document.querySelector('.image-3d');

container.addEventListener('mousemove', (e) => {
  const rect = container.getBoundingClientRect();
  const x = (e.clientX - rect.left) / rect.width - 0.5;
  const y = (e.clientY - rect.top) / rect.height - 0.5;

  const rotateX = y * -20;
  const rotateY = x * 20;

  image.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
});

container.addEventListener('mouseleave', () => {
  image.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
});
