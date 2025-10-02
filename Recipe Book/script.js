// Select the form  
const recipeForm = document.getElementById("recipeForm");

// Select input fields  
const nameInput = document.getElementById("name");
const ingredientsInput = document.getElementById("ingredients");
const stepsInput = document.getElementById("steps");
const imageInput = document.getElementById("image");

// Show modal elements
const modal = document.getElementById("recipeModal");
const modalName = document.getElementById("modalName");
const modalImage = document.getElementById("modalImage");
const modalIngredients = document.getElementById("modalIngredients");
const modalSteps = document.getElementById("modalSteps");
const closeModal = document.querySelector(".close");


// Select the cards container
const cardsContainer = document.querySelector(".cards-container");

// Load recipes from localStorage or start with empty array  
let recipes = JSON.parse(localStorage.getItem("recipes")) || [];

// Function to save recipes to localStorage
function saveRecipes() {
    localStorage.setItem("recipes", JSON.stringify(recipes));
    console.log("All recipes in localStorage:", JSON.stringify(recipes, null, 2));
    displayRecipes(); // update display after saving
}

// Form submit event
recipeForm.addEventListener("submit", function(event) {
    event.preventDefault(); // prevent page reload

    // Validate inputs
    if (!nameInput.value || !ingredientsInput.value || !stepsInput.value || !imageInput.files[0]) {
        alert("Please fill all fields and select an image.");
        return;
    }

    const reader = new FileReader();

    reader.onload = function() {
        const recipeData = {
            name: nameInput.value.trim(),
            ingredients: ingredientsInput.value.trim(),
            steps: stepsInput.value.trim(),
            image: reader.result // Base64 string
        };

        // Add recipe to array
        recipes.push(recipeData);

        // Save to localStorage and update display
        saveRecipes();

        // Clear form
        recipeForm.reset();

        console.log("Recipe added:", recipeData);
    };

    // Read image as Base64
    reader.readAsDataURL(imageInput.files[0]);
});

// Show modal with recipe details
function showModal(recipe) {
    modalName.textContent = recipe.name;
    modalImage.src = recipe.image;
    modalIngredients.textContent = recipe.ingredients;
    modalSteps.textContent = recipe.steps;
    modal.style.display = "block";
}

// Close modal on × click
closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});

// Close modal when clicking outside the modal content
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});


// Function to display recipes as cards
function displayRecipes() {
    cardsContainer.innerHTML = "";
    
    recipes.forEach((recipe) => {
        const card = document.createElement("div");
        card.className = "recipe-card";

        const img = document.createElement("img");
        img.src = recipe.image;
        img.alt = recipe.name;

        const title = document.createElement("h3");
        title.textContent = recipe.name;

        card.appendChild(img);
        card.appendChild(title);

        // Show modal when card clicked
        card.addEventListener("click", () => {
            showModal(recipe);
        });

        cardsContainer.appendChild(card);
    });
}

// Display recipes on page load
displayRecipes();