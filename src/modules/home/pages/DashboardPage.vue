<script setup lang="ts">
import { reactive } from 'vue';
import CardComponent from '../../../components/CardComponent.vue';
import { ICard, ICardSaving } from '../models';
import CardSavingComponent from '../../../components/CardSavingComponent.vue';

const cards: ICard[] = reactive<ICard[]>([
	{ bankName: 'Vietcombank', name: 'LE VAN QUYET', cardNumber: '0932 4123 4143 1412', createdDate: '04/2020', color: 'green' },
	{ bankName: 'Vietcombank', name: 'LE VAN QUYET', cardNumber: '0932 4123 4143 1412', createdDate: '04/2020', color: '#0354b3' },
]);

const cardsSaving: ICardSaving[] = reactive<ICardSaving[]>([
	{ name: 'Hiking', amount: '10,000,000', completeRate: 62.5 },
	{ name: 'New VGA Card', amount: '30,000,000', completeRate: 10.2 },
])
</script>

<template>
	<div class="rounded-3xl bg-[#fff] p-6">
		<h2 class="font-medium text-xl mb-4">My cards</h2>

		<div class="flex">
			<CardComponent 
				class="mr-4"
				v-for="(card, index) in cards" 
				:key="index" 
				:cardInfo="card" 
			/>

			<div class="icon-add-card h-[170px] w-[170px] flex flex-col justify-center items-center">
				<ion-icon style="font-size: 30px;" name="add-outline"></ion-icon>
				<span>Add card</span>
			</div>
		</div>
	</div>


	<div class="mt-4">
		<h2 class="font-medium text-xl mb-4 px-6">Savings</h2>

		<div class="flex">
			<template v-for="(card, index) in cardsSaving" :key="index">
				<CardSavingComponent class="mr-4" :cardSavingInfo="card" />
			</template>

			<div class="icon-add-card card-saving h-32 w-32 flex flex-col justify-center items-center">
				<ion-icon style="font-size: 30px;" name="add-outline"></ion-icon>
			</div>
		</div>
	</div>
</template>

<style scoped>
	.icon-add-card {
		background-color: var(--background-color);
		color: var(--text-color);
		border-radius: 16px;
		border: 2px dashed #ccc;
		cursor: pointer;
	}
	.card-saving {
		background: #fff;
	}
</style>
