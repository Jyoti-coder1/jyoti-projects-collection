// Select the form
const recipeForm = document.getElementById("recipeForm");

// Select input fields
const nameInput = document.getElementById("name");
const ingredientsInput = document.getElementById("ingredients");
const stepsInput = document.getElementById("steps");
const imageInput = document.getElementById("image");

// Add submit event listener
recipeForm.addEventListener("submit", function (event) {
    event.preventDefault(); // prevent page refresh

    // Collect form data
    const recipeData = {
        name: nameInput.value,
        ingredients: ingredientsInput.value,
        steps: stepsInput.value,
        image: imageInput.files[0] ? imageInput.files[0].name : "No image uploaded"
    };

    // Print data to console
    console.log("Recipe Submitted:", recipeData);

    // Optional: clear form after submit
    recipeForm.reset();
});