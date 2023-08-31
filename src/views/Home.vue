<template>
  <v-container>
    <new-account />
    <tool-bar />
    <profile />
    <pagination />
    <photo />
  </v-container>
</template>

<script lang="ts" setup>
import newAccount from "@/components/new-account.vue";
import toolBar from "@/components/tool-bar.vue";
import profile from "@/components/profile.vue";
import pagination from "@/components/pagination.vue";
import photo from "@/components/photo.vue";
</script>
