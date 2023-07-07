<script lang="ts">
  export default {
    data: () => ({
      first: null,
      email: null,
      password1: null,
      password2: null,
      terms: false,
    }),
  }
</script>

<template>
  <v-card class="mx-auto" max-width="600" title="animemory新規アカウント登録">

    <v-container>
      <v-text-field v-model="first" color="primary" label="お名前" placeholder="名前を入力してください" variant="underlined"></v-text-field>

      <v-text-field v-model="email" color="primary" label="メールアドレス" placeholder="「.」と「@」が必ず入るメールアドレスを入力してください" variant="underlined"></v-text-field>

      <v-text-field v-model="password1" color="primary" label="パスワード" placeholder="半角英数字8文字以上のパスワードを入力してください" variant="underlined"></v-text-field>

      <v-text-field v-model="password2" color="primary" label="パスワード再入力(確認用)" placeholder="確認のため、設定するパスワードをもう一度入力してください" variant="underlined"></v-text-field>

      <label>生年月日</label>
      <v-select color="blue" label="月" :items="['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']"></v-select>
      <v-select color="blue" label="日" :items="['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31']"></v-select>

      <label>性別</label>
      <v-select color="blue" label="(未選択)" :items="['男性', '女性']"></v-select>

      <v-checkbox v-model="terms" color="secondary" label="animemoryの利用規約に同意します"></v-checkbox>
    </v-container>

    <v-divider></v-divider>

    <v-card-actions>
      <v-spacer></v-spacer>

      <v-btn color="blue">
        登録
        <v-icon icon="mdi-chevron-right" end></v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>