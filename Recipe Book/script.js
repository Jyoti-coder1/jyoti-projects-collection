// Day 5: Store Recipe Data (Corrected)

// Select the form
const recipeForm = document.getElementById("recipeForm");

// Select input fields
const nameInput = document.getElementById("name");
const ingredientsInput = document.getElementById("ingredients");
const stepsInput = document.getElementById("steps");
const imageInput = document.getElementById("image");

// Load recipes from localStorage or start with empty array
let recipes = JSON.parse(localStorage.getItem("recipes")) || [];

// Function to save recipes to localStorage
function saveRecipes() {
    localStorage.setItem("recipes", JSON.stringify(recipes));
    console.log("All recipes in localStorage:", JSON.stringify(recipes, null, 2));
}

// Form submit event
recipeForm.addEventListener("submit", function (event) {
    event.preventDefault(); // prevent page reload

    // Validate inputs
    if (!nameInput.value || !ingredientsInput.value || !stepsInput.value || !imageInput.files[0]) {
        alert("Please fill all fields and select an image.");
        return;
    }

    const reader = new FileReader();

    reader.onload = function () {
        const recipeData = {
            name: nameInput.value.trim(),
            ingredients: ingredientsInput.value.trim(),
            steps: stepsInput.value.trim(),
            image: reader.result // Base64 string
        };

        // Add recipe to array
        recipes.push(recipeData);

        // Save to localStorage
        saveRecipes();

        // Clear form
        recipeForm.reset();

        console.log("Recipe added:", recipeData);
    };

    // Read image as Base64
    reader.readAsDataURL(imageInput.files[0]);
});