<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Bar Zinho',
  meta: [
    {
      name: 'description',
      content: 'イタリア酒場は現在20周年記念の新しいWebサイトを準備中です。猫とワインの情報を今後お届けします。',
    },
  ],
})
</script>
