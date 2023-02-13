<template>
  <default-layout>
    <div class="error">
      <p class="error__title font-bold opacity-20">404</p>
      <div class="error__actions flex justify-center">
        <div 
          class="error__action bg-rose-600 border-pink-700 border-solid border rounded text-white px-3 pt-2.5 pb-2 cursor-pointer" 
          @click="$router.go(-1)"
        >
          Back
        </div>
        <div class="error__action bg-rose-600 border-pink-700 border-solid border rounded text-white px-3 pt-2.5 pb-2 cursor-pointer">
          <NuxtLink to="/">
            Home
          </NuxtLink>
        </div>
      </div>
    </div>
  </default-layout>
</template>

<script setup>
import defaultLayout from '~/layouts/default.vue';
</script>

<style scoped lang="scss">
  .error {
    &__title {
      font-size: 128px;
    }

    &__action {
      margin-right: 12px;

      &:last-child {
        margin-right: 0;
      }
    }
  }
</style>