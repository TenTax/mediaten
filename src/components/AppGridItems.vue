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
.app-grid-items {
  &__list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 48px 40px;
    list-style: none;
  }
}
</style>
