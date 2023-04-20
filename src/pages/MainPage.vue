<template>
  <app-page>
    <template #header>
      <app-heading>
        Главная страница
      </app-heading>
    </template>

    <router-link to="/catalog/milk-products">
      Молочные продукты
    </router-link>
  </app-page>
</template>

<script>
import AppPage from '@/components/AppPage'
import AppHeading from '@/components/AppHeading'

export default {
  name: 'MainPage',

  components: {
    AppPage,
    AppHeading,
  },
}
</script>
