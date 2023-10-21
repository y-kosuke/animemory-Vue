<script lang="ts" setup>
  import { ref } from 'vue';
  import axios from 'axios';
  import type { AxiosResponse, AxiosError } from 'axios';

  type User = {
    id: string;
    name: string;
    email: string;
    password: string;
    birthday: string;
    gender: string;
    anime_like_text: string;
    user_image: string;
  };

  type Photo = {
    id: string;
    user_id: BigInteger;
    album_id: BigInteger;
    image_url: string;
    image_title: string;
    tag_id: BigInteger;
    favorite_id: boolean;
    address: string;
    scene_text: string;
  };

  type Album = {
    id: string;
    user_id: BigInteger;
    map_id: BigInteger;
    title: string;
  };

  const users = ref<User[]>([]);
  const photos = ref<Photo[]>([]);
  const albums = ref<Album[]>([]);

  const name = ref<string>('');
  const image_url = ref<string>('');
  const image_title = ref<string>('');
  const address = ref<string>('');
  const scene_text = ref<string>('');
  const title = ref<string>('');

  axios
    .get('https://jsonplaceholder.typicode.com/users')
    .then((response: AxiosResponse<User[]>) => {
      users.value = response.data;
    })
    .catch((error: AxiosError) => {
      console.log(error.message);
    });

  const createNewUser = () => {
    axios
      .post('https://jsonplaceholder.typicode.com/users', {
        name: name.value,
      })
      .then((response: AxiosResponse<User>) => users.value.unshift(response.data))
      .catch((error: AxiosError) => console.log(error.message));
  };
  
  axios
    .get('https://jsonplaceholder.typicode.com/users')
    .then((response: AxiosResponse<Photo[]>) => {
      photos.value = response.data;
    })
    .catch((error: AxiosError) => {
      console.log(error.message);
    });

  const createNewPhoto = () => {
    axios
      .post('https://jsonplaceholder.typicode.com/users', {
        image_url: image_url.value,
        image_title: image_title.value,
        address: address.value,
        scene_text: scene_text.value,
      })
      .then((response: AxiosResponse<Photo>) => photos.value.unshift(response.data))
      .catch((error: AxiosError) => console.log(error.message));
  };

  axios
    .get('https://jsonplaceholder.typicode.com/users')
    .then((response: AxiosResponse<Album[]>) => {
      albums.value = response.data;
    })
    .catch((error: AxiosError) => {
      console.log(error.message);
    });

  const createNewAlbum = () => {
    axios
      .post('https://jsonplaceholder.typicode.com/users', {
        title: title.value,
      })
      .then((response: AxiosResponse<Album>) => albums.value.unshift(response.data))
      .catch((error: AxiosError) => console.log(error.message));
  };
</script>

<template>
  <router-view />
</template>
