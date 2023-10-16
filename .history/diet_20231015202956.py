class Food:
    def __init__(self, name, calories, proteins, carbs, fats):
        self.name = name
        self.calories = calories
        self.proteins = proteins
        self.carbs = carbs
        self.fats = fats

egg = Food("Egg", 72, 6.3, 0.4, 4.8)                            # 1 unit
banana = Food("Banana", 105, 1.3, 27, 0.4)                      # 1 unit
rice = Food("Rice", 130, 2.7, 28.2, 0.3)                        # 100 g
beans = Food("Beans", 128, 7.5, 24.8, 0.1)                      # 100 g
chicken_grilled = Food("Grilled Chicken", 144, 28, 0, 3.6)      # 100 g
pork_ribs = Food("Pork Ribs", 256, 26.81, 0, 15.71)             # 100 g
pork_loin = Food("Pork Loin", 201, 29.86, 0, 8.11)              # 100 g
pork_linguica = Food("Linguiça", 248, 18.27, 0, 18.9)           # 100 g
guava = Food("Guava", 37, 1.4, 7.88, 0.52)                      # 1 unit
oat = Food("Oat", 389, 16.89, 66.27, 6.9)                       # 100 g
peanut_butter = Food("Peanut Butter", 588, 25.09, 19.56, 50.39) # 100 g
raisins = Food("Raisins", 299, 3.07, 79.18, 0.46)               # 100 g
milk_whole = Food("Whole Milk")
milk_semi_skimmed = Food("Milk")
milk_skimmed = Food("Milk")
milk_soy = Food("Soy Milk", 54, 3.27, 6.28, 1.75)

def main ()
    