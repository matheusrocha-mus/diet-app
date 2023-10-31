/*import Sortable from 'sortablejs';*/  

window.addEventListener('load', () => {
    const savedData = localStorage.getItem('yourKey'); // Replace 'yourKey' with a unique key.
    if (savedData) {
        // Parse the JSON data and use it to set the page state.
        const parsedData = JSON.parse(savedData);
        // Update your page elements with the data.
    }
    else {
        console.error('Data not found.');
    }
});

function saveDataToLocalStorage(data) {
    const jsonData = JSON.stringify(data);
    localStorage.setItem('yourKey', jsonData); // Replace 'yourKey' with a unique key.
}

let foodItems = [];

 // Requeijão: 260, 8, 3.33, 24

fetch('foodData.json')
    .then((response) => response.json())
    .then((data) => {
        foodItems = data;

        const foodOptionsRow = document.getElementById("food-options-row");
        foodItems.forEach(Food => {
            const foodOptionsColumn = document.createElement("div");
            foodOptionsColumn.className = "col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2"
            foodOptionsRow.appendChild(foodOptionsColumn);
            const foodOption = document.createElement("a");
            foodOption.className = "dropdown-item";
            foodOption.textContent = Food.name;
            foodOption.addEventListener("click", () => {
                console.log(`Selected: ${Food.name}`);
            });
            foodOptionsColumn.appendChild(foodOption);
        });

    })
    .catch((error) => console.error('Error loading food data:', error));



var totalCalories = 0.0;
var totalProteins = 0.0;
var totalCarbs = 0.0;
var totalFats = 0.0;

var mealTotalCalories = 0.0;
var mealTotalProteins = 0.0;
var mealTotalCarbs = 0.0;
var mealTotalFats = 0.0;



document.addEventListener("DOMContentLoaded", () => {

    const mealsContainer = document.getElementById("meals-container");

    document.getElementById("create-meal").addEventListener("click", () => {
        const meal = document.createElement("ul");
        meal.className = "meal sortable list-group";
        mealsContainer.appendChild(meal);



        const mealTitle = document.createElement("input");
        mealTitle.className = "form-control-dark";
        mealTitle.className = "meal-title";
        mealTitle.setAttribute('type', 'text');
        mealTitle.setAttribute('placeholder', 'Enter the meal name');
        meal.appendChild(mealTitle);

        // Create a new class to represent a meal name.
        class MealTitle {
            constructor(title) {
            this.name = title;
            }
        }

        // Add a listener to the meal name inputs.
        const mealTitleInputs = document.querySelectorAll(".meal-title");
            for (const mealTitleInput of mealTitleInputs) {
            mealTitleInput.addEventListener("blur", () => {
                // Get the meal name from the input.
                const mealTitle = mealTitleInput.value;

                // Create a new instance of the meal name class.
                const mealTitleInstance = new MealTitle(mealTitle);

                // Add the meal name instance to an array.
                const mealTitles = [];
                mealTitles.push(mealTitleInstance);

                // Serialize the array to JSON and save it to the JSON file.
                const jsonString = JSON.stringify(mealTitles);
                localStorage.setItem("mealTitles", jsonString);
            });
        }

        // Get the meal names from the JSON file.
        const mealTitlesJsonString = localStorage.getItem("mealTitles");

        // If the meal names JSON string is not empty, parse it to an object.
        if (mealTitlesJsonString) {
            const mealTitles = JSON.parse(mealTitlesJsonString);

            // Display the meal names in the meal box.
            const meal = document.querySelector(".meal");
            for (const mealTitle of mealTitles) {
                const mealItem = document.createElement("li");
                mealItem.textContent = mealTitle;
                meal.appendChild(mealItem);
            }
        }



        const createFood = document.createElement("button");
        createFood.className = "create-food btn btn-dark";
        createFood.textContent = 'Create Food';
        meal.appendChild(createFood);

        const createFoodButtons = document.querySelectorAll(".create-food");
        createFoodButtons.forEach(button => {
            button.addEventListener("click", () => {
                const foodItem = document.createElement("li");
                foodItem.className = "food-item sortable container-fluid list-group-item list-group-item-dark p-4 rounded";
                meal.insertBefore(foodItem, meal.lastChild);

                foodItem.appendChild(document.getElementById("food-item-row"));
                document.getElementById("food-item-row").classList.remove("d-none");

                document.getElementById("create-new-food").addEventListener("click", () => {
                    foodItem.appendChild(document.getElementById("new-food"));
                    document.getElementById("new-food").classList.remove("d-none");
                    document.getElementById("food-item-row").classList.add("d-none");

                    const cancelButton = document.getElementById("cancel-form-button");
                    cancelButton.addEventListener("click", () => {
                        document.getElementById("new-food").style.display = "none";
                        document.getElementById("food-item-row").style.display = "none";
                        const foodItem = cancelButton.closest(".food-item");
                        mealsContainer.appendChild(document.getElementById("new-food"));
                        mealsContainer.appendChild(document.getElementById("food-item-row"));
                        foodItem.parentNode.removeChild(foodItem);
                    });

                    const createFoodButton = document.getElementById("success-form-button");

                    createFoodButton.addEventListener("click", () => {
                        const foodName = document.getElementById("new-food-name").value;
                        const foodCalories = document.getElementById("new-food-calories").value;
                        const foodProteins = document.getElementById("new-food-proteins").value;
                        const foodCarbs = document.getElementById("new-food-carbs").value;
                        const foodFats = document.getElementById("new-food-fats").value;

                        const newFood = {
                            name: foodName,
                            calories: foodCalories,
                            proteins: foodProteins,
                            carbs: foodCarbs,
                            fats: foodFats,
                        };

                        const foodDataJsonString = localStorage.getItem("foodData");
                        let foodData = [];

                        if (foodDataJsonString) {
                            foodData = JSON.parse(foodDataJsonString);
                        }

                        foodData.push(newFood);

                        const newFoodDataJsonString = JSON.stringify(foodData);
                        localStorage.setItem("foodData", newFoodDataJsonString);

                        // Hide the form and show the food item row.
                        document.getElementById("new-food").classList.add("d-none");
                        document.getElementById("food-item-row").classList.remove("d-none");
                    });
                });
            });
        });



        const mealTotal = document.createElement("div");
        mealTotal.className = "container-fluid";
        meal.appendChild(mealTotal);

        const totalTitle = document.createElement("h3");
        totalTitle.textContent = "Total:"
        mealTotal.appendChild(totalTitle);

        const totalRow = document.createElement("div");
        totalRow.className = "row";
        mealTotal.appendChild(totalRow)

        const totalColumns = [
            { id: "calories", label: "Calories: ", class: "col-12 col-sm-6 col-md-3" },
            { id: "proteins", label: "Proteins: ", class: "col-12 col-sm-6 col-md-3" },
            { id: "carbs", label: "Carbs: ", class: "col-12 col-sm-6 col-md-3" },
            { id: "fats", label: "Fats: ", class: "col-12 col-sm-6 col-md-3" },
        ];

        totalColumns.forEach((column) => {
            const totalColDiv = document.createElement("div");
            totalColDiv.className = column.class;
            const totalLabel = document.createElement("label");
            totalLabel.htmlFor = column.id;
            totalLabel.textContent = column.label;
            const totalInput = document.createElement("input");
            totalInput.type = "text";
            totalInput.id = column.id;
            totalInput.disabled = true;
            totalColDiv.appendChild(totalLabel);
            totalColDiv.appendChild(totalInput);
            totalRow.appendChild(totalColDiv);
        });
    });
});