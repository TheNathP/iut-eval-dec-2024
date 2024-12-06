import Alpine from "alpinejs";
import Recipes from "./components/Recipes.js";
window.alpine = Alpine;

// declare your Alpine components here...
Alpine.data('Recipes', Recipes);
Alpine.start();

