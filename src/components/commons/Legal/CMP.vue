<template>
  <div v-if="showCookieConsent" class="cookie-consent">
    <VText>
      {{ t('cmp.text') }}
    </VText>
    <div class="cookie-consent-buttons">
      <VButton
        color="primary"
        size="xs"
        @click="acceptCookies"
        class="cookie-consent-button"
        >{{ t('cmp.accept') }}</VButton
      >
      <VButton
        variant="ghost"
        size="xs"
        @click="rejectCookies"
        class="cookie-consent-reject-button"
        >{{ t('cmp.decline') }}</VButton
      >
    </div>
  </div>
</template>

<script setup>
  import t from '../../../translations'
  const gaID = import.meta.env.PUBLIC_GOOGLE_ANALYTICS_ID

  import { ref, onMounted } from 'vue'
  import { VButton, VText } from '@overgaming/vicius'
  const showCookieConsent = ref(false)

  const acceptCookies = () => {
    window.dataLayer = window.dataLayer || []
    function gtag() {
      window.dataLayer.push(arguments)
    }
    gtag('js', new Date())
    gtag('config', gaID)
    gtag('consent', 'update', {
      analytics_storage: 'granted'
    })
    localStorage.setItem('cookieConsent', 'granted')
    showCookieConsent.value = false
  }

  const rejectCookies = () => {
    localStorage.setItem('cookieConsent', 'rejected')
    showCookieConsent.value = false
  }

  onMounted(() => {
    if (!localStorage.getItem('cookieConsent')) {
      showCookieConsent.value = true
    }
  })
</script>

<style scoped>
  .cookie-consent {
    z-index: 1000;
    position: fixed;
    display: grid;
    justify-content: center;
    bottom: 0;
    left: var(--v-unit-2);
    right: var(--v-unit-2);
    background-color: var(--v-color-surface);
    padding: var(--v-unit-2);
    padding-bottom: var(--v-unit-8);
    text-align: center;
    border-radius: var(--v-unit-1);
    opacity: 0.9;
  }

  .cookie-consent-buttons {
    margin-top: var(--v-unit-4);
    display: grid;
    grid-gap: var(--v-unit-1);
    grid-auto-flow: row;
    justify-content: center;
    align-items: center;
  }
  .cookie-consent-button {
    color: white;
  }
  @media print {
    .cookie-consent {
      display: none;
    }
  }
</style>
