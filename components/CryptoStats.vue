<script setup>
import {useFetch} from "nuxt/app";

const { data } = await useFetch('/api/global')
</script>

<template>
  <div class="flex w-full justify-center mt-4 md:mt-36">
    <div class="w-11/12 md:grid md:grid-cols-3 md:border-t md:border-t-gray-300 md:pt-4 md:w-5/6">
      <div class="flex flex-col items-center space-y-2 md:border-r md:border-r-gray-300">
        <p class="text-4xl font-bold">{{ new Intl.NumberFormat().format(data[0].coins_count) }}</p>
        <p class="text-sm">Total Coins</p>
      </div>
      <div class="flex flex-col items-center space-y-2 mt-4 md:border-r border-r-gray-300">
        <p class="text-4xl font-bold">{{ new Intl.NumberFormat().format(data[0].active_markets) }}</p>
        <p class="text-sm">Active Markets</p>
      </div>
      <div class="flex flex-col items-center mt-4">
        <p class="text-4xl font-bold">{{ new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', notation: 'compact' }).format(data[0].total_mcap) }}</p>
        <p class="text-sm">Market Cap (USD)</p>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
