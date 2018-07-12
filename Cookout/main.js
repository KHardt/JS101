const hamburger = {
	name: 'Hamburger',
	type: 'beef',
	cooked: false,
};
const zucchini = {
	name: 'Zucchini',
	type: 'vegetable',
	cooked: false,
};
const chickenBreast = {
	name: 'Chicken Breast',
	type: 'chicken',
	cooked: false,
};
const corn = {
	name: 'Corn',
	type: 'vegetable',
	cooked: false,
};
const steak = {
	name: 'Steak',
	type: 'beef',
	cooked: false,
};

const uncookedFood = [hamburger, zucchini, chickenBreast, corn, steak];

const cookedFood = [];

const grill = currentObject => {
	//return cooked food set to true
	currentObject.cooked = true;
	
	// push the newly cooked object (still represented by 'currentObject') into the empty array cookedFood
    cookedFood.push(currentObject);
};

for (let i = 0; i < uncookedFood.length; i++) {
	console.log(uncookedFood[i]);
};

let currentObject = uncookedFood[i];

grill(hamburger);
console.log("CookedFood array after our loop ran!", cookedFood);
