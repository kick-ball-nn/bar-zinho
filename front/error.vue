<template>
  <v-row justify="center">
    <v-col cols="12" md="8" lg="6">
      <v-card flat color="transparent">
        <v-card-text>
          <div class="text-h3 font-weight-bold mb-4" :color="primaryColor">
            Coming Soon!
          </div>
          <div class="text-h5 mb-6">
            新しいWebサイトを準備中です。
          </div>

          <v-icon size="100" :color="primaryColor" class="mb-4">
            mdi-cat
          </v-icon>
          <v-icon size="100" :color="accentColor" class="mb-4 ml-6">
            mdi-wine-glass
          </v-icon>

          <p class="text-body-1 mb-6">
            いつもご愛顧ありがとうございます。<br>
            おかげさまで、イタリア酒場 Bar Zinho は今年で<strong>20周年</strong>を迎えました！<br>
            これを記念し、皆様により快適な情報をお届けするため、現在新しいWebサイトを心を込めて作成中です。
          </p>
          <p class="text-body-1 mb-6">
            <span :style="{ color: primaryColor, fontWeight: 'bold' }">猫</span>も<span :style="{ color: accentColor, fontWeight: 'bold' }">ワイン</span>も、そして美味しい料理も、新しいサイトでご紹介しますので、どうぞお楽しみに！
          </p>

          <v-progress-linear
            :color="primaryColor"
            indeterminate
            rounded
            height="6"
            class="mb-6"
          ></v-progress-linear>

          <p class="text-body-2 text-grey-darken-1">
            一時的にご迷惑をおかけいたしますが、何卒ご理解いただけますようお願い申し上げます。<br>
            最新情報はInstagramをご確認ください。
          </p>

          <v-btn
            :color="primaryColor"
            href="https://www.instagram.com/bar.zinho/"
            target="_blank"
            rel="noopener noreferrer"
            large
            class="mt-4"
          >
            <v-icon left>mdi-instagram</v-icon>
            Instagram
          </v-btn>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps({
  error: Object as () => NuxtError
})

const handleError = () => clearError({ redirect: '/' })

const primaryColor = 'red-darken-3' // 赤い看板をイメージした色 (Deep Red)
const accentColor = '#FFB300'  // ワインや温かみをイメージした色 (Amber)
</script>

<style scoped>
.v-application {
  background-color: var(--v-theme-primary-lighten5);
}
</style>
