<template>
  <div class="blockMedias">
    <div v-for="(media, index) in data?.medias" :key="index">
      <div v-if="getMediaType(media) === 'mp4'">
        <video autoplay muted loop class="w-full"> 
          <source :src="media.url" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <img class="w-full" v-else :src="media.url" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type {
  MediaBlock,
  ComponentBlockSectionMedia,
} from "~/types/ProductGetType";

const { data } = defineProps({
  data: {
    type: {} as PropType<ComponentBlockSectionMedia>,
  },
});

const getMediaType = (media: MediaBlock) => {
  const parts = media.name.split(".");
  return parts.length > 1 ? parts[parts.length - 1].toLowerCase() : null;
};
</script>

<style scoped></style>
