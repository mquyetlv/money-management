<script setup lang="ts">
import { reactive } from 'vue';
import CardComponent from '../../../components/CardComponent.vue';
import { ICard } from '../models';

const cards: ICard[] = reactive<ICard[]>([
	{ bankName: 'Vietcombank', name: 'LE VAN QUYET', cardNumber: '0932 4123 4143 1412', createdDate: '04/2020', color: 'green' },
])
</script>

<template>
	<div class="rounded-3xl bg-[#fff] p-6">
		<h2 class="font-medium text-xl">My cards</h2>

		<div>
			<CardComponent :cardInfo="cards[0]" />
		</div>
	</div>

</template>

<style scoped>
	
</style>
