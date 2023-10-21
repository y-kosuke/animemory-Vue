<script setup lang="ts">
  import { ref } from 'vue';

  const first = ref(null);
  const second = ref(null);
  const third = ref(null);
  const fourth = ref(null);
  const dialog = ref(false);
  const required = (v:string): string | boolean => {
  return !!v || '必ず入力してください'
}
</script>

<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent width="1024">
      <template v-slot:activator="{ props }">
        <v-btn color="primary" v-bind="props">追加</v-btn>
      </template>
      
      <v-card>
        <v-card-title>
          <span class="text-h5" text-align="center">写真の追加・変更</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-file-input label="追加したい写真を選んでください" variant="filled" prepend-icon="mdi-camera"></v-file-input>
              </v-col>
              <v-col cols="12">
                <v-text-field v-model="first" color="primary" label="写真タイトル(必須)" placeholder="写真のタイトルを記入してください" 
                  variant="underlined" :rules="[required]">
                </v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field v-model="second" color="primary" label="写真を撮った場所" placeholder="例)京都府京都市北区金閣寺町1" variant="underlined"></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field v-model="third" color="primary" label="タグ名(任意)" placeholder="例)アニメなどのタイトル等" variant="underlined"></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field v-model="fourth" color="primary" label="どういった場面の写真ですか？(任意)" placeholder="例)五等分の花嫁の修学旅行" variant="underlined"></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue-darken-1" variant="text" @click="dialog = false">キャンセル</v-btn>
          <v-btn color="blue-darken-1" variant="text" @click="dialog = false">追加</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>