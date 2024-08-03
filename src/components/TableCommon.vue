<script setup lang="ts">
import { IColumnTable, ITableConfig } from '../modules/home/models';

    defineProps<{
        tableName: string,
        columns: IColumnTable[],
        tableConfig?: ITableConfig,
        dataSource: any,
    }>();

</script>

<template>
    <div class="wrap">
        <h1>Danh sách thẻ</h1>

        <table class="table-common w-full">
            <thead>
                <tr>
                    <th>STT</th>
                    <th v-for="(col, index) in columns" :key="index">{{ col.headerName }}</th>
                    <th>Thao tác</th>
                </tr>
            </thead>

            <tbody>
                <tr v-for="(item, index) in dataSource">
                    <td class="text-center">{{ index + 1 }}</td>

                    <td v-for="col in columns">
                        {{ item[col.key] }}
                    </td>

                    <td>Action here</td>
                </tr>
            </tbody>
        </table>
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
</style>