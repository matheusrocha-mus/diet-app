/*fetch(`${apiURL}/` + 17,  {
    method: 'DELETE'
})*/

const apiURL = 'https://dietapp-server.matheusrocha-mu.repl.co/food';

async function fetchFood() {
    try {
        const response = await fetch(`${apiURL}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching JSON::', error);
    }
}

let foodItems = [];

function createMeal (mealsList) {
    const meal = document.createElement("li");
    meal.className = "meal list-group-item";
    meal.innerHTML = `
    <input type="text" placeholder="Enter meal name" class="meal-title form-control-dark fs-3 text-black">
    <ul class="foods-list list-group w-100 mt-3">
        <!--Generated foods will be appended here-->
    </ul>
    <button class="add-food btn btn-dark mt-3">Add food</button>
    <div class="meal-total container-fluid mt-3">
        <h3>Total:</h3>
        <div class="row">
            <div class="col-12 col-sm-6 col-md-3 d-flex align-items-center">
                <div class="pe-2">Calories:</div>
                <div class="meal-calories"></div>
            </div>
            <div class="col-12 col-sm-6 col-md-3 d-flex align-items-center">
                <div class="pe-2">Proteins:</div>
                <div class="meal-proteins"></div>
            </div>
            <div class="col-12 col-sm-6 col-md-3 d-flex align-items-center">
                <div class="pe-2">Carbs:</div>
                <div class="meal-carbs"></div>
            </div>
            <div class="col-12 col-sm-6 col-md-3 d-flex align-items-center">
                <div class="pe-2">Fats:</div>
                <div class="meal-fats"></div>
            </div>
        </div>
    </div>
    `;
    mealsList.appendChild(meal);
}

function addFood (foodsList, uniqueIdCounter) {
    const uniqueId = `${uniqueIdCounter}`;
    const food = document.createElement("li");
    food.className = "food container-fluid list-group-item list-group-item-dark p-4 rounded";
    food.innerHTML = `
    <div class="food-dropdown row">
        <div class="col-12 col-md-6 col-lg-8">
            <div class="food-options-dropdown dropdown col-12 col-sm-10 w-100">
                <button class="btn btn-secondary dropdown-toggle w-100" id="food-dropdown-button${uniqueId}" data-bs-toggle="dropdown" aria-expanded="false">Food Options
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
        <div class="col-6 col-md-3 col-lg-2">
            <button class="create-new-food btn btn-primary w-100" type="button">
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                    <path d="M435.478-275.478h89.044v-160h160v-89.044h-160v-160h-89.044v160h-160v89.044h160v160ZM480-60.782q-87.522 0-163.906-32.96-76.385-32.96-132.888-89.464-56.504-56.503-89.464-132.888Q60.782-392.478 60.782-480t32.96-163.906q32.96-76.385 89.464-132.888 56.503-56.504 132.888-89.464 76.384-32.96 163.906-32.96t163.906 32.96q76.385 32.96 132.888 89.464 56.504 56.503 89.464 132.888 32.96 76.384 32.96 163.906t-32.96 163.906q-32.96 76.385-89.464 132.888-56.503 56.504-132.888 89.464Q567.522-60.782 480-60.782Zm0-106.001q131.739 0 222.478-90.739T793.217-480q0-131.739-90.739-222.478T480-793.217q-131.739 0-222.478 90.739T166.783-480q0 131.739 90.739 222.478T480-166.783ZM480-480Z"/>
                </svg> Create food
            </button>
        </div>
        <div class="col-6 col-md-3 col-lg-2">
            <button class="delete-food btn btn-danger w-100" type="button">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
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
        foodOptionsColumn.className = "col-12 col-sm-6 col-lg-4 col-xl-3"
        foodOptionsRow.appendChild(foodOptionsColumn);
        const foodOption = document.createElement("a");
        foodOption.className = "dropdown-item fs-6";
        foodOption.textContent = Food.foodName;
        foodOptionsColumn.appendChild(foodOption);
    });
}

