<script setup>
import {useFetch} from "nuxt/app";

const { data } = await useFetch('/api/tickers?limit=10')
</script>

<template>
  <div class="container flex justify-center w-4/6 md:w-2/3 mt-4 mb-24">
    <div class="text-gray-300 text-xs">Last updated: {{ new Date(data.info.time * 1000).toLocaleString('en-GB', { timeZone: 'GMT' }) }} GMT</div>
  </div>
  <div class="table w-5/6 md:w-2/3 bg-white p-5 rounded-xl bg-opacity-60 backdrop-filter backdrop-blur-lg text-gray-700">
    <div class="table-header-group">
      <div class="table-row font-bold">
        <div class="table-cell text-left">Rank</div>
        <div class="table-cell text-left">Symbol</div>
        <div class="table-cell text-left">Name</div>
        <div class="table-cell text-left">Price</div>
        <div class="table-cell text-center">Details</div>
      </div>
    </div>
    <div class="table-row-group">
      <div class="table-row" v-for="currency in data.data" :key="data.data.id">
        <div class="table-cell">#{{ currency.rank }}</div>
        <div class="table-cell">{{ currency.symbol }}</div>
        <div class="table-cell">{{ currency.name }}</div>
        <div class="table-cell">{{ new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'}).format(currency.price_usd) }}</div>
        <div class="table-cell text-center">
          <NuxtLink :to="/currency/ + currency.id"><Icon name="ic:outline-info" /></NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>