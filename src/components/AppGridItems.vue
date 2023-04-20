<template>
  <div class="app-grid-items">
    <ul class="app-grid-items__list">
      <li
        v-for="(item, index) in items"
        :key="index"
        class="app-grid-items__item"
      >
        <slot :item="item" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'AppGridItems',

  props: {
    items: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style lang="scss">
@import '@/styles/mixins.scss';
@import '@/styles/variables.scss';

.app-grid-items {
  &__list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
    grid-gap: 48px 40px;
    list-style: none;

    @include breakpoint($bp-lg) {
      grid-gap: 32px 30px;
    }

    @include breakpoint($bp-xs) {
      grid-gap: 24px 20px;
    }
  }
}
</style>
