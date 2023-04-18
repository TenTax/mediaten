<template>
  <app-layout id="app">
    <router-view/>
  </app-layout>
</template>

<script>
import AppLayout from '@/components/AppLayout'

export default {
  name: 'App',

  components: {
    AppLayout,
  },
}
</script>
