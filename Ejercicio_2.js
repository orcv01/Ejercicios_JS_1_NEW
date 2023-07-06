/*Usa un for para remplazar todas las comidas que no sean veganas con las frutas
del array de frutas. Recuerda no usar */

const fruits = ["Strawberry", "Banana", "Orange", "Apple"];
const foodSchedule = [
  { name: "Heura", isVegan: true },
  { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: true },
];

for (const food in foodSchedule) {
  if (foodSchedule.hasOwnProperty.call(foodSchedule, food)) {
    const element = foodSchedule[food];
    let valor = element.isVegan;
    let nombre = element.name;

    if (valor) {
      console.log("Es vegetal " + nombre);
    } else {
      console.log("No es vegetal " + nombre);
    }
  }
}
