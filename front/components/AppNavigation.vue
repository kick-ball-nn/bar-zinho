<template>
  <v-navigation-drawer
    v-model="internalDrawer"
    color="red-darken-1"
    :location="$vuetify.display.mobile ? 'top' : undefined"
    temporary
    floating
    permanent
  >
    <v-list
      density="compact"
      nav
    >
      <template
        v-for="item in items"
        :key="item.value"
      >
        <v-list-item
          :prepend-icon="item.icon"
          :title="item.title"
          :value="item.value"
          :to="item.to"
          @click="internalDrawer = false"
        />
      </template>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import type { VList } from 'vuetify/components'

type VListItems = InstanceType<typeof VList>['$props']['items'] & { icon?: string }

const props = defineProps<{
  modelValue: boolean
}>()

const emit = defineEmits(['update:modelValue'])
const internalDrawer = computed({
  get: () => props.modelValue,
  set: value => emit('update:modelValue', value),
})

const items: VListItems = [
  {
    title: 'HOME',
    value: 'home',
    to: '/',
    icon: 'mdi-home',
  },
  {
    title: 'ABOUT',
    value: 'about',
    to: '/menu',
    icon: 'mdi-information',
  },
  {
    title: 'MENU',
    value: 'menu',
    to: 'menu',
    icon: 'mdi-silverware-fork-knife',
  },
  {
    title: 'GALLERY',
    value: 'gallery',
    to: 'gallery',
    icon: 'mdi-image-multiple',
  },
  {
    title: 'CONTACT',
    value: 'contact',
    to: 'contact',
    icon: 'mdi-phone',
  },
]
</script>
