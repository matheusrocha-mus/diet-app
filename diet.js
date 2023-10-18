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

        const mealTotal = document.createElement("div");
        mealTotal.className = "container-fluid";
        mealList.appendChild(mealTotal);

        const totalTitle = document.createElement("h3");
        totalTitle.textContent = "Total:"
        mealTotal.appendChild(totalTitle);

        const totalRow = document.createElement("div");
        totalRow.className = "row";
        mealTotal.appendChild(totalRow)

        const totalColumns = [
            { id: "calories", label: "Calories:", class: "col-12 col-sm-6 col-md-3" },
            { id: "proteins", label: "Proteins:", class: "col-12 col-sm-6 col-md-3" },
            { id: "carbs", label: "Carbs:", class: "col-12 col-sm-6 col-md-3" },
            { id: "fats", label: "Fats:", class: "col-12 col-sm-6 col-md-3" },
        ];

        totalColumns.forEach((column) => {
            const totalColDiv = document.createElement("div");
            totalColDiv.className = column.class;
            const totalLabel = document.createElement("label");
            totalLabel.htmlFor = column.id;
            totalLabel.textContent = column.label;
            const input = document.createElement("input");
            input.type = "text";
            input.id = column.id;
            input.disabled = true;
            totalColDiv.appendChild(totalLabel);
            totalColDiv.appendChild(input);
            totalRow.appendChild(totalColDiv);
        });

        document.getElementById("create-food").addEventListener("click", () => {
            const foodItem = document.createElement("li");
            mealList.insertBefore(foodItem, mealList.lastChild);

            const foodDropdown = document.createElement("div");
            foodDropdown.className = "dropdown";
            foodItem.appendChild(foodDropdown);

            const foodDropdownButton = document.createElement("button");
            foodDropdownButton.className = "btn btn-secondary dropdown-toggle";
            foodDropdownButton.style.width = "100%";
            foodDropdownButton.setAttribute('id', 'dropdownMenuButton1');
            foodDropdownButton.setAttribute('data-bs-toggle', 'dropdown');
            foodDropdownButton.setAttribute('aria-expanded', 'false');
            foodDropdownButton.textContent = 'Food Options';
            foodDropdown.appendChild(foodDropdownButton);

            const foodDropdownMenu = document.createElement("div");
            foodDropdownMenu.className = "dropdown-menu dropdown-menu-dark row";
            foodDropdownMenu.setAttribute('aria-labelledby', 'dropdownMenuButton1');
            foodDropdownButton.appendChild(foodDropdownMenu);

            const newFoodOption = document.createElement("a");
            newFoodOption.className = "dropdown-item";
            newFoodOption.textContent = "New food";
            foodDropdownMenu.appendChild(newFoodOption);

            const foodOptionSeparator = document.createElement("hr");
            foodOptionSeparator.className = "dropdown-divider";
            foodDropdownMenu.appendChild(foodOptionSeparator);

            const foodOptionsContainer = document.createElement("div");
            foodOptionsContainer.className = "container-fluid";
            foodDropdownMenu.appendChild(foodOptionsContainer);

            const foodOptionsRow = document.createElement("div");
            foodOptionsRow.className = "row";
            foodOptionsContainer.appendChild(foodOptionsRow);

            foodItems.forEach(Food => {

                const foodOptionsColumn = document.createElement("div");
                foodOptionsColumn.className = "col-6 col-sm-4 col-md-3 col-lg-2"
                foodOptionsRow.appendChild(foodOptionsColumn);

                const foodOption = document.createElement("a");
                foodOption.className = "dropdown-item";
                foodOption.textContent = Food.name;
                foodOption.addEventListener("click", () => {
                    // Add logic here to handle the selected food item
                    console.log(`Selected: ${Food.name}`);
                });
                foodOptionsColumn.appendChild(foodOption);
            });
        });
    });

        /*new Sortable(mealList, {
            group: "meals", // Ensure the meal is in the same group as others
            animation: 150,
        });*/

    /*var el = document.getElementById('items');
    var sortable = Sortable.create(el);*/

});