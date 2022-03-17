<template>
  <div>
    <header-layout v-if="$route.path !== '/' && $route.path !== '/login'" />
    <router-view />
    <footer-layout />
  </div>
</template>

<script>
import HeaderLayout from '@/components/layouts/HeaderLayout'
import FooterLayout from '@/components/layouts/FooterLayout'
export default {
  components: { 'header-layout': HeaderLayout, 'footer-layout': FooterLayout }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
