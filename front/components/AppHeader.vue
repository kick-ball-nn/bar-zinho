<template>
  <v-app-bar color="red-darken-3">
    <template v-slot:prepend>
      <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    </template>

    <v-app-bar-title>Bar Zinho</v-app-bar-title>

    <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>mdi-liquor</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>mdi-cat</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>mdi-pasta</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>mdi-dots-vertical</v-icon>
    </v-btn>
  </v-app-bar>

  <v-navigation-drawer
    color="red-darken-1"
    v-model="drawer"
    :location="$vuetify.display.mobile ? 'bottom' : undefined"
    temporary
    floating
    permanent
  >
    <v-list
      density="compact"
      nav
    >
      <template v-for="item in items" :key="item.value">
        <v-list-item :prepend-icon="item.icon" :title="item.title" :value="item.value" :to="item.to"></v-list-item>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import type { VList } from 'vuetify/components';

type VListItems = InstanceType<typeof VList>["$props"]["items"] & { icon?: string };

const items: VListItems = [
  {
    title: 'HOME',
    value: 'home',
    to: '/',
    icon: "mdi-home"
  },
  {
    title: 'ABOUT',
    value: 'about',
    to: `/menu`,
    icon: "mdi-information"
  },
  {
    title: 'MENU',
    value: 'menu',
    to: 'menu',
    icon: "mdi-silverware-fork-knife"
  },
  {
    title: 'GALLERY',
    value: 'gallery',
    to: 'gallery',
    icon: "mdi-image-multiple"
  },
  {
    title: 'CONTACT',
    value: 'contact',
    to: 'contact',
    icon: "mdi-phone"
  },
]

const drawer = ref(true)
const group = ref(null)

watch(group, () => {
  drawer.value = false
})
</script>
