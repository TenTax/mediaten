<template>
  <div class="product-card">
    <img
      :src="imageUrl"
      :alt="name"
      class="product-card__image"
    />
    <div class="product-card__body">
      <div class="product-card__price">
        от {{ price.current }} {{ price.currency }}
        <div
          v-if="price.old"
          class="product-card__old-price"
        >
          {{ price.old.toFixed(2) }} {{ price.currency }}
        </div>
      </div>
      <div class="product-card__row">
        <span class="product-card__vendor-code">
          {{ vendorCode }}
        </span>
        <app-rating class="product-card__rating">
          {{ rating }}
        </app-rating>
      </div>
      <div class="product-card__row">
        <span class="product-card__name">
          {{ name }}
        </span>
      </div>
      <div class="product-card__row">
        <span class="product-card__supplier">
          «{{ supplier.name }}»
        </span>
      </div>
    </div>
    <div
      v-if="discount"
      class="product-card__badge"
    >
      {{ discount }}
    </div>
  </div>
</template>

<script>
import AppRating from '@/components/AppRating'

export default {
  name: 'ProductCard',

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
    price: {
      type: Object,
      required: true,
    },
    vendorCode: {
      type: String,
      required: true,
    },
    rating: {
      type: String,
      required: true,
    },
    supplier: {
      type: Object,
      required: true,
    },
    discount: String,
  },
}
</script>

<style lang="scss">
@import '@/styles/variables.scss';

.product-card {
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;

  &__image {
    display: flex;
    width: 100%;
    aspect-ratio: 1 / 1;
    margin-bottom: 28px;
    object-fit: contain;
    object-position: center;
  }

  &__body {
    width: 100%;
  }

  &__price {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    font-weight: 700;
    font-size: 17px;
  }

  &__old-price,
  &__vendor-code,
  &__supplier {
    font-weight: 400;
    font-size: 13px;
    color: $color-gray;
  }

  &__old-price {
    margin-left: 6px;
    text-decoration-line: line-through;
  }

  &__row {
    display: flex;
    align-items: center;
  }

  &__row:not(:last-child) {
    margin-bottom: 8px;
  }

  &__rating {
    margin-left: 12px;
  }

  &__name {
    line-height: 1.44;
    hyphens: auto;
  }

  &__badge {
    position: absolute;
    right: 0;
    top: 0;
    padding: 4px 6px;
    background-color: $color-violet;
    border-radius: 3px;
    font-weight: 700;
    font-size: 13px;
    color: $color-light;
  }
}
</style>
