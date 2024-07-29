<template>
    <div class="w-[300px] bg-[#fff] absolute top-[80px] left-0 bottom-0 pl-10 pr-5 py-7">
        <div v-for="(item, index) in menu" :key="index" class="mt-1 item-menu">
            <div class="flex items-center h-11 rounded-lg px-4 menu">
                <router-link class="flex items-center">
                    <ion-icon :name="item.icon" style="font-size: 22px;"></ion-icon>
                    <span class="ml-3 text-lg">{{ item.name }}</span>
                </router-link>

                <div v-if="item.hasChild" class="toggle-icon" :class="{ toggle: item.toggle }">
                    <ion-icon name="chevron-forward-outline"></ion-icon>
                </div>
            </div>

            <div class="ml-9 itemChild" :class="{ togged: item.hasChild && item.toggle }">
                <div
                    class="h-8 mt-1"
                    v-for="(child, indexChild) in item.children" 
                    :key="indexChild"
                >
                    <router-link class="pl-4 inline-block h-full w-full rounded-md">{{ child.name }}</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';

    const menu: Menu[] = reactive([
        {
            name: 'Dashboard',
            path: '',
            icon: 'home-outline',
            toggle: false,
            hasChild: false,
        },
        {
            name: "My cards",
            path: '',
            icon: 'card-outline',
            toggle: false,
            hasChild: false,
        },
        {
            name: "List management",
            icon: 'list-outline',
            path: '',
            toggle: false,
            hasChild: true,
            children: [
                { name: 'Income', path: '' },
                { name: 'Outcome', path: '' },
                { name: 'Saving', path: '' },
            ]
        },
        {
            name: "List management",
            icon: 'list',
            path: '',
            toggle: false,
            hasChild: true,
            children: [
                { name: 'Income', path: '' },
                { name: 'Outcome', path: '' },
                { name: 'Saving', path: '' },
            ]
        },
    ]);


    interface Menu {
        name: string,
        path: string,
        icon: string,
        hasChild: boolean,
        toggle?: boolean,
        children?: MenuChild[],
    }

    interface MenuChild {
        name: string,
        path: string,
    }
</script>

<style scoped>
.menu,
.itemChild {
    color: var(--text-color);
    cursor: pointer;
}

.itemChild {
    max-height: 0;
    overflow: hidden;
    transition: 1s ease-in-out;
}

.menu:hover {
    background-color: var(--primary-color);
    color: var(--text-white);
}

.itemChild {
    border-left: 2px solid var(--text-color);
}

.menu {
    position: relative;
}

.toggle-icon {
    position: absolute;
    right: 8px;
    top: 50%;
    transform: translateY(-50%) rotateZ(0deg);
    transition: transform 0.1s linear;
    width: 16px;
    height: 16px;
    transform-origin: center;
}

.toggle {
    transform: translateY(-50%) rotateZ(-90deg);
}
</style>