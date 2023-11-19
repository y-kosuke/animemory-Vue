<script lang="ts" setup>
import toolBar from "@/components/tool-bar.vue";
import { ref } from 'vue';
import modal from "@/components/modal.vue";

const items = ref([
              { src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg' },
              { src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg' },
              { src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg' },
              { src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg' },
              ]);
</script>

<template>
  <modal />
  <v-container>
    <v-carousel hide-delimiters show-arrows="hover">
      <v-carousel-item
        v-for="(item,i) in items"
        :key="i"
        :src="item.src"
        cover
        reverse-transition="fade-transition"
        transition="fade-transition">
      </v-carousel-item>
    </v-carousel>
  </v-container>
  <v-container>
    <v-sheet>
      <v-slide-group multiple show-arrows>
        <v-slide-item v-for="n in 6">
          <v-card style="margin: 0 20px 0 0; width: 350px; height: 380px;">
            <v-img class="white--text algin-end" height="150px" src="'https://cdn.vuetifyjs.com/images/carousel/planet.jpg'"></v-img>
            <v-card-title>このアプリで出来ることとは！</v-card-title>
            <v-card-text class="text--primary">{{ n }}個目。<br>写真の保存が出来る。<br>消すのは勿体無いと思った写真を保存しよう！</v-card-text>
          </v-card>
        </v-slide-item>
      </v-slide-group>
    </v-sheet>
  </v-container>
  <v-container>
    <h3 style="text-align: center;">今すぐ使ってみよう！</h3>
    <v-row justify="center">
      <v-col cols="12" sm="6" md="4">
        <v-btn block rounded="xl" size="x-large" href="/login/register">新規会員登録</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>
