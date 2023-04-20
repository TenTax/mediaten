<template>
  <app-link
    v-on="$listeners"
    v-bind="$attrs"
    class="arrow-link"
  >
    <slot />
    <template #append>
      <icon-arrow-right class="arrow-link__icon" />
    </template>
  </app-link>
</template>

<script>
import AppLink from '@/components/AppLink'
import IconArrowRight from '@/components/IconArrowRight'

export default {
  name: 'ArrowLink',

  components: {
    AppLink,
    IconArrowRight,
  },
}
</script>

<style lang="scss">
.arrow-link {
  &__icon {
    width: 12px;
    height: 12px;
  }
}
</style>
