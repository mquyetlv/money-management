<script setup lang="ts">
import { Reactive, reactive } from 'vue';
import { ICard, IColumnTable } from '../models';
import { Pagination } from '../../../components/pagination';
import TableCommon from '../../../components/table/TableCommon.vue';
import { IActionTable } from '../../../components/table/models';


const actionsTable: IActionTable[] = [
    { tooltip: 'Edit', icon: 'pencil-outline', action: onEdit },
    { tooltip: 'View detail', icon: 'eye-outline', action: onView },
];

const columnsTable: IColumnTable[] = [
    {
        headerName: 'ID',
        key: 'id',
    },
    {
        headerName: 'Ngân hàng',
        key: 'bankName',
    },
    {
        headerName: 'Số thẻ',
        key: 'cardNumber',
    },
    {
        headerName: 'Chủ tài khoản',
        key: 'name',
    },
    {
        headerName: 'Ngày mở',
        key: 'openDate',
    },
    {
        headerName: 'Số dư',
        key: 'balance',
    },
];

const dataSource: ICard[] = reactive<ICard[]>([
	{ id: '1', bankName: 'Vietcombank', name: 'LE VAN QUYET', cardNumber: '0932 4123 4143 1412', openDate: '04/2020', color: 'green', balance: 120000 },
	{ id: '2', bankName: 'Vietcombank', name: 'LE VAN QUYET', cardNumber: '0932 4123 4143 1412', openDate: '04/2020', color: '#0354b3', balance: 120000 },
	{ id: '2', bankName: 'Vietcombank', name: 'LE VAN QUYET', cardNumber: '0932 4123 4143 1412', openDate: '04/2020', color: '#0354b3', balance: 120000 },
	{ id: '2', bankName: 'Vietcombank', name: 'LE VAN QUYET', cardNumber: '0932 4123 4143 1412', openDate: '04/2020', color: '#0354b3', balance: 120000 },
	{ id: '2', bankName: 'Vietcombank', name: 'LE VAN QUYET', cardNumber: '0932 4123 4143 1412', openDate: '04/2020', color: '#0354b3', balance: 120000 },
	{ id: '2', bankName: 'Vietcombank', name: 'LE VAN QUYET', cardNumber: '0932 4123 4143 1412', openDate: '04/2020', color: '#0354b3', balance: 120000 },
	{ id: '2', bankName: 'Vietcombank', name: 'LE VAN QUYET', cardNumber: '0932 4123 4143 1412', openDate: '04/2020', color: '#0354b3', balance: 120000 },
	{ id: '2', bankName: 'Vietcombank', name: 'LE VAN QUYET', cardNumber: '0932 4123 4143 1412', openDate: '04/2020', color: '#0354b3', balance: 120000 },
	{ id: '2', bankName: 'Vietcombank', name: 'LE VAN QUYET', cardNumber: '0932 4123 4143 1412', openDate: '04/2020', color: '#0354b3', balance: 120000 },
	{ id: '2', bankName: 'Vietcombank', name: 'LE VAN QUYET', cardNumber: '0932 4123 4143 1412', openDate: '04/2020', color: '#0354b3', balance: 120000 },
	{ id: '2', bankName: 'Vietcombank', name: 'LE VAN QUYET', cardNumber: '0932 4123 4143 1412', openDate: '04/2020', color: '#0354b3', balance: 120000 },
	{ id: '2', bankName: 'Vietcombank', name: 'LE VAN QUYET', cardNumber: '0932 4123 4143 1412', openDate: '04/2020', color: '#0354b3', balance: 120000 },
	{ id: '2', bankName: 'Vietcombank', name: 'LE VAN QUYET', cardNumber: '0932 4123 4143 1412', openDate: '04/2020', color: '#0354b3', balance: 120000 },
]);

const pagination: Reactive<Pagination> = reactive<Pagination>(new Pagination(126));

function onEdit(rowData: any) {
    console.log("On edit: ", rowData);
}

function onView(rowData: any) {
    console.log("On view: ", rowData);
}

function changePagination(pagination: Reactive<Pagination>) {
    console.log("Page Size: ", pagination.size);
}
</script>

<template>
    <div class="warp w-full h-full bg-[#fff] rounded-3xl p-6">

        <TableCommon
            :columns="columnsTable"
            :data-source="dataSource"
            :pagination="pagination"
            :actions-table="actionsTable"
            @paginationChange="changePagination"
        />
    </div>
</template>