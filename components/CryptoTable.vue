<script setup>
import { useFetch } from 'nuxt/app'

const { data } = await useFetch('/api/tickers?limit=10')

</script>

<template>
  <div class="container flex justify-center w-4/6 md:w-2/3 mt-4 mb-12 md:mb-28">
    <div class="text-gray-300 text-xs">Last updated: {{ new Date(data.info.time * 1000).toLocaleString('en-GB', { timeZone: 'GMT' }) }} GMT</div>
  </div>
  <div class="table text-xs sm:text-lg w-11/12 md:w-2/3 text-gray-100">
<!--  <div class="table text-xs sm:text-lg w-11/12 md:w-2/3 bg-white p-5 rounded-xl bg-opacity-50 backdrop-filter backdrop-blur-lg text-gray-700">-->
    <div class="table-header-group">
      <div class="table-row font-bold">
        <div class="table-cell text-left h-12">Rank</div>
<!--        <div class="table-cell text-left h-12">Symbol</div>-->
        <div class="table-cell text-left h-12">Name</div>
        <div class="table-cell text-left h-12">Price</div>
        <div class="table-cell text-center h-12">24H Change</div>
        <div class="table-cell text-center h-12">Details</div>
      </div>
    </div>
    <div class="table-row-group">
      <div class="table-row h-10" v-for="currency in data.data" :key="data.data.id">
        <div class="table-cell">#{{ currency.rank }}</div>
<!--        <div class="table-cell">{{ currency.symbol }}</div>-->
        <div class="table-cell">{{ currency.name }}</div>
        <div class="table-cell">{{ new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'}).format(currency.price_usd) }}</div>
        <div :class="currency.percent_change_24h > 0 ? 'text-emerald-300' : 'text-rose-300'" class="table-cell text-center">{{ currency.percent_change_24h }}%</div>
        <div class="table-cell text-center">
          <NuxtLink :to="/currency/ + currency.id" class="px-2 py-1 bg-gray-100 bg-opacity-25 rounded text-gray-50 sm:text-sm hover:bg-opacity-50">View</NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
