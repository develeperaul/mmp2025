<template>
  <q-layout view="lHh Lpr lFf" class="bg">
    <q-page-container>
      <router-view class="env-t env-b" />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts"></script>
<style lang="scss" scoped>
.bg {
  @apply tw-bg-base;
}
</style>
