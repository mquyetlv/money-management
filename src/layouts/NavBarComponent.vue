<template>
    <div class="w-[300px] bg-[#fff] absolute top-[80px] left-0 bottom-0 pl-10 pr-5 py-7">
        <div v-for="(item, index) in menu" :key="index" class="mt-1 item-menu">
            <template v-if="item.hasChild">
                <div class="menu router-link">
                    <div class="flex items-center" @click="$event => toggedMenu($event, item)">
                        <ion-icon :name="item.icon" style="font-size: 22px;"></ion-icon>
                        <span class="ml-3 text-lg">{{ item.name }}</span>
                    </div>

                    <div v-if="item.hasChild" class="toggle-icon" :class="{ toggle: item.toggle }">
                        <ion-icon name="chevron-forward-outline"></ion-icon>
                    </div>

                    <div class="ml-7 itemChild">
                        <div
                            v-for="(child, indexChild) in item.children" 
                            :key="indexChild"
                            class="pl-3 mt-1"
                        >
                            <router-link :to="child.routerLink" class="pl-4 inline-block h-full w-full rounded-md router-link child">{{ child.name }}</router-link>
                        </div>
                    </div>
                </div>
            </template>

            <template v-else>
                <div class="menu">
                    <router-link class="flex items-center router-link" :to="item.routerLink">
                        <ion-icon :name="item.icon" style="font-size: 22px;"></ion-icon>
                        <span class="ml-3 text-lg">{{ item.name }}</span>
                    </router-link>
                </div>
            </template>
        </div>
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';

    const menu: Menu[] = reactive([
        {
            name: 'Dashboard',
            routerLink: 'dashboard',
            icon: 'home-outline',
            toggle: false,
            hasChild: false,
        },
        {
            name: "My cards",
            routerLink: 'card-management',
            icon: 'card-outline',
            toggle: false,
            hasChild: false,
        },
        {
            name: "List management",
            icon: 'list-outline',
            toggle: false,
            hasChild: true,
            children: [
                { name: 'Income', routerLink: 'income' },
                { name: 'Outcome', routerLink: 'outcome' },
                { name: 'Saving', routerLink: 'saving' },
            ]
        },
    ]);

    function toggedMenu(event: Event, item: Menu) {
        event.stopPropagation();
        item.toggle = !item.toggle;

        const menuElement = (event.target as HTMLElement).closest('.item-menu');
        if (!menuElement) {
            return;
        }

        const itemChild = menuElement.querySelector('.itemChild') as HTMLElement;
        if (!itemChild) {
            return;
        }

        if (item.toggle) {
            itemChild.style.maxHeight = itemChild.scrollHeight + 'px';
        } else {
            itemChild.style.maxHeight = '0';
        }
    }

    interface Menu {
        name: string,
        routerLink?: string,
        icon: string,
        hasChild: boolean,
        toggle?: boolean,
        children?: MenuChild[],
    }

    interface MenuChild {
        name: string,
        routerLink?: string,
    }
</script>

<style scoped>
.router-link {
    display: inline-block;
    width: 100%;
    height: 100%;
    @apply px-4 rounded-lg flex items-center h-11;
    color: var(--text-color);
    cursor: pointer;
}

.router-link.child {
    @apply h-9 rounded;
}

.itemChild {
    max-height: 0;
    overflow: hidden;
    transition: 0.25s ease-in-out;
    position: absolute;
    top: calc(100% + 6px);
    left: 0;
    right: 0;
}

.router-link:hover {
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

.router-link-exact-active,
.router-link:has(.router-link-exact-active) {
    background-color: var(--primary-color);
    color: var(--text-white);
}

.router-link-exact-active.child.child {
    background-color: var(--primary-color);
}
</style>