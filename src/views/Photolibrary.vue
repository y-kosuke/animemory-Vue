<script setup lang="ts">
  import toolBar from '@/components/tool-bar.vue';
  import photo from '@/components/photo.vue';
  import pagination from '@/components/pagination.vue';
</script>

<template>
  <toolBar />
  <v-container>
    <photo />
    <pagination />
  </v-container>
</template>