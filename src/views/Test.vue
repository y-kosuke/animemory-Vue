<script setup lang="ts">
  import { useUsersStore } from "@/store/user";
  const usersStore = useUsersStore();
</script>

<template>
  <div>
    {{ usersStore.getUsers }}
  </div>
  <v-btn @click="usersStore.fetchUsers">ボタン</v-btn>
</template>