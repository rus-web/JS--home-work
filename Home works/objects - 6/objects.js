`use strict`;
var positions = [
    'Телепорт бытовой VZHIH-101',
    'Отвертка ультразвуковая WHO-D',
    'Ховерборд Mattel 2016',
    'Нейтрализатор FLASH black edition',
    'Меч световой FORCE (синий луч)'
  ];
  
var prices = [
    10000,
    4800,
    9200,
    2500,
    57000
];
  
var hitName = positions[2], hitPrice = prices[2];

console.log('Задание №1')

let hit = {}

hit.name = hitName
hit.price = hitPrice

console.log(`Хит продаж мартобря: <${hit.name}> цена ${hit.price} Q`)

//////////

console.log('Задание №2')

let items = []

for (i = 0; i < positions.length; i++){
  items[i] ={
    'name': positions[i],
    'price': prices[i]
  };
}

console.log(`Купите ${items[4].name} по цене ${items[4].price}`)

////////

console.log('Задание №3')

function showDiscount(product, amount){
  let discount;
  if (amount < 10){
    discount = 5/100
  } else if(amount < 50 && amount >10){
    discount = 7/100
  } else if(amount < 100 && amount >50){
    discount = 10/100
  } else {
    discount = 15/100
  }
  let discountPrice = amount * (product.price -  product.price*discount);
  let benefit = amount*product.price - discountPrice
  console.log(`${product.name} - стоимость партии из ${amount} штук состоваит ${discountPrice}, Ваша выгода ${benefit} Q!` )
}

showDiscount(items[0],12)
showDiscount(items[3],97)
showDiscount(items[4],1)

/////

console.log('Задание №4');

items[3].amount = 4;


function updateAmount(object, consumption = 1){
  if (!('amount' in object)){
    return
  };
  if (object.amount == 0 || consumption > object.amount){
    console.log(`${object.name} закончился на складе`)
  } else if (object.amount > consumption){
    object.amount -= consumption;
    console.log(`${object.name} - остаток ${object.amount}`);
  } else if (object.amount === consumption){
    object.amount -= consumption;
    console.log(`Это был последний ${object.name}, вам повезло`)
  }
}

updateAmount(items[1],17)
updateAmount(items[3],3)
updateAmount(items[3])