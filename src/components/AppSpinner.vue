<template>
  <div class="app-spinner">
    <div class="app-spinner__circle" />
    <div
      v-if="$slots.default"
      class="app-spinner__text"
    >
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppSpinner',
}
</script>

<style lang="scss">
@import '@/styles/variables.scss';

.app-spinner {
  display: flex;
  align-items: center;
  flex-direction: column;

  &__circle {
    position: relative;
    width: 48px;
    height: 48px;
  }

  &__circle::before,
  &__circle::after {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 3px solid transparent;
    content: '';
  }

  &__circle::before {
    border-color: rgba($color-dark, 0.5);
  }

  &__circle::after {
    border-top-color: $color-dark;
    animation: rotate 1s linear infinite;
  }

  &__text {
    margin-top: 16px;
  }
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}
</style>
