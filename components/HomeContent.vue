<script setup>
import adUnits from '@temp/adUnits.json'
</script>

<template>
  <div class="theme-default-content">
    <Content />
    <div v-if="adUnits.length" :id="`waldo-tag-${adUnits[0]}`" style="margin-bottom: 1em;"></div>
    <hr>
    <div v-if="adUnits.length > 1" :id="`waldo-tag-${adUnits[1]}`" style="margin-bottom: 1em;"></div>
  </div>
</template>
