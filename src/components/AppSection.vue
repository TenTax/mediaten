<template>
  <div class="app-section">
    <div class="app-section__header">
      <slot name="header" />
    </div>
    <div class="app-section__body">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppSection',
}
</script>

<style lang="scss">
@import '@/styles/mixins.scss';
@import '@/styles/variables.scss';

.app-section {
  padding: 40px 0;

  &__header {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    margin-bottom: 56px;

    @include breakpoint($bp-sm) {
      margin-bottom: 32px;
    }
  }

  @include breakpoint($bp-sm) {
    padding: 20px 0;
  }
}
</style>
