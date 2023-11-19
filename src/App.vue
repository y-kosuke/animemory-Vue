<script lang="ts" setup>
  import toolBar from './components/tool-bar.vue';
</script>

<template>
  <v-app>
    <tool-bar />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>
