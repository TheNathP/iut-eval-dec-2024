import allRecipes from "../../data/recipes.json";

export default function Recipes() {
    return {
        recipes: [],
        selectedDifficulty: "",
        selectedRecipe: null,
        currentStep: 0,

        init() {
            this.recipes = allRecipes.recipes;
        },

        get filteredRecipes() {
            if (!this.selectedDifficulty) {
                return this.recipes;
            }
            return this.recipes.filter(
                (recipe) => recipe.difficulty === this.selectedDifficulty
            );
        },

        viewRecipe(recipe) {
            this.selectedRecipe = recipe;
            this.currentStep = 0;
        },

        closeRecipe() {
            this.selectedRecipe = null;
        },

        nextStep() {
            if (this.currentStep < this.selectedRecipe.instructions.length - 1) {
                this.currentStep++;
            }
        },

        prevStep() {
            if (this.currentStep > 0) {
                this.currentStep--;
            }
        }
    };
}
