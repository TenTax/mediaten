<template>
  <app-page>
    <template #title>
      <app-heading>
        Поставщики
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
  name: 'SuppliersPage',

  components: {
    AppPage,
    AppHeading,
  },
}
</script>
