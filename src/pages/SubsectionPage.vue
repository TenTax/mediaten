<template>
  <app-page>
    <template #header>
      <app-page-title>
        Заголовок страницы
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
  name: 'SubsectionPage',

  components: {
    AppPage,
    AppPageTitle,
  },
}
</script>
