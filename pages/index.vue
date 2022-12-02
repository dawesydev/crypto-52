<script setup>
import {useFetch} from "nuxt/app";

const { data } = await useFetch('/api/global')
// import CryptoStats from "../components/CryptoStats";

// const { data } = await useFetch('/api/tickers?limit=20')
// const { data } = await useFetch('/api/global')

// const { tickers } = await useFetch('/api/tickers?limit=1')

</script>

<template>
  <main class="h-screen text-gray-100">
    <div class="flex flex-col items-center place-content-between">
      <div class="flex flex-col items-center">
        <h1 class="title-reg text-3xl tracking-wide">Global Data Dashboard</h1>
      </div>

      <CryptoTable />
      <CryptoStats />
    </div>




<!--    <table>-->
<!--      <thead>-->
<!--        <tr>-->
<!--          <th>Name</th>-->
<!--          <th>Symbol</th>-->
<!--          <th>Price</th>-->
<!--          <th>Details</th>-->
<!--        </tr>-->
<!--      </thead>-->
<!--      <tr v-for="currency in data.data" :key="data.data.id">-->
<!--        <td>{{ currency.name }}</td>-->
<!--        <td>{{ currency.symbol }}</td>-->
<!--        <td>{{ currency.price_usd }}</td>-->
<!--        <td>-->
<!--          <NuxtLink :to="/currency/ + currency.id">{{ currency.id }}</NuxtLink>-->
<!--        </td>-->
<!--      </tr>-->
<!--    </table>-->
  </main>
</template>


