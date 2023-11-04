async function fetchFood() {
    const response = await fetch('assets/foodData.json');
    const data = await response.json();
    return data;
}

let foodItems = fetchFood(); // Requeijão: 260, 8, 3.33, 24
console.log(foodItems);

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
                <input class="meal-calories" type="number" step=".01" id="meal-calories${uniqueId}" disabled>
            </div>
            <div class="col-12 col-sm-6 col-md-3">
                <label for="meal-proteins${uniqueId}">Proteins:</label>
                <input class="meal-proteins" type="number" step=".01" id="meal-proteins${uniqueId}" disabled>
            </div>
            <div class="col-12 col-sm-6 col-md-3">
                <label for="meal-carbs${uniqueId}">Carbs:</label>
                <input class="meal-carbs" type="number" step=".01" id="meal-carbs${uniqueId}" disabled>
            </div>
            <div class="col-12 col-sm-6 col-md-3">
                <label for="meal-fats${uniqueId}">Fats:</label>
                <input class="meal-fats" type="number" step=".01" id="meal-fats${uniqueId}" disabled>
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
        <div class="col-12 col-md-6 col-lg-8">
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
        <div class="col-6 col-md-3 col-lg-2">
            <button class="create-new-food btn btn-primary" type="button">
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                    <path d="M435.478-275.478h89.044v-160h160v-89.044h-160v-160h-89.044v160h-160v89.044h160v160ZM480-60.782q-87.522 0-163.906-32.96-76.385-32.96-132.888-89.464-56.504-56.503-89.464-132.888Q60.782-392.478 60.782-480t32.96-163.906q32.96-76.385 89.464-132.888 56.503-56.504 132.888-89.464 76.384-32.96 163.906-32.96t163.906 32.96q76.385 32.96 132.888 89.464 56.504 56.503 89.464 132.888 32.96 76.384 32.96 163.906t-32.96 163.906q-32.96 76.385-89.464 132.888-56.503 56.504-132.888 89.464Q567.522-60.782 480-60.782Zm0-106.001q131.739 0 222.478-90.739T793.217-480q0-131.739-90.739-222.478T480-793.217q-131.739 0-222.478 90.739T166.783-480q0 131.739 90.739 222.478T480-166.783ZM480-480Z"/>
                </svg> Create food
            </button>
        </div>
        <div class="col-6 col-md-3 col-lg-2">
            <button class="delete-food btn btn-danger" type="button">
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
    const newFood = document.createElement("form");
    newFood.className = "new-food container-fluid needs-validation";
    newFood.setAttribute("novalidate", "");
    newFood.innerHTML = `
    <div class="row">
        <div class="new-food-form col-12 col-lg-10">
            <div class="row">
                <div class="col-12 col-lg-4 d-flex align-items-center">
                    <label for="new-food-name${uniqueId}">Name:</label>
                    <input class="form-control new-food-name" required type="text" id="new-food-name${uniqueId}" placeholder="Food name">
                </div>
                <div class="col-12 col-lg-4 d-flex align-items-center">
                    <label for="new-food-calories${uniqueId}">Calories:</label>
                    <input class="form-control new-food-calories" required type="number" step=".01" id="new-food-calories${uniqueId}" placeholder="In grams, only numbers">
                </div>
                <div class="col-12 col-lg-4 d-flex align-items-center">
                    <label for="new-food-proteins${uniqueId}">Proteins:</label>
                    <input class="form-control new-food-proteins" required type="number" step=".01" id="new-food-proteins${uniqueId}" placeholder="In grams, only numbers">
                </div>
                <div class="col-12 col-lg-4 d-flex align-items-center">
                    <label for="new-food-carbs${uniqueId}">Carbs:</label>
                    <input class="form-control new-food-carbs" required type="number" step=".01" id="new-food-carbs${uniqueId}" placeholder="In grams, only numbers">
                </div>
                <div class="col-12 col-lg-4 d-flex align-items-center">
                    <label for="new-food-fats${uniqueId}">Fats:</label>
                    <input class="form-control new-food-fats" required type="number" step=".01" id="new-food-fats${uniqueId}" placeholder="In grams, only numbers">
                </div>
                <div class="col-12 col-lg-4 d-flex align-items-center">
                    <label for="new-food-portion${uniqueId}">Portion:</label>
                    <select class="form-select new-food-portion" required id="new-food-portion${uniqueId}">
                        <option selected disabled value="">Select portion type</option>
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

function finishFood (food, uniqueIdCounter, name, calories, proteins, carbs, fats, portion) {
    const uniqueId = `${uniqueIdCounter}`;
    const foodInfo = document.createElement("form");
    foodInfo.className = "food-info container-fluid needs-validation";
    foodInfo.setAttribute("novalidate", "");
    foodInfo.innerHTML = `
    <div class="row">
        <div class="food-info-display col-12 col-lg-9">
            <div class="row">
                <div class="col-12 col-lg-8 d-flex align-items-center">
                    <input value="${name}" class="form-control" disabled type="text">
                </div>
                <div class="col-6 col-lg-4 d-flex align-items-center">
                    <label for="food-calories${uniqueId}">Calories:</label>
                    <input value="${calories}" class="form-control" disabled type="number" step=".01" id="food-calories${uniqueId}">
                </div>
                <div class="col-6 col-lg-4 d-flex align-items-center">
                    <label for="food-proteins${uniqueId}">Proteins:</label>
                    <input value="${proteins}" class="form-control" disabled type="number" step=".01" id="food-proteins${uniqueId}">
                </div>
                <div class="col-6 col-lg-4 d-flex align-items-center">
                    <label for="food-carbs${uniqueId}">Carbs:</label>
                    <input value="${carbs}" class="form-control" disabled type="number" step=".01" id="food-carbs${uniqueId}">
                </div>
                <div class="col-6 col-lg-4 d-flex align-items-center">
                    <label for="food-fats${uniqueId}">Fats:</label>
                    <input value="${fats}" class="form-control" disabled type="number" step=".01" id="food-fats${uniqueId}">
                </div>
            </div>
        </div>
        <div class="food-info-interactions col-12 col-lg-3">
            <div class="row">
                <div class="col-7 col-lg-12 d-flex align-items-center">
                    <label for="food-quantity${uniqueId}">Quantity:</label>
                    <input class="form-control" type="number" step=".01" id="food-quantity${uniqueId}">
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
    if (portion == "100 g") {
        document.getElementById(`food-quantity${uniqueId}`).setAttribute("placeholder", "In grams");
    }

    else if (portion == "1 unit") {
        document.getElementById(`food-quantity${uniqueId}`).setAttribute("placeholder", "In units");
    }

    food.appendChild(foodInfo);
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

        else if (event.target.classList.contains("cancel-new-food")) {
            event.target.closest(".food").querySelector(".new-food").classList.add("d-none");
            event.target.closest(".food").querySelector(".food-item-row").classList.remove("d-none");
        }

        else if (event.target.classList.contains("create-new-food")) {
            const food = event.target.closest(".food");
            let newFoodForm = food.querySelector(".new-food");
            event.target.closest(".food").querySelector(".food-item-row").classList.add("d-none");

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

                // Retrieve input values
                const name = newFoodForm.querySelector(".new-food-name").value;
                const calories = parseFloat(newFoodForm.querySelector(".new-food-calories").value);
                const proteins = parseFloat(newFoodForm.querySelector(".new-food-proteins").value);
                const carbs = parseFloat(newFoodForm.querySelector(".new-food-carbs").value);
                const fats = parseFloat(newFoodForm.querySelector(".new-food-fats").value);
                const portion = newFoodForm.querySelector(".new-food-portion").value;
        
                // Create a new food item object
                const newFoodItem = {
                    name,
                    calories,
                    proteins,
                    carbs,
                    fats,
                    portion
                };
        
                // Add the new food item to the foodItems array
                foodItems.push(newFoodItem);
        
                // Save the updated foodItems array back to the JSON file
                saveFoodData();

                // Logic to submit form values of the created food
                food.querySelector(".new-food").remove();
                finishFood(food, uniqueIdCounter, name, calories, proteins, carbs, fats, portion);
                // Logic to get the values from the created food
                uniqueIdCounter++;

            } else {
                event.preventDefault();
                event.stopPropagation();
                newFoodForm.classList.add('was-validated');
            }
        }

        else if (event.target.classList.contains("dropdown-item")) {
            const food = event.target.closest(".food");
            food.querySelector(".new-food").remove();
            finishFood(food, uniqueIdCounter, name, calories, proteins, carbs, fats, portion);
            // Logic to get the values from the selected food
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