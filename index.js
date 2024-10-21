var laptop = {
  brand: "Apple MacBook",
  model: "Air",
  year: 2023,
  isTouchscreen: true,
};
console.log(laptop);

// 2.Accesarea proprietatilor

console.log("The brand is: ", laptop.brand);
console.log("The model is: ", laptop.model);

console.log("The brand is: ", laptop["brand"]);
console.log("The model is: ", laptop["model"]);

// 3.Modificarea proprietăților
laptop["year"] = 2024;
console.log("The new laptop is:", laptop);

laptop.isTouchscreen = true;
laptop["isTouchscreen"] = false;
console.log("The new laptop is: ", laptop);

// 4. Adaugarea unei noi proprietati
var myNewProperty = "color";
laptop.color = "Gold";
laptop[myNewProperty] = "Gold";
console.log("The color of laptop is: ", laptop.color);

// 5.Stergerea unie proprieteti
delete laptop.year;
console.log("Laptop after detelete is: ", laptop);

//6. Testarea existentei unui proprietati
console.log(
  laptop.model ? "Yey, we have a laptop! " : "Oh no, we don t have a laptop"
);

//7.Obiecte ca parametrii in functii
var phone = {
  brand: "Apple",
  model: "15 Pro",
  storage: "512 GB",
};
var has5G = true;

function displayPhone(phoneObject, has5G) {
  phoneObject.has5G = true;
  console.log("This is my old phone, " + phoneObject + "!");
  console.log("My phone is: ", phoneObject);
}
displayPhone(phone, has5G);
console.log("My phone is: ", phone);

// 8.Clonarea obiectelor
function changePhoneBrand(phoneObject) {
  var newPhone = Object.assign({}, phoneObject);
  newPhone["brand"] = "Samsung";

  return newPhone;
}
console.log("Phone:", phone);
console.log("Phone after add: ", changePhoneBrand(phone));

// 9.Funcție pentru compararea obiectelor
var car1 = {
  color: "red",
  year: 2019,
  brend: "BMW",
};

var car2 = {
  color: "black",
  year: 2019,
  brend: "BMW",
};

function compareObject(car) {
  return car.color && car.year && car.brend;
}

var compareObjectcar1 = compareObject(car1);
var compareObjectcar2 = compareObject(car2);

console.log("is the car1 same? " + compareObjectcar1);
console.log("is the car2 same? " + compareObjectcar2);
