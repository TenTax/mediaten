<template>
  <component
    :is="tag"
    :class="['app-heading', `app-heading_${tag}`]"
  >
    <slot />
  </component>
</template>

<script>
export default {
  name: 'AppHeading',

  props: {
    tag: {
      type: String,
      default: 'h1',
      validator (value) {
        return ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(value)
      },
    },
  },
}
</script>

<style lang="scss">
@import '@/styles/mixins.scss';
@import '@/styles/variables.scss';

.app-heading {
  font-weight: 700;

  &_h1 {
    font-size: 36px;

    @include breakpoint($bp-sm) {
      font-size: 28px;
    }
  }

  &__h2,
  &__h3,
  &__h4,
  &__h5,
  &__h6 {
    font-size: 24px;
  }
}
</style>
