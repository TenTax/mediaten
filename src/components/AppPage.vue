<template>
  <div
    class="app-page"
    :class="{ 'app-page_loading': loading }"
  >
    <app-spinner v-if="loading">
      Загрузка данных...
    </app-spinner>
    <template v-else>
      <div
        v-if="$slots.breadcrumbs"
        class="app-page__breadcrumbs"
      >
        <slot name="breadcrumbs" />
      </div>
      <div class="app-page__header">
        <slot name="title" />
        <div
          v-if="$slots.counting"
          class="app-page__counting"
        >
          <slot name="counting" />
        </div>
      </div>
      <div class="app-page__body">
        <slot />
      </div>
    </template>
  </div>
</template>

<script>
import AppSpinner from '@/components/AppSpinner'

export default {
  name: 'AppPage',

  components: {
    AppSpinner,
  },

  props: {
    loading: Boolean,
  },
}
</script>

<style lang="scss">
@import '@/styles/variables.scss';

.app-page {
  padding-top: 73px;
  padding-bottom: 40px;

  &_loading {
    padding-top: 0;
    padding-bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
  }

  &__breadcrumbs {
    margin-bottom: 12px;
  }

  &__header {
    display: flex;
    align-items: baseline;
    margin-bottom: 16px;
  }

  &__counting {
    margin-left: 26px;;
    font-size: 13px;
    color: $color-gray;
  }
}
</style>
