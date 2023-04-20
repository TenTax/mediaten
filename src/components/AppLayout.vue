<template>
  <div class="app-layout">
    <app-container class="app-layout__container">
      <slot />
    </app-container>
    <the-footer />
  </div>
</template>

<script>
import AppContainer from '@/components/AppContainer'
import TheFooter from '@/components/TheFooter'

export default {
  name: 'AppLayout',

  components: {
    AppContainer,
    TheFooter,
  },
}
</script>

<style lang="scss">
.app-layout {
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;

  &__container {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }
}
</style>
