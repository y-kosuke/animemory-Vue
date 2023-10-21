<script setup lang="ts">
  import toolBar from '@/components/tool-bar.vue';
</script>

<template>
  <toolBar />
  <v-container>
    <v-row class="pa-15">
      <v-sheet :height="500" :width="1000" color="info">

      </v-sheet>
    </v-row>
  </v-container>
  <!-- <v-container>
    <v-row>
      <v-col v-for="k in 1" :key="k" cols="4">
        <v-icon size="150px" style="top: 70px; right: 70px;">mdi-account</v-icon>
      </v-col>
      <v-col>
        <v-btn icon="mdi-camera" style="top: 180px; right: 360px;"></v-btn>
      </v-col>
    </v-row>
  </v-container>

  <v-container>
    <v-row justify="center">
      <v-col cols="8" md="9">
        <h1 class="ma-2 pa-2">田中太郎</h1>
      </v-col>
    </v-row>
  </v-container> -->
</template>