<script lang="ts">
  export default {
    data: () => ({
      from: false,
      email: null,
      password: null,
      visible: false,
    }),

    methods: {
      onSubmit () {
        if (!this.form) return

        this.loading = true

        setTimeout(() => (this.loading = false), 2000)
      },
      required (v) {
        return !!v || '必ず入力してください'
      },
    },
  }
</script>

<!-- アカウントのメールアドレスを入力する欄の上らへんに「animemoryアカウント」と表記する -->
<template>
  <div>
    <v-card class="mx-auto pa-12 pb-8" elevation="8" max-width="500" rounded="lg">
      <h1>アカウントログイン</h1>
      <v-form v-model="form" @submit.prevent="onSubmit">
        <div class="text-subtitle-1 text-medium-emphasis">アカウント</div>

        <v-text-field v-model="email" :readonly="loading" :rules="[required]" density="compact" placeholder="メールアドレス" prepend-inner-icon="mdi-email-outline" variant="outlined"></v-text-field>

        <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
          パスワード
          <!-- hrefの#のところに遷移させるやつかく -->
          <a class="text-caption text-decoration-none text-blue" href="#" rel="noopener noreferrer" target="_blank">ログインパスワードをお忘れですか？</a>
        </div>

        <v-text-field :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'" :type="visible ? 'text' : 'password'" v-model="password" :readonly="loading" :rules="[required]"
          density="compact" placeholder="パスワードを入力してください" prepend-inner-icon="mdi-lock-outline"
          variant="outlined" @click:append-inner="visible = !visible">
        </v-text-field>
      
        <v-btn block class="mb-8" color="blue" size="large" variant="tonal">ログイン</v-btn>

        <v-card-text class="text-center">
          <!-- hrefの#のところに遷移させるやつかく -->
          <a class="text-blue text-decoration-none" href="#" rel="noopener noreferrer" target="_blank">
            新規会員登録 <v-icon icon="mdi-chevron-right"></v-icon>
          </a>
        </v-card-text>
      </v-form>
    </v-card>
  </div>
</template>