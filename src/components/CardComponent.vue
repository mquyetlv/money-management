<template>
  <div 
    :style="{ 'background-color': cardInfo.color || 'black' }"
    class="wrap-card w-[340px] h-[170px] rounded-xl p-4 font-medium text-base flex flex-col justify-between"
  >
    <div class="flex justify-between items-center">
      <span>{{ cardInfo.bankName }}</span>
      <ion-icon style="font-size: 24px;" name="radio-outline"></ion-icon>
    </div>

    <div class="flex justify-between items-end">
      <div class="inline-block">
        <p class="tracking-widest">{{ cardInfo.cardNumber }}</p>

        <p><span style="font-size: 10px;">MEMBER SINCE: </span> {{ cardInfo.openDate }}</p>

        <p>{{ cardInfo.name }}</p>
      </div>

      <div class="icon-bank"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ICard } from '../modules/home/models';

  defineProps<{
    cardInfo: ICard
  }>();
</script>

<style scoped>
.wrap-card {
  color: var(--text-white);
  cursor: pointer;
}

.icon-bank {
  width: 50px;
  height: 30px;
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 4px;
  position: relative;
}

.icon-bank::before,
.icon-bank::after {
  content: '';
  display: inline-block;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  position: absolute;
  top: 50%;
}

.icon-bank::before {
  background-color: rgb(255, 0, 0, 0.8);
  right: 50%;
  transform: translate(20%, -50%)
}

.icon-bank::after {
  background-color: rgba(255, 208, 0, 0.8);
  left: 50%;
  transform: translate(-20%, -50%)
}
</style>