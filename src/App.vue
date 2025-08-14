<template>
  <router-view />
</template>

<script setup lang="ts">
onMounted(async () => {
  Promise.allSettled([mainStore().getRegions(), mainStore().getActions()])
})
</script>
