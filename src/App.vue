<template>
  <div id="app">
    <router-link to="/">Main page</router-link><br />
    <router-link to="/catalog/milk-products">Milk products</router-link><br />
    <router-link to="/products">Products page</router-link><br />
    <router-link to="/suppliers">Suppliers page</router-link><br />
    <router-link to="/123">Error page</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>
