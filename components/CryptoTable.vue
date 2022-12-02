<script setup>
import { useFetch } from 'nuxt/app'
import { ref } from 'vue'

const { data } = await useFetch('/api/tickers?limit=10')

const isPositive = ref(true)


</script>

<template>
  <div class="container flex justify-center w-4/6 md:w-2/3 mt-4 mb-28">
    <div class="text-gray-300 text-xs">Last updated: {{ new Date(data.info.time * 1000).toLocaleString('en-GB', { timeZone: 'GMT' }) }} GMT</div>
  </div>
  <div class="table text-xs sm:text-lg w-11/12 md:w-2/3 bg-white p-5 rounded-xl bg-opacity-60 backdrop-filter backdrop-blur-lg text-gray-700">
    <div class="table-header-group">
      <div class="table-row font-bold">
        <div class="table-cell text-left">Rank</div>
        <div class="table-cell text-left">Symbol</div>
        <div class="table-cell text-left">Name</div>
        <div class="table-cell text-left">Price</div>
        <div class="table-cell text-center">24H Change</div>
        <div class="table-cell text-center">Details</div>
      </div>
    </div>
    <div class="table-row-group">
      <div class="table-row" v-for="currency in data.data" :key="data.data.id">
        <div class="table-cell">#{{ currency.rank }}</div>
        <div class="table-cell">{{ currency.symbol }}</div>
        <div class="table-cell">{{ currency.name }}</div>
        <div class="table-cell">{{ new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'}).format(currency.price_usd) }}</div>
        <div :class="currency.percent_change_24h > 0 ? 'text-emerald-500' : 'text-rose-500'" class="table-cell text-center">{{ currency.percent_change_24h }}%</div>
        <div class="table-cell text-center">
          <NuxtLink :to="/currency/ + currency.id"><Icon name="ic:outline-info" /></NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>