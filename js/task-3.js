function getElementWidth(content, padding, border) {
	const totalContent = Number.parseFloat(content);
	const totalPadding = Number.parseFloat(padding);
	const totalBorder = Number.parseFloat(border);
	return totalContent + totalPadding * 2 + totalBorder * 2;
}

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200

// ---------- REMARKS OF THE MENTOR ---------- //

// task-3.js - Improvement/Покращення //

// Не потрібно використовувати "use strict". Воно вже є стандартною поведінкою в сучасному JavaScript.
// Виклики функцій в кінці зайві і можуть бути видалені. Функція вже тестується за допомогою операторів console.log.
