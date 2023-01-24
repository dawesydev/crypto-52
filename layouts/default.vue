<script setup>

</script>

<template>
  <div class="bg-gradient-to-br from-sky-500 to-indigo-600">
    <nav class="grid place-items-center pt-16">
        <NuxtLink to="/" class="text-5xl tracking-wides font-display font-bold text-gray-100 uppercase">Crypto<span class="">52</span></NuxtLink>
    </nav>
    <main>
      <slot />
    </main>
    <TheFooter />
  </div>

</template>

<style>

</style>
