<template>
  <app-page>
    <template #header>
      <app-page-title>
        Поставщики
      </app-page-title>
    </template>

    <router-link to="/">
      На главную
    </router-link>
  </app-page>
</template>

<script>
import AppPage from '@/components/AppPage'
import AppPageTitle from '@/components/AppPageTitle'

export default {
  name: 'SuppliersPage',

  components: {
    AppPage,
    AppPageTitle,
  },
}
</script>
