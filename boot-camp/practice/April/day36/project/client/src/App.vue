<template>
  <div>
    <header-layout />
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
