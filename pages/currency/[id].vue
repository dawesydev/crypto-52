<script setup>
import {useFetch, useRoute} from "nuxt/app";

const route = useRoute()
const { data } = await useFetch('/api/ticker?id=' + route.params.id)
const coin = data.value[0]

</script>

<template>
  <div class="flex flex-col h-screen mt-8 text-gray-50">
    <h2 class="text-2xl text-center">{{ coin.name }} - {{ coin.symbol }}</h2>
    <div class="flex flex-col text-center items-center">
      <div class="my-4 pb-8 space-y-4 border-b border-gray-50 w-5/6">
        <span class="text-5xl">{{ coin.rank }}</span>
        <p class="text-xs">Rank</p>
      </div>
      <div class="my-4 pb-8 space-y-4 border-b border-gray-50 w-5/6">
        <div class="text-5xl">{{ new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'}).format(coin.price_usd) }}</div>
        <p class="text-xs">Price - USD</p>
      </div>
      <div class="my-4 pb-8 space-y-4 border-b border-gray-50 w-5/6">
        <div class="text-5xl">{{ new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', notation: 'compact' }).format(coin.market_cap_usd) }}</div>
        <p class="text-xs">Market Cap - USD</p>
      </div>
    </div>

  </div>
</template>
