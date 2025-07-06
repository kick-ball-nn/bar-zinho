<template>
  <v-app-bar color="red-darken-3">
    <template #prepend>
      <v-app-bar-nav-icon
        variant="text"
        @click.stop="$emit('toggleDrawer')"
      />
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
</template>

<script setup lang="ts">
defineEmits(['toggleDrawer'])
</script>
