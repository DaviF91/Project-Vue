<script setup>
import { RouterView } from 'vue-router'
import TheHeader from './components/TheHeader.vue'
</script>

<template>
  <div>
    <header>
      <TheHeader />
    </header>
  </div>
  <RouterView />
</template>
