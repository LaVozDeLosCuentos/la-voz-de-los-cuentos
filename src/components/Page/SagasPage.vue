<template>
  <VContainer size="xl" class="stories-page">
    <VText class="stories-page__title" as="h1" variant="header">{{
      t('page.sagas.h1')
    }}</VText>
    <slot />
  </VContainer>
</template>

<script setup>
  import t from '../../translations'
  const props = defineProps({
    story: {
      type: Object,
      default: {}
    }
  })

  import { VText, VContainer } from '@overgaming/vicius'
</script>

<style>
  .stories-page {
    padding: var(--v-unit-8);
  }
  .stories-page__title {
    font-size: 24px;
    text-align: center;
  }
</style>
