<template>
  <div class="flex flex-col text-center">
    <h1 class="text-3xl my-5 font-bold">Receitas salvas: </h1>
    <span class="text-lg" v-for="recipe in recipeList" :key="recipe.name">{{ recipe.name }} | {{ recipe.description }}</span>
   </div>  
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'
import { Recipe }  from '@/store/recipes'

interface Props {
  recipeList: Recipe[]
}

const props = defineProps<Props>()

</script>