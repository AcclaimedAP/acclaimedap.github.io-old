<script>

const background = document.getElementsByClassName('imageContainer');

function followMouse(e) {
  const x = `${(e.clientX * 5) / window.innerWidth}%`;
  const y = `${(e.clientY * 5) / window.innerHeight}%`;

  for (let i = 0; i < background.length; i += 1) {
    background[i].style.left = x;
    background[i].style.top = y;
  }
}
document.addEventListener('mousemove', followMouse);
</script>
<template>
<div class="imageContainer darken"></div>
</template>
<style scoped lang="scss">
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.imageContainer {
  position: absolute;
  min-height: 100%;
  min-width: 100%;
  object-fit: cover;
  transform-origin: middle center;
  transform: scale(1.2);
  opacity: 0;
  animation: fadeIn forwards 3s 0s ease-out;
}
.darken {
  background-image: 
    linear-gradient(
      rgba(0, 0, 0, 0.1),
      rgba(0, 0, 0, 0.1),
      rgba(0, 0, 0, 1)
    ), url('../img/trees-background.jpg');
}
</style>
