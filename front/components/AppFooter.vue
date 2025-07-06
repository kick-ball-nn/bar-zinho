<template>
  <v-footer
    class="text-center d-flex flex-column ga-2 py-4"
    color="red-darken-3"
  >
    <div class="d-flex ga-3">
      <v-btn
        v-for="icon in icons"
        :key="icon.id"
        :icon="icon.id"
        density="comfortable"
        variant="text"
        :href="icon.href"
        target="_blank"
      />
    </div>

    <v-divider
      class="my-2"
      thickness="2"
      width="50"
    />

    <div class="text-caption font-weight-regular opacity-60">
      <!-- Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. -->
    </div>

    <v-divider />

    <div>
      <strong>Bar Zinho</strong>
    </div>
  </v-footer>
</template>

<script setup lang="ts">
interface IICon {
  id: string
  href?: string
}

const icons: IICon[] = [
  { id: 'mdi-facebook' },
  { id: 'mdi-twitter' },
  { id: 'mdi-linkedin' },
  { id: 'mdi-instagram', href: 'https://www.instagram.com/bar.zinho/' },
]
</script>
