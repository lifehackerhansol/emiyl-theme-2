<script setup>
import ParentLayout from '@vuepress/theme-default/layouts/Layout.vue'

import { computed } from 'vue'
import { usePageFrontmatter, useSiteLocaleData } from '@vuepress/client'
import MarkdownIt from 'markdown-it'
import adUnits from '@temp/adUnits.json'

const siteLocaleData = useSiteLocaleData()
const frontmatter = usePageFrontmatter()
const pageTitle = computed(() => frontmatter.value.title)
const discordNoticeText = computed(() => {
    if (!siteLocaleData.value.discordNoticeText) return null
    const ret = new MarkdownIt().render(siteLocaleData.value.discordNoticeText)
    return ret
})
</script>

<template>
  <ParentLayout>
    <template #page-content-top>
        <h1>{{ pageTitle }}</h1>
        <div v-html="discordNoticeText" class="custom-container tip"/>
        <div v-if="adUnits.length" :id="`waldo-tag-${adUnits[0]}`" style="margin-bottom: 1em;"></div>
    </template>
    <template #page-content-bottom>
        <div v-if="adUnits.length > 1" :id="`waldo-tag-${adUnits[1]}`" style="margin-bottom: 1em;"></div>
    </template>
  </ParentLayout>
</template>