<script setup lang="ts">
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

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-delete-outline</v-icon>
      </v-btn>

      <template v-if="$vuetify.display.smAndUp">
        <v-divider class="mx-3 align-self-center" length="24" thickness="2" vertical></v-divider>
      </template>

      <v-btn icon>
        <v-icon>mdi-export</v-icon>
      </v-btn>
    </v-toolbar>
  </div>
</template>