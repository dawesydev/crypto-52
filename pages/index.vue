<script setup>
import {useFetch} from "nuxt/app";

const { data } = await useFetch('/api/global')

</script>

<template>
  <main class="min-h-fit text-gray-100">
    <div class="flex flex-col items-center place-content-between">
      <div class="flex flex-col items-center">
        <h1 class="font-display text-3xl tracking-wide">Global Data Dashboard</h1>
      </div>

      <CryptoTable />
      <CryptoStats />
    </div>
  </main>
</template>


