<template>
  <div class="app-layout">
    <app-container>
      <slot />
    </app-container>
    <the-footer class="app-layout__footer" />
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
  padding-top: 73px;
  width: 100%;
  min-height: 100vh;

  &__footer {
    margin-top: auto;
  }
}
</style>
