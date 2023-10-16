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

function main() {
    while (true) {
        console.log("Choose an option:\n");
        console.log("1. Add meal");
        console.log("2. Edit meal");
        console.log("3. ");
        
        const choice = prompt("Enter your choice: ");
        switch (choice) {
            case "1":
                // Add meal logic
                break;
            case "2":
                // Edit meal logic
                break;
            case "3":
                // Your other cases
                break;
            default:
                console.log("Invalid choice");
        }
    }
}
