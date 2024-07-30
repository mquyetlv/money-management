<template>
  <div >

  </div>
</template>

<script setup>
  defineProps({
    bankName: { type: String, required: true },
    name: { type: String, required: true },
    cardNumber: { type: String, required: true },
    memberSince: { type: String, required: true },
    color: { type: String, default: 'black' },
  })
</script>