<script setup lang="ts">
import { Reactive, reactive } from 'vue';
import TableCommon from '../../../components/TableCommon.vue';
import { ICard, IColumnTable } from '../models';
import PaginationComponent from '../../../components/pagination/PaginationComponent.vue';
import { Pagination } from '../../../components/pagination';
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
</script>

<template>
    <div class="warp w-full h-full bg-[#fff] rounded-3xl p-6">

        <TableCommon 
            :table-name="'Danh sách thẻ'"
            :columns="columnsTable"
            :data-source="dataSource"
        />

        <PaginationComponent :pagination="pagination" />
    </div>
</template>