<template>
  <header class="bg-gray-100">
    <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8" >
      <slot name="header"></slot>
    </div>
  </header>
  <main>
    <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
     <slot> </slot>
    </div>
  </main>
</template>

<style>
</style>

<script setup>
const props = defineProps({
  title: String
});
</script>