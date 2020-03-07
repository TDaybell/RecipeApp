var express = require('express');
var app = express();

class recipe{
    title
    ingredients
    steps
    constructor(title,ingredients,steps){
        this.title = title;
        this.ingredients = ingredients
        this.steps = steps
    }
}

var ListOfIngredientsForMashedPotatos = 
["1 pound of potatoes",
"2 cups of milk",
"salt and pepper to taste", 
"1/2 cup of sour cream (optional)", 
"1 stick of butter"]
var ListOfStepsForMashedPotatos = 
["Fill pot with water and 1/2 cup of salt and begin to boil.",
"Peel potatoes if desired and but into fourths to cook faster.",
"Boil potatoes for 30 minutes until fork tender." ,
"Drain potatoes",
"Mash potatoes, butter, milk, sour cream, and salt and pepper until desired thickness",
"Add desired gravy and serve."]


var MashedPotatos = new recipe("Mashed Potatos",ListOfIngredientsForMashedPotatos,ListOfStepsForMashedPotatos)

// this is meatloaf
var ListOfIngredientsForMeatLoaf = 
["2 pound of ground beef",
"1 large egg",
"Salt and Pepper to taste", 
"Garlic (optional)", 
"1 package of crackers",
"1 bottle of Ketchup"]
var ListOfStepsForMeatLoaf = 
["Preheat oven to 350 degrees",
"Mash crackers until dust",
"Mix together all ingredients until firm." ,
"Place meat mixture into glass baking dish.",
"Spread ketchup onto mixture and cover with tin foil.",
"Bake for 1 hour.",
"Let cool and serve."]


var MeatLoaf = new recipe("MeatLoaf",ListOfIngredientsForMeatLoaf,ListOfStepsForMeatLoaf)

//this is  the strawberry short cake

var ListOfIngredientsForStrawberryShortcake = 
["1 package pound cake",
"3 cups of strawberries, sliced, sweetend",
"1 (8oz) cool whip"]
var ListofStepsForStrawberryShortcake = 
["Cut cake into 14 slices. Place 7 of the slices on individual plates.",
"Spoon about 3 Tablespoons of strawberries over each cake slice.",
"Top each with 1/4 cup cool whip." ,
"Repeat"]


var StrawberryShortCake = new recipe("Strawberry Shortcake",ListOfIngredientsForStrawberryShortcake,ListofStepsForStrawberryShortcake)

var RecipeList = [MashedPotatos,MeatLoaf,StrawberryShortCake]

function RenderRecipeToPage(res,Recipe){
        res.write("<h1>"+Recipe.title+"</h1>")
        res.write("Ingredients");
        res.write("<ul>")
        for(let ingredient of Recipe.ingredients){
            res.write("<li>"+ingredient+"</li>")
        }
        res.write("</ul>")
        res.write("Steps");
        res.write("<ol>")
        for(let step of Recipe.steps){
            res.write("<li>"+step+"</li>")
        }
        res.write("</ol>")
        res.end()
    }

app.get('/mashedpotatos',(req,res)=>{
    RenderRecipeToPage(res, RecipeList[0])
})

app.get('/meatloaf',(req,res)=>{
    RenderRecipeToPage(res, RecipeList[1])
})
app.get('/strawberryshortcake',(req,res)=>{
    RenderRecipeToPage(res, RecipeList[2])
})




app.listen(80, () => {
    console.log("Development Server running on port "+80);
})



