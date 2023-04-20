<template>
  <ul class="app-breadcrumbs">
    <li
      v-for="(item, index) in items"
      :key="index"
      class="app-breadcrumbs__item"
    >
      <router-link
        v-if="item.link"
        :to="item.link"
        class="app-breadcrumbs__link"
      >
        {{ item.label }}
      </router-link>
      <template v-else>
        {{ item.label }}
      </template>
      <icon-arrow-right
        v-if="index < items.length - 1"
        class="app-breadcrumbs__icon"
      />
    </li>
  </ul>
</template>

<script>
import IconArrowRight from '@/components/IconArrowRight'

export default {
  name: 'AppBreadcrumbs',

  components: {
    IconArrowRight,
  },

  props: {
    items: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style lang="scss">
@import '@/styles/variables.scss';

.app-breadcrumbs {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  list-style: none;
  color: $color-gray;
  font-size: 13px;

  &__link {
    color: inherit;
    text-decoration: none;
    transition: color 0.3s;
  }

  &__link:hover {
    color: $color-dark;
  }

  &__icon {
    width: 10px;
    height: 10px;
    margin: 0 9px;
  }
}
</style>
