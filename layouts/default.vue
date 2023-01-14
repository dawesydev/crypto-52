<template>
  <div class="bg-gradient-to-br from-sky-500 to-indigo-500">
    <nav class="flex flex-col items-center pt-20">
      <NuxtLink to="/" class="title-bold text-5xl tracking-wides font-bold text-gray-100 uppercase">Crypto<span class="">52</span></NuxtLink>
    </nav>
    <main>
      <slot />
    </main>
  </div>

</template>

<style>
@import url("https://api.fontshare.com/v2/css?f[]=archivo@700,800,300,100,400&f[]=clash-display@400,500,700,600&display=swap");

* {
  font-family: 'Space Mono', monospace;
}

.title-bold {
  font-family: 'Clash Display', sans-serif;
  font-weight: 600;
}

.title-reg {
  font-family: 'Clash Display', sans-serif;
  font-weight: 500;
}

</style>
