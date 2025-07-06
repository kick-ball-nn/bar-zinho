<template>
  <VApp>
    <NuxtLoadingIndicator />
    <AppHeader @toggle-drawer="handleNavigationState" />
    <AppNavigation v-model="drawer" />
    <VMain>
      <VContainer>
        <slot />
      </VContainer>
    </VMain>
    <AppFooter />
  </VApp>
</template>

<script setup lang="ts">
const handleNavigationState = () => {
  drawer.value = !drawer.value
}

const drawer = ref(false)
</script>
