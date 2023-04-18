<template>
  <div class="app-page">
    <div class="app-page__header">
      <slot name="header" />
    </div>
    <div class="app-page__body">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppPage',
}
</script>

<style lang="scss">
.app-page {
  &__header {
    display: flex;
    align-items: baseline;
    margin-bottom: 56px;
  }
}
</style>