function createFood (food, uniqueIdCounter) {
    const uniqueId = `${uniqueIdCounter}`;
    const newFood = document.createElement("form");
    newFood.className = "new-food container-fluid needs-validation";
    newFood.setAttribute("novalidate", "");
    newFood.innerHTML = `
    <div class="row">
        <div class="new-food-form col-12 col-lg-10">
            <div class="row">
                <div class="col-12 col-lg-4 d-flex align-items-center">
                    <label class="me-2" for="new-food-name${uniqueId}">Name:</label>
                    <input class="form-control new-food-name" required type="text" id="new-food-name${uniqueId}" placeholder="Food name">
                </div>
                <div class="col-12 col-lg-4 d-flex align-items-center">
                    <label class="me-2" for="new-food-calories${uniqueId}">Calories:</label>
                    <input class="form-control new-food-calories" required type="number" step=".01" id="new-food-calories${uniqueId}" placeholder="In grams, only numbers">
                </div>
                <div class="col-12 col-lg-4 d-flex align-items-center">
                    <label class="me-2" for="new-food-proteins${uniqueId}">Proteins:</label>
                    <input class="form-control new-food-proteins" required type="number" step=".01" id="new-food-proteins${uniqueId}" placeholder="In grams, only numbers">
                </div>
                <div class="col-12 col-lg-4 d-flex align-items-center">
                    <label for="new-food-carbs${uniqueId}">Carbs:</label>
                    <input class="form-control new-food-carbs" required type="number" step=".01" id="new-food-carbs${uniqueId}" placeholder="In grams, only numbers">
                </div>
                <div class="col-12 col-lg-4 d-flex align-items-center">
                    <label class="me-2" for="new-food-fats${uniqueId}">Fats:</label>
                    <input class="form-control new-food-fats" required type="number" step=".01" id="new-food-fats${uniqueId}" placeholder="In grams, only numbers">
                </div>
                <div class="col-12 col-lg-4 d-flex align-items-center">
                    <label class="me-2" for="new-food-portion${uniqueId}">Portion:</label>
                    <select class="form-select new-food-portion" required id="new-food-portion${uniqueId}">
                        <option selected disabled>Select portion type</option>
                        <option value="1 unit">1 unit</option>
                        <option value="100 g">100 g</option>
                    </select>
                </div>
            </div>
        </div>
        <div class="new-food-buttons col-12 col-lg-2">
            <div class="row">
                <button class="cancel-new-food col-5 col-lg-12 btn btn-secondary" type="button">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                        <path d="M256-181.912 181.912-256l224-224-224-224L256-778.088l224 224 224-224L778.088-704l-224 224 224 224L704-181.912l-224-224-224 224Z"/>
                    </svg> Cancel
                </button>
                <button class="confirm-new-food col-5 col-lg-12 btn btn-success" type="submit">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-check" viewBox="0 0 16 16">
                        <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
                    </svg> Create
                </button>
            </div>
        </div>
    </div>
    `;
    food.appendChild(newFood);
}

