<script lang="ts">
  export default {
    data: () => ({
      user: {
        initials: 'AM',
        fullName: 'Ani Memory',
        email: 'sample.anime@memory.com',
      },
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

              <v-btn color="red" rounded variant="text">退会</v-btn>
            </div>
          </v-card-text>
        </v-card>
      </v-menu>
    </v-row>
  </v-container>
</template>