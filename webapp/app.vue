<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtWelcome />
    <div>{{ count }} {{ double }}</div>
  </div>
</template>

<script setup lang="ts">
/* ref() and computed() are auto-imported */
const count = ref(1)
const double = computed(() => count.value * 2)
</script>
