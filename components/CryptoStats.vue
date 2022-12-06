<script setup>
import {useFetch} from "nuxt/app";

const { data } = await useFetch('/api/global')
</script>

<template>
  <div class="flex w-full justify-center mt-36">
    <div class="grid grid-cols-3 border-t border-t-gray-300 pt-4 w-5/6">
      <div class="flex flex-col items-center border-r border-r-gray-300">
        <p class="text-4xl font-bold">{{ new Intl.NumberFormat().format(data[0].coins_count) }}</p>
        <p class="text-sm">Total Coins</p>
      </div>
      <div class="flex flex-col items-center border-r border-r-gray-300">
        <p class="text-4xl font-bold">{{ new Intl.NumberFormat().format(data[0].active_markets) }}</p>
        <p class="text-sm">Active Markets</p>
      </div>
      <div class="flex flex-col items-center">
        <p class="text-4xl font-bold">{{ new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', notation: 'compact' }).format(data[0].total_mcap) }}</p>
        <p class="text-sm">Market Cap (USD)</p>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>