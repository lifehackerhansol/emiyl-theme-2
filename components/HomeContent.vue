<script setup>
import waldoUnits from '@temp/waldoUnits.json'
</script>

<template>
  <div class="theme-default-content">
    <Content />
    <div v-if="waldoUnits.length" :id="`waldo-tag-${waldoUnits[0]}`" style="margin-bottom: 1em;"></div>
    <hr>
    <div v-if="waldoUnits.length > 1" :id="`waldo-tag-${waldoUnits[1]}`" style="margin-bottom: 1em;"></div>
  </div>
</template>
