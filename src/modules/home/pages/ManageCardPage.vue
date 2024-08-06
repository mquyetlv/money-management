<script setup lang="ts">
import { Reactive, reactive, ref } from 'vue';
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
]);

const pagination: Reactive<Pagination> = reactive<Pagination>(new Pagination(126));

let formSearch = ref({
    bankName: '',
    cardNumber: '',
    owner: '',
    openDate: '',
});

function onEdit(rowData: any) {
    console.log("On edit: ", rowData);
}

function onView(rowData: any) {
    console.log("On view: ", rowData);
}

function changePagination(pagination: Reactive<Pagination>) {
    console.log("Page Size: ", pagination.size);
}

function onSearch() {
    console.log("Search value: ", formSearch);
}

function onReset() {
    formSearch.value = {
        bankName: '',
        cardNumber: '',
        owner: '',
        openDate: '',
    }
    console.log("REset");
}
</script>

<template>
    <div class="warp w-full h-full bg-[#fff] rounded-3xl p-6 overflow-auto">
        <div class="form-search mb-4">
            <div class="container">
                <div class="grid grid-cols-3 gap-4">
                    <div class="col-span-1 form-group">
                        <label class="form-label form-label required">Tên ngân hàng</label>
                        <input class="form-control" type="text" name="bankName" v-model="formSearch.bankName">
                    </div>
                    
                    <div class="col-span-1 form-group">
                        <label class="form-label form-label required">Lọai thu chi</label>
                        <select class="form-control" v-model="formSearch.cardNumber">
                            <option value="Ăn uống">Ăn uống</option>
                            <option value="Sinh hoạt">Sinh hoạt</option>
                            <option value="Đi lại">Đi lại</option>
                        </select>
                    </div>
                    
                    <div class="col-span-1 form-group">
                        <label class="form-label form-label required">Ngày mở thẻ</label>
                        <input type="date" class="form-control" v-model="formSearch.openDate" />
                    </div>

                    <div class="col-span-3 flex justify-center">
                        <button class="btn mr-2" @click="onSearch()">
                            <ion-icon name="search-outline"></ion-icon>
                            Tìm kiếm
                        </button>
                        <button class="btn btn-secondary" @click="onReset()">
                            <ion-icon name="refresh-outline"></ion-icon>
                            Reset
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <TableCommon
            :columns="columnsTable"
            :data-source="dataSource"
            :pagination="pagination"
            :actions-table="actionsTable"
            @paginationChange="changePagination"
        />
    </div>
</template>