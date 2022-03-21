<template>
  <div class="flex flex-col items-center mx-auto">
    <form class="flex flex-col mt-5 items-center" @submit.prevent="addFood">
      <h1 class="text-3xl font-semibold">Nova receita:</h1>
      <div class="flex items-center w-full justify-between">
        <label class="text-lg" for="food">Comida:</label>
        <input class="border-2 rounded-xl w-80 outline-none p-4 ml-4 my-3" type="text" name="food" placeholder="Comida" v-model="food">  
      </div>
      <div class="flex items-center w-full justify-between">
        <label class="text-lg" for="ingredients">Ingredientes:</label>
        <textarea class="border-2 rounded-xl w-80 outline-none resize-none p-4 ml-4 my-3 " type="text" name="ingredients" placeholder="Descrição" v-model="description"></textarea>
      </div>
      <button class="border-2 rounded-full bg-gray-200 py-3 w-full text-gray-700">Adicionar</button>
    </form>

    <RecipesList
      :recipeList="recipeStore.getAll"
    />
  </div>
</template>

<script setup lang="ts">
import RecipesList from './components/RecipesList.vue';

import { ref } from 'vue'
import { Recipe, useRecipesStore } from './store/recipes'

const food = ref('')
const description = ref('')

const recipeStore = useRecipesStore();

const addFood = () => {

  const recipe: Recipe = {
    name: food.value,
    description: description.value
  }

  recipeStore.newRecipe(recipe)

  food.value = ""
  description.value = ""
}

</script>