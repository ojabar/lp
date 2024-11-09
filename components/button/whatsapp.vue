<template>
  <a
    class="buttonWhatsapp"
    href="https://wa.me/+212635784056?text=!%20%D8%A8%D8%BA%D9%8A%D8%AA%20%D8%B9%D8%A7%D9%81%D8%A7%D9%83%20%D9%87%D8%A7%D8%AF%20%D8%A7%D9%84%D9%85%D9%86%D8%AA%D8%AC%20https://www.l7rayfi.com"
  >
    <Icon icon="ic:baseline-whatsapp" />
  </a>
</template>

<script setup></script>

<style lang="scss" scoped>
.buttonWhatsapp {
  @apply fixed bottom-[100px] left-4 bg-[#25d366]
  h-12 w-12 flex justify-center items-center
  text-white text-2xl rounded-full;

  animation: bounce 1.5s infinite;
}

@keyframes bounce {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}
</style>
