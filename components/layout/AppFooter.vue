<template>
  <footer class="appFooter">
    <LayoutContainer>
      <BaseHeadLine size="lg"> تواصل معانا ! </BaseHeadLine>
      <hr class="opacity-20 my-3" />
      <ul class="flex flex-col gap-y-3 my-5">
        <li>
          <NuxtLink
            class="inline-flex font-semibold gap-x-3 items-center"
            to="#"
          >
            <span
              class="flex items-center justify-center bg-white text-primary rounded-md p-2"
            >
              <Icon name="ic:round-phone" />
            </span>
            06 54 54 53 85
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            class="inline-flex font-semibold gap-x-3 items-center"
            to="#"
          >
            <span
              class="flex items-center justify-center bg-white text-primary rounded-md p-2"
            >
              <Icon name="ic:baseline-mail" />
            </span>
            7raifi@gmail.com
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            class="inline-flex font-semibold gap-x-3 items-center"
            to="#"
          >
            <span
              class="flex items-center justify-center bg-white text-primary rounded-md p-2"
            >
              <Icon name="mdi:instagram" />
            </span>
            instagram
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            class="inline-flex font-semibold gap-x-3 items-center"
            to="#"
          >
            <span
              class="flex items-center justify-center bg-white text-primary rounded-md p-2"
            >
              <Icon name="ri:facebook-fill" />
            </span>
            facebook
          </NuxtLink>
        </li>
      </ul>
      <hr class="opacity-20 my-3" />
      <div class="text-sm mt-8 flex">
        <Icon name="ph:copyright" class="text-sm me-1 mt-1" />
        <span>{{ $t("shopname") }} 2024</span>
      </div>
    </LayoutContainer>
  </footer>
</template>

<script setup lang="ts"></script>

<style lang="scss">
$appFooter: ".appFooter";

#{$appFooter} {
  @apply bg-primary text-white pt-8 pb-10;
}
</style>
