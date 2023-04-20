<template>
  <div class="app-carousel">
    <div ref="swiper" class="swiper">
      <div class="swiper-wrapper">
        <div
          v-for="(item, index) in items"
          :key="index"
          class="app-carousel__slide swiper-slide"
        >
          <slot :item="item" />
        </div>
      </div>
      <button
        ref="prev"
        type="button"
        class="app-carousel__prev"
      >
        <icon-arrow-left class="app-carousel__icon" />
      </button>
      <button
        ref="next"
        type="button"
        class="app-carousel__next"
      >
        <icon-arrow-right class="app-carousel__icon" />
      </button>
    </div>
  </div>
</template>

<script>
import Swiper, { Navigation } from 'swiper'
import IconArrowLeft from '@/components/IconArrowLeft'
import IconArrowRight from '@/components/IconArrowRight'
import 'swiper/css'

export default {
  name: 'AppCarousel',

  components: {
    IconArrowLeft,
    IconArrowRight,
  },

  props: {
    items: {
      type: Array,
      required: true,
    },
  },

  data () {
    return {
      swiper: null,
    }
  },

  mounted () {
    this.swiper = new Swiper(this.$refs.swiper, {
      modules: [Navigation],
      loop: false,
      slidesPerView: 4,
      spaceBetween: 40,
      navigation: {
        nextEl: this.$refs.next,
        prevEl: this.$refs.prev,
      },
    })
  },

  beforeDestroy () {
    this.swiper.destroy()
  },
}
</script>

<style lang="scss">
@import '@/styles/variables.scss';

.app-carousel {
  &__slide {
    user-select: none;
  }

  &__prev,
  &__next {
    position: absolute;
    top: 33%;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    background: $color-light;
    box-shadow: $box-shadow;
    border-radius: 22px;
    border: none;
    cursor: pointer;
    transform: translateY(-50%);
    transition: opacity 0.3s;
  }

  &__prev {
    left: 0;
  }

  &__next {
    right: 0;
  }

  &__prev.swiper-button-disabled,
  &__next.swiper-button-disabled {
    opacity: 0.5;
    cursor: default;
  }

  &__icon {
    width: 16px;
    height: 16px;
  }
}
</style>
