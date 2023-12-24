function getShippingMessage(country, price, deliveryFee) {
	const totalPrice = `Shipping to ${country} will cost ${price + deliveryFee} credits`;
	return totalPrice;
}

console.log(getShippingMessage("Australia", 120, 50)); // "Shipping to Australia will cost 170 credits"
console.log(getShippingMessage("Germany", 80, 20)); // "Shipping to Germany will cost 100 credits"
console.log(getShippingMessage("Sweden", 100, 20)); // "Shipping to Sweden will cost 120 credits"

// ---------- REMARKS OF THE MENTOR ---------- //

// task-2.js - Well executed moments/Добре виконані моменти //

// Ти оголосив функцію getShippingMessage з правильними параметрами.
// Ти використовував шаблонні літерали для створення рядка повідомлення про доставку.
// Ти повернув отриманий рядок, як вихідні дані функції.
