<template>
  <div class="cardImageList">
    <div class="cardImageList-img">
      <NuxtImg src="/assets/images/products/400wat.png" />
    </div>
    <div class="cardImageList-body">
      <ul>
        <li>
          <Icon :icon="listIcon" class="icon" />
          إقتصادي
        </li>
        <li>
          <Icon :icon="listIcon" class="icon" />
          كيشد شارج
        </li>
        <li>
          <Icon :icon="listIcon" class="icon" />
          كيجو معاه جوج باتريات
        </li>
        <li>
          <Icon :icon="listIcon" class="icon" />
          إقتصادي
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
const { listIcon } = withDefaults(defineProps<{ listIcon?: string }>(), {
  listIcon: "ic:round-check",
});
</script>

<style lang="scss">
$cardImageList: ".cardImageList";

#{$cardImageList} {
  &-img {
    @apply border-secondary-dark border rounded-lg bg-white w-24 aspect-square  
    flex items-center
    relative z-[1]
    -mb-10 mx-auto;
  }
  &-body {
    @apply bg-white  border-secondary-dark border rounded-lg
    px-2 pt-14 pb-5
    text-black font-semibold text-xs;

    ul {
      @apply flex flex-col gap-3;
    }
    li {
      @apply flex items-start;
      .icon {
        @apply mt-0.5 me-1 ;
      }
    }
  }
}
</style>
