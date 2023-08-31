<script lang="ts">
  export default {
    data: () => ({
      user: {
        initials: 'AM',
        fullName: 'Ani Memory',
        email: 'sample.anime@memory.com',
      },
      dialog: false,
    }),
  }
</script>

<template>
  <v-container fluid style="height: 300px;">
    <v-row justify="center">
      <v-menu min-width="200px" rounded>
        <template v-slot:activator="{ props }">
          <v-btn icon v-bind="props">
            <v-avatar color="blue" size="x-large">
              <span class="text-h5">{{  user.initials }}</span>
            </v-avatar>
          </v-btn>
        </template>

        <v-card>
          <v-card-text>
            <div class="mx-auto text-center">
              <v-avatar color="blue">
                <span class="text-h5">{{  user.initials }}</span>
              </v-avatar>

              <h3>{{ user.fullName }}</h3>
              <p class="text-caption mt-1">{{ user.email }}</p>

              <v-divider class="my-3"></v-divider>

              <v-btn rounded variant="text">アカウント編集</v-btn>

              <v-divider class="my-3"></v-divider>

              <v-btn rounded variant="text">マイページ</v-btn>

              <v-divider class="my-3"></v-divider>

              <v-btn rounded variant="text">ログアウト</v-btn>

              <v-divider class="my-3"></v-divider>

              <v-row justify="center">
                <v-dialog v-model="dialog" persistent width="500px">
                  <template v-slot:activator="{ props }">
                    <v-btn color="red" rounded variant="text" v-bind="props">退会</v-btn>
                  </template>
                  <v-card>
                    <v-card-title style="color: red;" class="text-h4">
                      退会手続き
                    </v-card-title>
                    <v-card-text>退会手続きを行うと<br>アプリに保存した写真やアカウント情報が<br>全て削除され、復元は一切出来ませんが<br>本当に退会されますか？</v-card-text>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="red" variant="text" @click="dialog = false" href="/quit">退会する</v-btn>
                      <v-btn color="blue" variant="text" @click="dialog = false">キャンセル</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </v-row>
            </div>
          </v-card-text>
        </v-card>
      </v-menu>
    </v-row>
  </v-container>
</template>