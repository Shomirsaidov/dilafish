<template>
  <div class="flex flex-col justify-between items-center h-screen" style="padding-bottom: 80px;">
    <div class="grid jistify-center items-center justify-items-center my-8 mt-16 space-y-4">
      <img alt="Instagram" width="175" src="../assets/logotype.png">
      <img alt="Instagram" width="85" class="rounded-full" src="../assets/shah_ava.jpg">    
      <button @click="$router.push('/reel/667890log')" style="background: #0095f6; padding: 5px;font-size: 14px; padding-right: 10px; padding-left: 10px; margin-top: 28px; margin-bottom: 8px;" class="rounded-md text-white font-semibold">
        Продолжить как {{ victim }}
      </button>
      <a href="#" style="color: #0095f6; font-size: 14px;" class="font-semibold">
        Удалить аккаунт
      </a>
      <div style="height: 2px; background: #e7e7e7; margin-top: 28px;width: 80%;"></div>
      <h2 style="color: #929292;">
        Не {{ victim }} <br/>
        <span style="color: #0095f6; font-size: 14px;" class="font-semibold">Переключить аккаунты</span> или <span style="color: #0095f6; font-size: 14px;" class="font-semibold">зарегистрируйтесь</span>
      </h2>
    </div>

    <h1 class="text-lg font-semibold p-4 mb-16 text-red-500">
      Содержимое защищено ! <br/>
      Войдите и дайте <br/>согласие на просмотр
    </h1>

    <div style="padding-bottom: 150px;">
      <img src="../assets/meta.svg" width="53" alt="">
    </div>
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
// import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'HomeView',
  components: {
    // HelloWorld,
  },
  data: () => ({
    victim: 'sh_.1.8'
  })

});
</script>
