<script setup>
import Navbar from './components/global/Navbar.vue'
import Footer from './components/global/Footer.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <Navbar />
  <RouterView />
  <Footer />
</template>
