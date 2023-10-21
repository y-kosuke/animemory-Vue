<script setup lang="ts">
import { ref } from "vue";

const search = ref("");

const items = ref([{ title: '写真一覧' }, { title: 'お気に入り写真'}, { title: '聖地巡礼アルバム'}]);

</script>

<template>
  <div>
    <v-toolbar color="blue" dark prominent>

      <v-toolbar-title>AniMemory</v-toolbar-title>

      <v-spacer></v-spacer>


      <v-text-field
        v-model="search"
        clearable
        hide-details
        label="タグ検索"
        prepend-inner-icon="mdi-magnify"
        single-line>
      </v-text-field>

      <div class="d-flex justify-space-around">
        <v-menu>
          <template v-slot:activator="{ props }">
            <v-btn v-bind="props">MENU</v-btn>
          </template>
          <v-list>
            <v-list-item v-for="(item, index) in items" :key="index" :value="index">
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-delete-outline</v-icon>
      </v-btn>

      <template v-if="$vuetify.display.smAndUp">
        <v-divider class="mx-3 align-self-center" length="24" thickness="2" vertical></v-divider>
      </template>

      <v-btn href="/Login" append-icon="mdi-account">ログイン</v-btn>
    </v-toolbar>
  </div>
</template>