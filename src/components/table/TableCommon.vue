<script setup lang="ts">
import { Reactive } from 'vue';
import { IColumnTable, ITableConfig } from '../../modules/home/models';
import { IActionTable } from './models';
import { Pagination } from '../pagination';
import PaginationComponent from '../pagination/PaginationComponent.vue';

    defineProps<{
        columns: IColumnTable[],
        tableConfig?: ITableConfig,
        dataSource: any[],
        pagination: Reactive<Pagination>,
        actionsTable?: IActionTable[],
    }>();

    const emits = defineEmits<{
        (e: 'paginationChange', pagination: Reactive<Pagination>): void,
    }>();
    
    function onPaginationChange(pagination: Reactive<Pagination>) {
        emits('paginationChange', pagination);
    }

</script>

<template>
    <div class="wrap">
        <table class="table-common w-full">
            <thead>
                <tr>
                    <th>STT</th>
                    <th v-for="(col, index) in columns" :key="index">{{ col.headerName }}</th>
                    <th v-show="actionsTable?.length">Thao tác</th>
                </tr>
            </thead>

            <tbody>
                <tr v-for="(item, index) in dataSource">
                    <td class="text-center">{{ index + 1 }}</td>

                    <td v-for="col in columns">
                        {{ item[col.key] }}
                    </td>

                    <td class="text-center" v-show="actionsTable?.length">
                        <template v-for="action in actionsTable">
                            <span class="icon-table" @click="() => action.action(item)">
                                <ion-icon :name="action.icon" :title="action.tooltip"></ion-icon>
                            </span>
                        </template>
                    </td>
                </tr>
            </tbody>
        </table>

        <PaginationComponent
            class="mt-4"
            :pagination="pagination" 
            @paginationChange="onPaginationChange"
        />
    </div>
</template>

<style scoped>
table {
    background-color: #fff;
    border-radius: 6px;
    overflow: hidden;
}

th {
    background-color: var(--primary-color);
    color: #fff;
    padding: 8px;
    border-left: 1px solid #ccc;
}

td {
    padding: 8px;
}

tbody tr:nth-child(even) {
    background-color: var(--background-color);
}

tbody tr:hover {
    background-color: var(--second-color);
}

.icon-table {
    cursor: pointer;
    width: 22px;
    height: 22px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
}

.icon-table:hover {
    background-color: var(--primary-color);
}

.icon-table + .icon-table {
    margin-left: 2px;
}
</style>