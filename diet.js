/*import Sortable from 'sortablejs';*/  

class Food {
    constructor(name, calories, proteins, carbs, fats) {
        this.name = name;
        this.calories = calories;
        this.proteins = proteins;
        this.carbs = carbs;
        this.fats = fats;
    }
}

const egg = new Food("Egg", 72, 6.3, 0.4, 4.8); // 1 unit
const banana = new Food("Banana", 105, 1.3, 27, 0.4); // 1 unit
const rice = new Food("Rice", 130, 2.7, 28.2, 0.3); // 100 g
const beans = new Food("Beans", 128, 7.5, 24.8, 0.1); // 100 g
const chickenGrilled = new Food("Grilled Chicken", 144, 28, 0, 3.6); // 100 g
const porkRibs = new Food("Pork Ribs", 256, 26.81, 0, 15.71); // 100 g
const porkLoin = new Food("Pork Loin", 201, 29.86, 0, 8.11); // 100 g
const porkLinguica = new Food("Linguiça", 248, 18.27, 0, 18.9); // 100 g
const guava = new Food("Guava", 37, 1.4, 7.88, 0.52); // 1 unit
const oat = new Food("Oat", 389, 16.89, 66.27, 6.9); // 100 g
const peanutButter = new Food("Peanut Butter", 588, 25.09, 19.56, 50.39); // 100 g
const raisins = new Food("Raisins", 299, 3.07, 79.18, 0.46); // 100 g
const milkWhole = new Food("Whole Milk", 60, 3.22, 4.52, 3.25); // 100 g
const milkSemiSkimmed = new Food("Semi-Skimmed Milk"); // 100 g
const milkSkimmed = new Food("Skimmed Milk"); // 100 g
const milkSoy = new Food("Soy Milk", 54, 3.27, 6.28, 1.75); // 100 g

const foodItems = [
    egg, banana, rice, beans, chickenGrilled, porkRibs, porkLoin, porkLinguica,
    guava, oat, peanutButter, raisins, milkWhole, milkSemiSkimmed, milkSkimmed, milkSoy
];

document.addEventListener("DOMContentLoaded", () => {

    const mealsContainer = document.getElementById("meals-container");
    /*new Sortable(mealsContainer, {
        group: "meals",
        animation: 150,
    });*/

    document.getElementById("create-meal").addEventListener("click", () => {
        const mealList = document.createElement("ul");
        mealList.className = "sortable"; // Make it sortable
        /*mealList.textContent = "Meal";*/
        mealsContainer.appendChild(mealList);

        const mealTitle = document.createElement("input");
        mealTitle.className = "form-control-dark";
        mealTitle.setAttribute('id', 'floatingInput');
        mealTitle.setAttribute('type', 'text');
        mealTitle.setAttribute('placeholder', 'Meal Name');
        mealList.appendChild(mealTitle);
        
        const createFood = document.createElement("button");
        createFood.className = "btn btn-dark";
        createFood.setAttribute('id', 'create-food');
        createFood.textContent = 'Create Food';
        mealList.appendChild(createFood);

        document.getElementById("create-food").addEventListener("click", () => {
            const foodItem = document.createElement("li");
            mealList.insertBefore(foodItem, mealList.lastChild);

            const foodDropdown = document.createElement("div");
            foodDropdown.className = "dropdown";
            foodItem.appendChild(foodDropdown);

            const foodDropdownButton = document.createElement("button");
            foodDropdownButton.className = "btn btn-secondary dropdown-toggle";
            foodDropdownButton.setAttribute('id', 'dropdownMenuButton1');
            foodDropdownButton.setAttribute('data-bs-toggle', 'dropdown');
            foodDropdownButton.setAttribute('aria-expanded', 'false');
            foodDropdownButton.textContent = 'Food Options';
            foodDropdown.appendChild(foodDropdownButton);

            const foodDropdownMenu = document.createElement("div");
            foodDropdownMenu.className = "dropdown-menu dropdown-menu-dark";
            foodDropdownMenu.setAttribute('aria-labelledby', 'dropdownMenuButton1');
            foodDropdownButton.appendChild(foodDropdownMenu);

            const newFoodOption = document.createElement("a");
            newFoodOption.className = "dropdown-item";
            newFoodOption.textContent = "New food";
            foodDropdownMenu.appendChild(newFoodOption);

            const foodOptionSeparator = document.createElement("hr");
            foodOptionSeparator.className = "dropdown-divider";
            foodDropdownMenu.appendChild(foodOptionSeparator);
        
            foodItems.forEach(Food => {
                const foodOption = document.createElement("a");
                foodOption.className = "dropdown-item";
                foodOption.textContent = Food.name; // Use the name of the food
                // Attach an event listener for when the user selects this food
                foodOption.addEventListener("click", () => {
                    // Add logic here to handle the selected food item
                    console.log(`Selected: ${Food.name}`);
                });
                foodDropdownMenu.appendChild(foodOption);
            });
        });



    });

        /*new Sortable(mealList, {
            group: "meals", // Ensure the meal is in the same group as others
            animation: 150,
        });*/

    /* Add food items to the meal
    function addFoodToMeal(mealList, foodName, foodCalories, foodProteins, foodCarbs, foodFats) {
        const foodItem = document.createElement("li");
        foodItem.textContent = foodName;
        // Add more elements, including dropdowns, inputs, etc.
        mealList.appendChild(foodItem);
    }

    var el = document.getElementById('items');
    var sortable = Sortable.create(el);*/

});