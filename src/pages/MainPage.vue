<template>
  <app-page>
    <template #header>
      <app-page-title>
        Главная страница
      </app-page-title>
    </template>

    <router-link to="/catalog/milk-products">
      Молочные продукты
    </router-link>
  </app-page>
</template>

<script>
import AppPage from '@/components/AppPage'
import AppPageTitle from '@/components/AppPageTitle'

export default {
  name: 'MainPage',

  components: {
    AppPage,
    AppPageTitle,
  },
}
</script>
