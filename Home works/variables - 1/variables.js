`use strict`

console.log("Задача № 1")

let name 
let price

console.log("Задача № 2")

name = 'Телепорт бытовой VZHIH-101';
price = 10000;

console.log(`В наличии имеется: «${name}»`);
console.log(`Стоимость товара ${price} Q`)

console.log("Задача № 3")

let quantity = 2;
let discount = 10;
let value = (price * quantity) * ((100 - discount)/100)
console.log(`Цена покупки составит ${value} Q`)


console.log("Задача № 4")

let budget = 52334224;
let purchasePrice = 6500;
let remainder = budget % purchasePrice
let quantityBuy = (budget - remainder)/purchasePrice

console.log(`Мы можем закупить ${quantityBuy} единиц товара, после закупки на счету останется ${remainder} Q`)