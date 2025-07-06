<template>
  <v-row dense>
    <v-col
      v-for="(content, index) in contents"
      :key="index"
      cols="12"
    >
      <v-card
        :title="content.title"
        :subtitle="content.subtitle"
        :text="content.text"
        :href="content.href"
      />
    </v-col>
  </v-row>
</template>

<script setup lang='ts'>
import type { VCard } from 'vuetify/components'

type VCardProps = InstanceType<typeof VCard>['$props']

const contents: VCardProps[] = [
  {
    title: 'Bar Zinho 20周年記念',
    subtitle: 'Webサイトを構築中・・・',
    text: '',
    href: 'contents/1',
  },
  {
    title: '運命の2025年7月5日',
    subtitle: 'みなの運命は如何に・・・',
    text: '',
    href: 'contents/2',
  },
  {
    title: 'コマンドー仲間募集中',
    subtitle: 'あの感動を再び・・・',
    text: '',
    href: 'contents/3',
  },
]
</script>
