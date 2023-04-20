<template>
  <div class="app-rating">
    <icon-rating-star class="app-rating__icon" />
    <slot />
  </div>
</template>

<script>
import IconRatingStar from '@/components/IconRatingStar'

export default {
  name: 'AppRating',

  components: {
    IconRatingStar,
  },
}
</script>

<style lang="scss">
.app-rating {
  display: flex;
  align-items: center;

  &__icon {
    margin-right: 6px;
  }
}
</style>
