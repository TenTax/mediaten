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
@import '@/styles/mixins.scss';
@import '@/styles/variables.scss';

.app-container {
  width: 100%;
  max-width: 1360px;
  margin: 0 auto;
  padding: 0 100px;

  @include breakpoint($bp-lg) {
    padding: 0 32px;
  }

  @include breakpoint($bp-sm) {
    padding: 0 16px;
  }
}
</style>
