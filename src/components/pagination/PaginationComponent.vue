<script setup lang="ts">
import { computed, reactive, Reactive } from 'vue';
import { Pagination } from './models/pagination.class';

    interface IProps {
        pagination?: Reactive<Pagination>,
        pageOptions?: number[],
    }

    const props = withDefaults(defineProps<IProps>(), {
        pageOptions: () => [10, 20, 50, 100],
        pagination: () => reactive(new Pagination(0)),
    });

    defineEmits<{
        (e: 'changePageSize', pageSize: number): void,
        (e: 'changePageNumber', pageNumber: number): void,
    }>();

    const renderPage = computed(() => {
        const pagination = props.pagination;
        const numberOfPages = Math.floor(pagination.total / pagination.size);

        if (numberOfPages <= 4) return createArray(numberOfPages);

        else {
            if (pagination.page >= 2 && pagination.page <= numberOfPages - 2) {
                return createArray(pagination.page + 2, pagination.page - 2);
            } 
            
            else if (pagination.page >= numberOfPages - 1) {
                return createArray(numberOfPages, numberOfPages - 4)
            }

            else {
                return createArray(4);
            }
        }
    })

    function onChangePageSize(event: Event) {
        const size = (event.target as HTMLSelectElement).value;
        props.pagination.size = parseInt(size);
    }

    function onChangePageNumber(pageNumber: number) {
        console.log("Page number: ", pageNumber);
        props.pagination.page = pageNumber;
    }

    function createArray(length: number, from = 0) {
        const arr = [];
        for(let i = from; i <= length; ++i) {
            arr.push(i);
        }
        return arr;
    }

</script>

<template>
    <div class="pagination">
        <p class="mr-4">
            {{ pagination.page * pagination.size + 1 }}
            - 
            {{ (pagination.page + 1) * pagination.size < pagination.total ? (pagination.page + 1) * pagination.size : pagination.total }}
            Trong 
            {{ pagination.total }}
        </p>
        
        <div class="wrap-button">
            <span 
                class="button" 
                :class="{ disable: pagination.page === 0 }"
                @click="onChangePageNumber(0)"
            >
                <ion-icon name="play-back-outline"></ion-icon>
            </span>

            <span 
                class="button" 
                :class="{ disable: pagination.page === 0 }"
                @click="onChangePageNumber(pagination.page - 1)"
            >
                <ion-icon name="chevron-back-outline"></ion-icon>
            </span>

            <span 
                class="button" 
                v-for="page in renderPage"
                :class="{ active: pagination.page === page}"
                @click="onChangePageNumber(page)"
            >
                {{ page + 1 }}
            </span>

            <span 
                class="button"
                :class="{disable: pagination.page >= Math.floor(pagination.total / pagination.size)}"
                @click="onChangePageNumber(pagination.page + 1)"
            >
                <ion-icon name="chevron-forward-outline"></ion-icon>
            </span>

            <span 
                class="button"
                :class="{disable: pagination.page >= Math.floor(pagination.total / pagination.size)}"
                @click="onChangePageNumber(Math.floor(pagination.total / pagination.size))"
            >
                <ion-icon name="play-forward-outline"></ion-icon>
            </span>

            <select @change="onChangePageSize" class="page-option">
                <option v-for="item in pageOptions">{{ item }}</option>
            </select>
        </div>
    </div>
</template>

<style scoped>
.pagination {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
}

.wrap-button {
    display: flex;
    align-items: center;
}

.button {
    margin: 0 4px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    border: 1px solid #ccc;
    line-height: 1;
    cursor: pointer;
}

.button.active,
.button:hover {
    border-color: var(--primary-color);
    color: var(--primary-color);
}

.page-option {
    height: 32px;
    width: 100px;
    border: 1px solid #ccc;
    outline: none;
}

</style>