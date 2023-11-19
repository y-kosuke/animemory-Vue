<script setup lang="ts">
import axios from 'axios';
import { ref, computed } from 'vue';

const first = ref(null);
const email = ref(null);
const password1 = ref(null);
const password2 = ref(null);
const terms = ref(false);
const dialog = ref(false);
const inline = ref(null);
const year = ref("");
const month = ref("");
const day = ref("");

const resetDay = (): void => {
  day.value = ''
}

const years = computed<any>(() => {
  const years = []
  for (let year = 1950; year <= new Date().getFullYear(); year++) {
    years.push(year)
  }
  return years
})

const months = computed<any[]>(() => {
  const months = [...Array(12)].map((_, index) => {
    return String(index + 1)
  })
  return months
})

const days = computed<any[]>((year:number, month:number) => {
  let days = []
  if ((month === 2 && year % 4 === 0 && year % 100 !== 0) || (month === 2 && year % 400 === 0)) {
    days = [...Array(29)].map((_, index) => {
      return String(index + 1)
    })
  } else if (month === 2) {
    days = [...Array(28)].map((_, index) => {
      return String(index + 1)
    })
  } else if (month === 4 || month === 6 || month === 9 || month === 11) {
    days = [...Array(30)].map((_, index) => {
      return String(index + 1)
    })
  } else {
    days = [...Array(31)].map((_, index) => {
      return String(index + 1)
    })
  }
  return days
})

const url = "http://localhost:80/api/users"
const inputUser = async () => {
  try {
    const response = await axios.post(url, {
      params: {},
    });
    const presignedUrl = response.data.url;
    await axios.put(presignedUrl, {
      headers: {
        
      },
    });
    console.log("繋ぎ込み成功");
  } catch(err) {
    console.log("繋ぎ込み失敗");
    console.log(err);
  }
}
</script>

<template>
  <v-card class="mx-auto" max-width="600">
    <h2 style="text-align: center;">AniMemory</h2>
    <h3 style="text-align: center;">AniMemoryアカウント編集</h3>

    <v-container>
      <v-text-field v-model="first" color="primary" label="お名前" placeholder="名前を入力してください" variant="underlined"></v-text-field>

      <v-text-field v-model="email" color="primary" label="メールアドレス" placeholder="「.」と「@」が必ず入るメールアドレスを入力してください" variant="underlined"></v-text-field>

      <v-text-field v-model="password1" color="primary" label="パスワード" placeholder="半角英数字8文字以上のパスワードを入力してください" variant="underlined"></v-text-field>

      <v-text-field v-model="password2" color="primary" label="パスワード再入力(確認用)" placeholder="確認のため、設定するパスワードをもう一度入力してください" variant="underlined"></v-text-field>

      <div class="mb-4">生年月日</div>
      <v-row>
        <v-col cols="6">
          <v-select label="西暦" :items="years"  v-model="year"  @change="resetDay" filled dense></v-select>
        </v-col>
        <v-col cols="3">
          <v-select label="月" :items="months" v-model="month"  @change="resetDay" filled dense></v-select>
        </v-col>
        <v-col cols="3">
          <v-select label="日" :items="days" v-model="day" filled dense></v-select>
        </v-col>
      </v-row>

      <label>性別</label>
      <v-radio-group v-model="inline" inline>
        <v-radio label="男性" value="radio1"></v-radio>
        <v-radio label="女性" value="radio2"></v-radio>
      </v-radio-group>
    </v-container>

    <v-divider></v-divider>

    <v-card-actions>
      <v-spacer></v-spacer>

      <div class="text-center">
        <v-btn color="blue" @click="inputUser">変更</v-btn>

        <v-dialog v-model="dialog" width="auto">
          <v-card>
            <v-card-text style="text-align: center;">アカウント変更が完了しました。
            </v-card-text>
            <v-card-actions>
              <v-btn color="red" block @click="dialog = false" href="/">トップページに戻る</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>
    </v-card-actions>
  </v-card>
</template>