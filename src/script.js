let foodItems = [];

 // Requeijão: 260, 8, 3.33, 24

fetch('foodData.json')
    .then((response) => response.json())
    .then((data) => {
        foodItems = data;
    })
    .catch((error) => console.error('Error loading food data:', error));

(function () {
    'use strict'
    var forms = document.querySelectorAll('form')
    Array.prototype.slice.call(forms)
    .forEach(function (form) {
        form.addEventListener('submit', function (event) {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }
        form.classList.add('was-validated')
        }, false)
    })
})()



function createMeal (mealsList, uniqueIdCounter) {
    const uniqueId = `${uniqueIdCounter}`;
    const meal = document.createElement("li");
    meal.className = "meal sortable list-group-item";
    meal.innerHTML = `
    <input type="text" placeholder="Enter meal name" class="meal-title form-control-dark fs-3">
    <ul class="foods-list list-group">
        <!--Generated foods will be appended here-->
    </ul>
    <button class="add-food btn btn-dark">Add food</button>
    <div class="meal-total container-fluid">
        <h3>Total:</h3>
        <div class="row">
            <div class="col-12 col-sm-6 col-md-3">
                <label for="meal-calories${uniqueId}">Calories:</label>
                <input class="meal-calories" type="number" id="meal-calories${uniqueId}" disabled>
            </div>
            <div class="col-12 col-sm-6 col-md-3">
                <label for="meal-proteins${uniqueId}">Proteins:</label>
                <input class="meal-proteins" type="number" id="meal-proteins${uniqueId}" disabled>
            </div>
            <div class="col-12 col-sm-6 col-md-3">
                <label for="meal-carbs${uniqueId}">Carbs:</label>
                <input class="meal-carbs" type="number" id="meal-carbs${uniqueId}" disabled>
            </div>
            <div class="col-12 col-sm-6 col-md-3">
                <label for="meal-fats${uniqueId}">Fats:</label>
                <input class="meal-fats" type="number" id="meal-fats${uniqueId}" disabled>
            </div>
        </div>
    </div>
    `;
    mealsList.appendChild(meal);
}

function addFood (foodsList, uniqueIdCounter) {
    const uniqueId = `${uniqueIdCounter}`;
    const food = document.createElement("li");
    food.className = "food container-fluid list-group-item list-group-item-dark p-4 rounded"; // Avaliar esse nome bosta (duas instâncias abaixo)
    food.innerHTML = `
    <div class="food-item-row row">
        <div class="col-12 col-md-6 col-lg-8 col-xl-10">
            <div class="food-options-dropdown dropdown col-12 col-sm-10">
                <button class="btn btn-secondary dropdown-toggle" id="food-dropdown-button${uniqueId}" data-bs-toggle="dropdown" aria-expanded="false">Food Options
                    <div class="dropdown-menu dropdown-menu-dark row" aria-labelledby="food-dropdown-button${uniqueId}">
                        <div class="container-fluid">
                            <div class="food-options-row row">
                                <!--Get options from foodData.json-->
                            </div>
                        </div>
                    </div>
                </button>
            </div>
        </div>
        <div class="col-6 col-md-3 col-lg-2 col-xl-1">
            <button class="create-new-food btn btn-primary" type="button">Create food</button>
        </div>
        <div class="col-6 col-md-3 col-lg-2 col-xl-1">
            <button class="delete-food btn btn-danger" type="button">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"></path>
                    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"></path>
                </svg> Delete
            </button>
        </div>
    </div>
    `;
    foodsList.appendChild(food);

    const foodOptionsRow = food.querySelector(".food-options-row");
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

}

function createFood (food, uniqueIdCounter) {
    const uniqueId = `${uniqueIdCounter}`;
    food.querySelector(".food-item-row").remove(); // Avaliar esse nome bosta
    const newFood = document.createElement("form");
    newFood.className = "new-food container-fluid needs-validation";
    newFood.setAttribute("novalidate", "");
    newFood.innerHTML = `
    <div class="row">
        <div class="new-food-form col-12 col-md-10">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12 col-md-4 d-flex">
                        <label for="new-food-name${uniqueId}">Name: </label>
                        <input class="form-control new-food-name" required type="text" id="new-food-name${uniqueId}" placeholder="Food name">
                    </div>
                    <div class="col-12 col-md-4 d-flex>
                        <label for="new-food-calories${uniqueId}">Calories: </label>
                        <input class="form-control new-food-calories" required type="number" id="new-food-calories${uniqueId}" placeholder="Calories (in grams, only numbers)">
                    </div>
                    <div class="col-12 col-md-4 d-flex>
                        <label for="new-food-proteins${uniqueId}">Proteins: </label>
                        <input class="form-control new-food-proteins" required type="number" id="new-food-proteins${uniqueId}" placeholder="Proteins (in grams, only numbers)">
                    </div>
                    <div class="col-12 col-md-4 d-flex>
                        <label for="new-food-carbs${uniqueId}">Carbs: </label>
                        <input class="form-control new-food-carbs" required type="number" id="new-food-carbs${uniqueId}" placeholder="Carbs (in grams, only numbers)">
                    </div>
                    <div class="col-12 col-md-4 d-flex>
                        <label for="new-food-fats${uniqueId}">Fats: </label>
                        <input class="form-control new-food-fats" required type="number" id="new-food-fats${uniqueId}" placeholder="Fats (in grams, only numbers)">
                    </div>
                    <div class="col-12 col-md-4 d-flex>
                        <label for="new-food-portion${uniqueId}">Portion: </label>
                        <select class="form-select new-food-portion" required id="new-food-portion${uniqueId}">
                            <option selected disabled>Select portion type</option>
                            <option value="1 unit">1 unit</option>
                            <option value="100 g">100 g</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
        <div class="new-food-buttons" class="col-12 col-md-2">
            <div class="container-fluid">
                <div class="row">
                    <button class="cancel-new-food col-5 col-md-12 btn btn-danger" type="button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"></path>
                            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"></path>
                        </svg> Cancel
                    </button>
                    <button class="confirm-new-food col-5 col-md-12 btn btn-success" type="submit">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check" viewBox="0 0 16 16">
                        <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
                        </svg> Create
                    </button>
                </div>
            </div>
        </div>
    </div>
    `;
    food.appendChild(newFood);
}



document.addEventListener("DOMContentLoaded", () => {

    const mealsList = document.getElementById("meals-list");
    let uniqueIdCounter = 0;

    document.getElementById("create-meal-button").addEventListener("click", () => {
        createMeal(mealsList, uniqueIdCounter);
        uniqueIdCounter++;
    });

    document.addEventListener("click", (event) => {
        if (event.target.classList.contains("add-food")) {
            const foodsList = event.target.previousElementSibling;
            addFood(foodsList, uniqueIdCounter);
            uniqueIdCounter++;
        }

        else if (event.target.classList.contains("create-new-food")) {
            const food = event.target.closest(".food");
            createFood (food, uniqueIdCounter)
            uniqueIdCounter++;
        }

        else if (event.target.classList.contains("delete-food")) {
            const food = event.target.closest(".food");
            if (food) {
                food.remove();
            }
        }

        /*else if (event.target.classList.contains("confirm-new-food")) { // Successfull form submit
            const food = event.target.closest(".food");
            food.querySelector(".new-food").remove();
            food.appendChild(foodItem);
        }*/
    });
});