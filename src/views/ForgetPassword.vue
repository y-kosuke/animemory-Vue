<script setup lang="ts">
  import { ref } from 'vue';

  const email = ref("");
  const loading = ref(false);
  
  const required = (v:string): string | boolean => {
    return !!v || '必ず入力してください'
  }
</script>

<template>
  <div>
    <v-container>
      <v-row align="center" no-gutters style="height: 150px;">
        <v-col>
          <v-sheet style="text-align: center; font-size: 30px; font-weight: bold;">パスワードを忘れた場合</v-sheet>
        </v-col>
      </v-row>
    </v-container>

    <v-container>
      <h2 style="text-align: center;">ご登録いただいているメールアドレスをご記入ください。<br>
        パスワード再設定のメールをお送りいたします。
      </h2>
    </v-container>

    <v-container>
      <div class="text-subtitle-1 text-medium-emphasis">メールアドレス</div>
      <v-text-field v-model="email" :readonly="loading" :rules="[required]" density="compact" placeholder="「.」と「@」が必ず入るメールアドレスを入力してください" prepend-inner-icon="mdi-email-outline" variant="outlined"></v-text-field>
    </v-container>

    <v-container>
      <v-row justify="center">
        <v-col cols="12" sm="6" md="4">
          <v-btn block rounded="xl" size="x-large">送信</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>