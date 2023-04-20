<template>
  <app-page :loading="loading">
    <template #breadcrumbs>
      <app-breadcrumbs :items="breadcrumbs" />
    </template>
    <template #title>
      <app-heading>
        {{ title }}
      </app-heading>
    </template>
    <template #counting>
      {{ totalSuppliers }} поставщиков ∙ {{ totalProducts }} товаров
    </template>
    <app-section
      v-for="section in sections"
      :key="section.id"
    >
      <template #header>
        <app-heading tag="h3">
          {{ section.title }}
        </app-heading>
        <arrow-link :to="`/${section.page}?category=${section.category}`">
          Все
        </arrow-link>
      </template>
      <app-grid-items
        v-if="section.page === 'suppliers'"
        :items="section.items"
      >
        <template #default="{ item }">
          <supplier-card
            :name="item.name"
            :image-url="item.image_url"
            :rating="item.rating"
          />
        </template>
      </app-grid-items>
      <app-carousel
        v-else-if="section.page === 'products'"
        :items="section.items"
      >
        <template #default="{ item }">
          <product-card
            :image-url="item.image_url"
            :name="item.name"
            :price="item.price"
            :vendor-code="item.vendor_code"
            :rating="item.rating"
            :supplier="item.supplier"
            :discount="item.discount"
          />
        </template>
      </app-carousel>
    </app-section>
  </app-page>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import AppPage from '@/components/AppPage'
import AppHeading from '@/components/AppHeading'
import AppSection from '@/components/AppSection'
import ArrowLink from '@/components/ArrowLink'
import AppGridItems from '@/components/AppGridItems'
import SupplierCard from '@/components/SupplierCard'
import AppCarousel from '@/components/AppCarousel'
import ProductCard from '@/components/ProductCard'
import AppBreadcrumbs from '@/components/AppBreadcrumbs'

export default {
  name: 'SubsectionPage',

  components: {
    AppPage,
    AppHeading,
    AppSection,
    ArrowLink,
    AppGridItems,
    SupplierCard,
    AppCarousel,
    ProductCard,
    AppBreadcrumbs,
  },

  computed: {
    ...mapGetters({
      loading: 'subsectionPage/loading',
      title: 'subsectionPage/title',
      sections: 'subsectionPage/sections',
      totalProducts: 'subsectionPage/totalProducts',
      totalSuppliers: 'subsectionPage/totalSuppliers',
    }),

    breadcrumbs () {
      return [
        { label: 'Главная', link: '/' },
        { label: this.title },
      ]
    },
  },

  mounted () {
    this.fetchData(this.$route.params.subsection)
  },

  methods: {
    ...mapActions({
      fetchData: 'subsectionPage/fetchData',
    }),
  },
}
</script>