async function submitNewFood (food, newFoodForm, uniqueIdCounter) {
    const id = foodItems.length + 1;
    const foodName = newFoodForm.querySelector(".new-food-name").value;
    const foodCalories = parseFloat(newFoodForm.querySelector(".new-food-calories").value);
    const foodProteins = parseFloat(newFoodForm.querySelector(".new-food-proteins").value);
    const foodCarbs = parseFloat(newFoodForm.querySelector(".new-food-carbs").value);
    const foodFats = parseFloat(newFoodForm.querySelector(".new-food-fats").value);
    const foodPortion = newFoodForm.querySelector(".new-food-portion").value;

    const existingFood = foodItems.find((item) => {
        const itemName = item.foodName.toLowerCase().replace(/[\s-]/g, '');
        return itemName === foodName.toLowerCase().replace(/[\s-]/g, '');;
    });

    if (existingFood) {
        alert("A food with the same name already exists in the database.");

        const inputFields = newFoodForm.querySelectorAll('input');
        inputFields.forEach((input) => {
            input.value = '';
        });
    }

    else {
        const requestBody = JSON.stringify({
            id,
            foodName,
            foodCalories,
            foodProteins,
            foodCarbs,
            foodFats,
            foodPortion
        });

        console.log(requestBody);

        try {
            const response = await fetch(`${apiURL}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: requestBody,
            });

            if (response.ok) {
                console.log('Successfully added new food to database');
                fetchFood().then((data) => {
                    foodItems = data;
                });
            } else {
                console.error('Error while adding new food:', response.statusText);
            }
        } catch (error) {
            console.error('Error fetching JSON:', error);
        }

        food.querySelector(".new-food").remove();
        finishFood(food, uniqueIdCounter, foodName, foodCalories, foodProteins, foodCarbs, foodFats, foodPortion);
        uniqueIdCounter++;
    }
}

function finishFood (food, uniqueIdCounter, name, calories, proteins, carbs, fats, portion) {
    let portionPlaceholder = "";
    if (portion == "100 g") {
        portionPlaceholder = "(In grams)";
    }
    else if (portion == "1 unit") {
        portionPlaceholder = "(In units)";
    }
    const uniqueId = `${uniqueIdCounter}`;
    const foodInfo = document.createElement("form");
    foodInfo.className = "food-info container-fluid needs-validation";
    foodInfo.setAttribute("novalidate", "");
    foodInfo.innerHTML = `
    <div class="row">
        <div class="food-info-display col-12 col-lg-9">
            <div class="row">
                <div class="col-12 col-lg-8 d-flex align-items-center">
                    <input value="${name}" class="food-info-name form-control" disabled type="text">
                </div>
                <div class="col-6 col-lg-4 d-flex align-items-center">
                    <label class="me-2" for="food-calories${uniqueId}">Calories:</label>
                    <input value="${calories}" class="food-info-calories form-control" disabled type="number" step=".01" id="food-calories${uniqueId}">
                </div>
                <div class="col-6 col-lg-4 d-flex align-items-center">
                    <label class="me-2" for="food-proteins${uniqueId}">Proteins:</label>
                    <input value="${proteins}" class="food-info-proteins form-control" disabled type="number" step=".01" id="food-proteins${uniqueId}">
                </div>
                <div class="col-6 col-lg-4 d-flex align-items-center">
                    <label class="me-2" for="food-carbs${uniqueId}">Carbs:</label>
                    <input value="${carbs}" class="food-info-carbs form-control" disabled type="number" step=".01" id="food-carbs${uniqueId}">
                </div>
                <div class="col-6 col-lg-4 d-flex align-items-center">
                    <label class="me-2" for="food-fats${uniqueId}">Fats:</label>
                    <input value="${fats}" class="food-info-fats form-control" disabled type="number" step=".01" id="food-fats${uniqueId}">
                </div>
            </div>
        </div>
        <div class="food-info-interactions col-12 col-lg-3">
            <div class="row">
                <div class="col-7 col-lg-12 d-flex align-items-center">
                    <label class="me-2" for="food-quantity${uniqueId}">Quantity:</label>
                    <input class="food-info-quantity form-control" type="number" step=".01" id="food-quantity${uniqueId}" placeholder="${portionPlaceholder}">
                </div>
                <button class="delete-food col-5 col-lg-12 btn btn-danger" type="button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"></path>
                        <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"></path>
                    </svg> Delete
                </button>
            </div>
        </div>
    </div>
    `;
    food.appendChild(foodInfo);

    const quantityInput = foodInfo.querySelector(".food-info-quantity");

    quantityInput.addEventListener("input", function() {
        const quantity = parseFloat(quantityInput.value) || 0;

        let updatedCalories = 0;
        let updatedProteins = 0;
        let updatedCarbs = 0;
        let updatedFats = 0;

        if (portion == "1 unit") {
            updatedCalories = calories * quantity;
            updatedProteins = proteins * quantity;
            updatedCarbs = carbs * quantity;
            updatedFats = fats * quantity;
        }

        else if (portion == "100 g") {
            updatedCalories = (calories / 100) * quantity;
            updatedProteins = (proteins / 100) * quantity;
            updatedCarbs = (carbs / 100) * quantity;
            updatedFats = (fats / 100) * quantity;
        }

        const caloriesInput = foodInfo.querySelector(".food-info-calories");
        const proteinsInput = foodInfo.querySelector(".food-info-proteins");
        const carbsInput = foodInfo.querySelector(".food-info-carbs");
        const fatsInput = foodInfo.querySelector(".food-info-fats");

        caloriesInput.value = updatedCalories.toFixed(2);
        proteinsInput.value = updatedProteins.toFixed(2);
        carbsInput.value = updatedCarbs.toFixed(2);
        fatsInput.value = updatedFats.toFixed(2);

        const meal = food.closest(".meal");
        updateMealTotal(meal);
    });
}

function updateMealTotal(meal) {
    const mealTotalCalories = meal.querySelector(".meal-calories");
    const mealTotalProteins = meal.querySelector(".meal-proteins");
    const mealTotalCarbs = meal.querySelector(".meal-carbs");
    const mealTotalFats = meal.querySelector(".meal-fats");

    let totalMealCalories = 0;
    let totalMealProteins = 0;
    let totalMealCarbs = 0;
    let totalMealFats = 0;

    const foodItems = meal.querySelectorAll(".food-info");

    foodItems.forEach((foodItem) => {
        const mealCalories = parseFloat(foodItem.querySelector(".food-info-calories").value) || 0;
        const mealProteins = parseFloat(foodItem.querySelector(".food-info-proteins").value) || 0;
        const mealCarbs = parseFloat(foodItem.querySelector(".food-info-carbs").value) || 0;
        const mealFats = parseFloat(foodItem.querySelector(".food-info-fats").value) || 0;

        totalMealCalories += mealCalories;
        totalMealProteins += mealProteins;
        totalMealCarbs += mealCarbs;
        totalMealFats += mealFats;
    });

    mealTotalCalories.textContent = totalMealCalories.toFixed(2);
    mealTotalProteins.textContent = totalMealProteins.toFixed(2);
    mealTotalCarbs.textContent = totalMealCarbs.toFixed(2);
    mealTotalFats.textContent = totalMealFats.toFixed(2);

    updateTotal(meals);
}

function updateTotal(meals) {
    let totalCalories = 0;
    let totalProteins = 0;
    let totalCarbs = 0;
    let totalFats = 0;

    meals.forEach((meal) => {
        totalCalories += parseFloat(meal.querySelector(".meal-calories").textContent) || 0;
        totalProteins += parseFloat(meal.querySelector(".meal-proteins").textContent) || 0;
        totalCarbs += parseFloat(meal.querySelector(".meal-carbs").textContent) || 0;
        totalFats += parseFloat(meal.querySelector(".meal-fats").textContent) || 0;
    });

    const calories = document.getElementById("calories");
    const proteins = document.getElementById("proteins");
    const carbs = document.getElementById("carbs");
    const fats = document.getElementById("fats");

    calories.textContent = totalCalories.toFixed(2);
    proteins.textContent = totalProteins.toFixed(2);
    carbs.textContent = totalCarbs.toFixed(2);
    fats.textContent = totalFats.toFixed(2);
}

const meals = [];

document.addEventListener("DOMContentLoaded", () => {
    fetchFood().then((data) => {
        foodItems = data;
    });

    const mealsList = document.getElementById("meals-list");
    let uniqueIdCounter = 0;

    document.getElementById("create-meal-button").addEventListener("click", () => {
        createMeal(mealsList);
        meals.push(document.querySelector("#meals-list .meal:last-child"));
    });

    document.addEventListener("click", (event) => {
        if (event.target.classList.contains("add-food")) {
            const foodsList = event.target.previousElementSibling;
            addFood(foodsList, uniqueIdCounter);
            uniqueIdCounter++;
        }

        else if (event.target.classList.contains("cancel-new-food")) {
            event.target.closest(".food").querySelector(".new-food").classList.add("d-none");
            event.target.closest(".food").querySelector(".food-dropdown").classList.remove("d-none");
        }

        else if (event.target.classList.contains("create-new-food")) {
            const food = event.target.closest(".food");
            let newFoodForm = food.querySelector(".new-food");
            event.target.closest(".food").querySelector(".food-dropdown").classList.add("d-none");

            if (newFoodForm) {
                newFoodForm.classList.remove("d-none");
            }

            else {
                createFood (food, uniqueIdCounter);
                uniqueIdCounter++;
            }
        }

        else if (event.target.classList.contains("confirm-new-food"))  {
            const food = event.target.closest(".food");
            const newFoodForm = food.querySelector(".new-food");

            if (newFoodForm.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
                submitNewFood(food, newFoodForm, uniqueIdCounter);

            } else {
                event.preventDefault();
                event.stopPropagation();
                newFoodForm.classList.add('was-validated');
            }
        }

        else if (event.target.classList.contains("dropdown-item")) {
            const food = event.target.closest(".food");
            food.querySelector(".food-dropdown").remove();

            const selectedFoodName = event.target.textContent;
            const selectedFoodItem = foodItems.find((item) => item.foodName === selectedFoodName);

            const foodName = selectedFoodItem.foodName;
            const foodCalories = parseFloat(selectedFoodItem.foodCalories);
            const foodProteins = parseFloat(selectedFoodItem.foodProteins);
            const foodCarbs = parseFloat(selectedFoodItem.foodCarbs);
            const foodFats = parseFloat(selectedFoodItem.foodFats);
            const foodPortion = selectedFoodItem.foodPortion;

            finishFood(food, uniqueIdCounter, foodName, foodCalories, foodProteins, foodCarbs, foodFats, foodPortion);
            uniqueIdCounter++;
        }

        else if (event.target.classList.contains("delete-food")) {
            const food = event.target.closest(".food");
            if (food) {
                food.remove();
            }
        }
    });
});