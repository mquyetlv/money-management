<template>
    <div class="flex flex-col justify-between bg-[#fff] p-4 rounded-2xl w-[260px] h-32 relative">
        <span class="text-xl text-[var(--text-color)]"> {{ cardSavingInfo.name }} </span>
        <span class="font-semibold text-2xl">{{ cardSavingInfo.amount}} <span class="text-base">VNĐ</span></span>
        <div class="process">
            <div class="complete-rate" :style="{width: cardSavingInfo.completeRate + '%'}"></div>
        </div>

        <span class="wrap-icon">
            <ion-icon class="text-lg" name="ellipsis-vertical-outline"></ion-icon>
        </span>
    </div>
</template>

<script lang="ts" setup>
    import { ICardSaving } from '../modules/home/models';

    defineProps<{
        cardSavingInfo: ICardSaving
    }>();
</script>

<style scoped>
.process {
    position: relative;
    background-color: var(--background-color);
    width: 100%;
    height: inherit;
    height: 10px;
    border-radius: 9999px;
}

.complete-rate {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    background-color: var(--primary-color);
    border-radius: 9999px;
}

.wrap-icon {
    position: absolute;
    cursor: pointer;
    top: 6px;
    right: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    width: 30px;
    height: 30px;
}

.wrap-icon:hover {
    background-color: var(--background-color);
}

.icon-more-option:hover {
    background-color: var(--background-color);
}
</style>