<template>
  <div class="app-container">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'AppContainer',
}
</script>

<style lang="scss">
.app-container {
  width: 100%;
  max-width: 1360px;
  margin: 0 auto;
  padding: 0 100px;
}
</style>
