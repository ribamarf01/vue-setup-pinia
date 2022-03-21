import { defineStore } from 'pinia'

export type Recipe = {
  name: string,
  description: string
}

// export type RecipeState = {
//   recipes: Recipe[]
// }

export const useRecipesStore = defineStore("recipes", {
  state: () => ({
    savedRecipes: [] as Recipe[]
  }),
  actions: {
    newRecipe(recipe: Recipe): void {
      this.savedRecipes.push(recipe)
    }
  },
  getters: {
    getAll(): Recipe[] {
      return this.savedRecipes
    }
  }
})