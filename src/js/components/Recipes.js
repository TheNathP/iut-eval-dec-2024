import allRecipes from "../../data/recipes.json";

export default function Recipes() {
    return {
        recipes: [],

        init() {
            this.recipes = allRecipes.recipes;
        }
    }
}