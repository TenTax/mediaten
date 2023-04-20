<template>
  <div class="supplier-card">
    <img
      :src="imageUrl"
      :alt="name"
      class="supplier-card__image"
    >
    <div class="supplier-card__body">
      <div class="supplier-card__name">
        {{ name }}
      </div>
      <app-rating>
        {{ rating }}
      </app-rating>
    </div>
  </div>
</template>

<script>
import AppRating from '@/components/AppRating'

export default {
  name: 'SuplierCard',

  components: {
    AppRating,
  },

  props: {
    imageUrl: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    rating: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss">
.supplier-card {
  display: flex;
  align-items: center;

  &__image {
    display: flex;
    margin-right: 20px;
    width: 72px;
    height: 72px;
    opacity: 0.5;
    filter: grayscale(100%);
  }

  &__name {
    margin-bottom: 6px;
    font-weight: 700;
    line-height: 1.44;
  }
}
</style>
