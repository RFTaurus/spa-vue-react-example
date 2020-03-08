<template>
  <div class="card">
    <img :src="thumbLink" class="card-img-top" alt="vide-thumbnail" />
    <div class="time-overlay">
      <p class="time-overlay-text">
        {{ duration }}
      </p>
    </div>
    <div class="card-body">
      <p class="video-title">
        {{ videoTitle }}
      </p>
      <p class="text-muted">{{ author }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    thumbLink: {
      type: [String]
    },
    duration: {
      type: [String]
    },
    videoTitle: {
      type: [String]
    },
    author: {
      type: [String]
    }
  }
};
</script>

<style scoped>
.card {
  width: 400px;
  max-width: 400px;
  margin: 30px 18px;
  border: none;
}

.card-body {
  padding: 16px 0;
}
</style>
