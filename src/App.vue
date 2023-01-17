<template>
  <header-component></header-component>
  <loader-component v-if="isOnLoading" class="wrapper"></loader-component>
  <router-view :key="$route.fullPath"> </router-view>

  <footer-component></footer-component>
  <loader-component v-if="isOnLoading"></loader-component>
</template>
<script>
import HeaderComponent from './components/layout/HeaderComponent.vue';
import FooterComponent from './components/layout/FooterComponent.vue';
import LoaderComponent from './components/layout/LoaderComponent.vue';
export default {
  components: {
    HeaderComponent,
    FooterComponent,
    LoaderComponent,
  },
  computed: {
    isOnLoading() {
      return this.$store.state.loading;
    },
  },
};
</script>
<style>
.wrapper {
  margin-top: 4rem;
}
#app {
  background: #f2f2f2;
}
ul {
  list-style: none;
}
</style>
