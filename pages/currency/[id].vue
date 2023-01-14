<script setup>
import {useFetch, useRoute} from "nuxt/app";

const route = useRoute()
const { data } = await useFetch('/api/ticker?id=' + route.params.id)
const coin = data.value[0]

</script>

<template>
  <div class="flex flex-col h-screen mt-8 text-gray-50">
    <h2 class="text-2xl text-center mb-8">{{ coin.name }} - {{ coin.symbol }}</h2>
    <div class="flex flex-col text-center items-center drop-shadow">
      <div class="py-8 space-y-4 border border-gray-50 w-5/6 md:w-2/3 rounded-t-2xl bg-gray-100 bg-opacity-25">
        <span class="text-5xl">{{ coin.rank }}</span>
        <p class="text-xs">Rank</p>
      </div>
      <div class="py-8 space-y-4 border-x border-b border-gray-50 w-5/6 md:w-2/3 bg-gray-100 bg-opacity-25">
        <div class="text-5xl">{{ new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'}).format(coin.price_usd) }}</div>
        <p class="text-xs">Price - USD</p>
      </div>
      <div class="py-8 space-y-4 border-x border-gray-50 w-5/6 md:w-2/3 bg-gray-100 bg-opacity-25">
        <div :class="coin.percent_change_1h > 0 ? 'text-emerald-300' : 'text-rose-700'" class="text-5xl">{{ coin.percent_change_1h }}%</div>
        <p class="text-xs">1H Change</p>
      </div>
      <div class="py-8 space-y-4 border border-gray-50 w-5/6 md:w-2/3 rounded-b-2xl bg-gray-100 bg-opacity-25">
        <div class="text-5xl">{{ new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', notation: 'compact' }).format(coin.market_cap_usd) }}</div>
        <p class="text-xs">Market Cap - USD</p>
      </div>
    </div>
    <div class="flex justify-center space-x-6 mt-8">
      <NuxtLink to="/" class="text-amber-700 py-1 px-2 bg-amber-200 bg-opacity-90 rounded drop-shadow">Trade {{ coin.name }}</NuxtLink>
      <NuxtLink to="/" class="text-gray-700 py-1 px-2 bg-gray-200 bg-opacity-90 rounded drop-shadow">View All</NuxtLink>
    </div>
  </div>
</template>
