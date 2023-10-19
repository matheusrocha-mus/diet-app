/*import Sortable from 'sortablejs';*/  

let foodItems = [];

fetch('foodData.json')
    .then((response) => response.json())
    .then((data) => {
        foodItems = data;
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
                    console.log(`Selected: ${Food.name}`);
                    /*mealTotalCalories += Food.calories;
                    mealTotalProteins += Food.proteins;
                    mealTotalCarbs += Food.carbs;
                    mealTotalFats += Food.fats;*/
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