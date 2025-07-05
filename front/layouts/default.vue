<template>
  <VApp>
    <NuxtLoadingIndicator />
    <AppHeader />
    <VMain>
      <VContainer>
        <slot />
      </VContainer>
    </VMain>
    <AppFooter />
  </VApp>
</template>
