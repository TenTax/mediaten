<template>
  <app-page>
    <template #title>
      <app-heading>
        Продукты
      </app-heading>
    </template>

    <router-link to="/">
      На главную
    </router-link>
  </app-page>
</template>

<script>
import AppPage from '@/components/AppPage'
import AppHeading from '@/components/AppHeading'

export default {
  name: 'ProductsPage',

  components: {
    AppPage,
    AppHeading,
  },
}
</script>
