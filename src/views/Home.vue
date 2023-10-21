<template>
  <tool-bar />
  <v-container>
    <modal />
    <profile />
    <pagination />
    <photo />
  </v-container>
</template>

<script lang="ts" setup>
import toolBar from "@/components/tool-bar.vue";
import profile from "@/components/profile.vue";
import pagination from "@/components/pagination.vue";
import photo from "@/components/photo.vue";
import Modal from "@/components/modal.vue";
</script>
