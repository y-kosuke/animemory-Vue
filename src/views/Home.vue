<template>
  <v-container>
    <login />
    <new-account />
    <tool-bar />
    <profile />
    <pagination />
    <camera />
  </v-container>

</template>

<script lang="ts" setup>
import Login from "../components/login.vue";
import newAccount from "@/components/new-account.vue";
import toolBar from "@/components/tool-bar.vue";
import profile from "@/components/profile.vue";
import pagination from "@/components/pagination.vue";
import camera from "@/components/camera.vue";
</script>
