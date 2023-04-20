<template>
  <app-page :loading="!loaded">
    <template #header>
      <app-heading>
        Заголовок страницы
      </app-heading>
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
  },

  computed: {
    ...mapGetters({
      loaded: 'subsectionPage/loaded',
      sections: 'subsectionPage/sections',
    }),
  },

  mounted () {
    this.fetchData(this.$route.params.subsection)
  },

  beforeDestroy () {
    this.resetState()
  },

  methods: {
    ...mapActions({
      fetchData: 'subsectionPage/fetchData',
      resetState: 'subsectionPage/resetState',
    }),
  },
}
</script>
