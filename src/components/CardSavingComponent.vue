<template>
    <div class="flex flex-col justify-between bg-[#fff] p-4 rounded-2xl w-[260px] h-32 relative">
        <span class="text-xl text-[var(--text-color)]">Hiking</span>
        <span class="font-semibold text-2xl">10,000,000 <span class="text-base">VNĐ</span></span>
        <div class="process">
            <div class="complete-rate"></div>
        </div>

        <ion-icon class="icon-more-option" name="ellipsis-vertical-outline"></ion-icon>
    </div>
</template>

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
    width: 30%;
    background-color: var(--primary-color);
    border-radius: 9999px;
}

.icon-more-option {
    position: absolute;
    font-size: 18px;
    cursor: pointer;
    top: 1rem;
    right: 1rem;
}
</style>