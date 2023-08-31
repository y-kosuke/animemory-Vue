<script setup lang="ts">
</script>

<template>
  <v-container>
    <v-row justify="space-around">
      <v-col v-for="n in 12" :key="n" class="d-flex child-flex" cols="3">
        <div class="text-subtitle-2">テスト</div>
        <v-img
        :src="`https://picsum.photos/500/300?image=${n * 10 + 5}`"
        :lazy-src="`https://picsum.photos/10/6?image=${n * 10 + 5}`"
        :width="800"
        aspect-ratio="16/9"
        cover class="pa-2 ma-2">
        </v-img>
      </v-col>
    </v-row>
  </v-container>
</template>