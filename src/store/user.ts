import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { type } from 'os'
import axios, { AxiosResponse } from 'axios'
import { error } from 'console'

const url = "http://0.0.0.0:80/api"
type User = {
  id: number;
  name: string;
  email: string;
  password: string;
  birthday: string;
  gender: string;
}
export const useUsersStore = defineStore('counter', () => {
    const users = ref<User[]>([]);

    const getUsers = computed(() => users.value);

    async function fetchUsers() {
        await axios.get(url + "/users/1")
        .then((response: AxiosResponse<User[]>) => {
          users.value = response.data;
          console.log(users.value);
        })
        .catch((error) => {
          console.log(error);
          throw error;
        })
    }

    async function postUser(name: string, email: string, password: string, birthday: string, gender: string) {
      await axios.post(url + "/users", {
        name: name,
        email: email,
        password: password,
        birthday: birthday,
        gender: gender,
      })
        .then((response: AxiosResponse<User[]>) => {
          users.value = response.data;
          console.log(users.value);
        })
        .catch((error) => {
          console.log(error);
          throw error;
        })
    }

    async function putUser() {
      await axios.put(url + "/users", {
        password: "",
      })
        .then((response: AxiosResponse<User[]>) => {
          users.value = response.data;
          console.log(users.value);
        })
        .catch((error) => {
          console.log(error);
          throw error;
        })
    }

    async function deleteUser() {
      await axios.delete(url + "users/1")
      .then((response: AxiosResponse<User[]>) => {
        users.value = response.data;
        console.log(users.value);
      })
      .catch((error) => {
        console.log(error);
        throw error;
      })
    }

    return { users, getUsers, fetchUsers, postUser, putUser, deleteUser };
})
