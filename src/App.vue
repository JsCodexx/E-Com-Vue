<template>
  <the-header></the-header>
  <loader-card v-if="isOnLoading" class="wrapper"></loader-card>
  <router-view :key="$route.fullPath"> </router-view>

  <footer-card></footer-card>
  <loader-card v-if="isOnLoading"></loader-card>
</template>
<script>
import TheHeader from './components/layout/TheHeader.vue';
import FooterCard from './components/layout/FooterCard.vue';
import LoaderCard from './components/layout/LoaderCard.vue';
export default {
  components: {
    TheHeader,
    FooterCard,
    LoaderCard,
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
