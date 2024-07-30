<template>
    <div class="relative h-screen">
        <HeaderComponent />

        <NavBarComponent />

        <div class="main">
            <RouterView />
        </div>
    </div>
</template>

<script setup lang="ts">
    import HeaderComponent from './HeaderComponent.vue';
    import NavBarComponent from './NavBarComponent.vue';
</script>

<style scoped>
    .main {
        position: absolute;
        top: 90px;
        left: 300px;
        bottom: 0;
        right: 0;
        padding: 26px;
    }
</style>