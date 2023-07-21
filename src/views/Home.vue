<template>
  <v-container>
    <login />
    <new-account />
    <tool-bar />
    <profile />
    <pagination />
    <photo />
    <router-link to="../views/Photolibrary.vue">移動</router-link>
    <router-view></router-view>
  </v-container>
</template>

<script lang="ts" setup>
import Login from "../components/login.vue";
import newAccount from "@/components/new-account.vue";
import toolBar from "@/components/tool-bar.vue";
import profile from "@/components/profile.vue";
import pagination from "@/components/pagination.vue";
import photo from "@/components/photo.vue";
</script>
