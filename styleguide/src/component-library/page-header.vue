<template>
  <div class="page-header">
    <!-- <h1>{{ title }}</h1> -->
  </div>
</template>

<script>
export default {
  props: ["title"]
};
</script>

<style scoped>
.page-header {
  display: flex;
  background-color: transparent;
  padding: 32px;
}

.page-header h1 {
  color: white;
  font-weight: bold;
  margin: 0;
  padding: 0;
}
</style>
