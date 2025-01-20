`use strict`
console.log("Задание № 1")
var stock = 10;
var buy = 7;

if (buy>stock){
    console.log(`На складе нет такого количества товаров`)
} else if (buy === stock) {
    console.log( `Вы забираете весь товар c нашего склада!`)
} if (buy < stock) {
    console.log(`Заказ оформлен на ${buy} единиц`)
}

console.log("Задание №2")


var place = "Noname";

switch (place){
    case "Луна": console.log(`Стоимость доставки для области: ${place} - 150 Q`)
    break;
    case "Крабовидная туманность": console.log(`Стоимость доставки для области: ${place} - 250 Q`)
    break;
    case "Галактика Туманность Андромеды": console.log(`Стоимость доставки для области: ${place} - 550 Q`)
    break;
    case "Туманность Ориона": console.log(`Стоимость доставки для области: ${place} - 600 Q`)
    break;
    case "Звезда смерти": console.log(`Стоимость доставки для области: ${place} - договорная цена`)
    break;
    default: console.log("В ваш квадрант доставка не осуществляется")
}

console.log("Задание №3")

var price = "10"

try {
    if (typeof(price) !== 'number') {
        throw `'${price}' не является числом`;
      };
      console.log('Цена товара введена корректно');
} catch(err) {
    console.log(`Вы допустили ошибку: ${err}`);
  };

  console.log("Задание №4")

  var planet = "Марс"
  var age = 20

  if (planet === "Земля" && age >= 18){
    console.log(`Приятных покупок`)
  } else if (planet === "Земля" && age <= 18){
    console.log(`Вы не достигли совершеннолетия`)
  } else if (planet === "Юпитер" && age >= 120){
    console.log(`Чистого неба и удачных покупок!`)
  }else if (planet === "Юпитер" && age <= 120){
    console.log(`Сожалеем. Вернитесь на 120-й день рождения!`)
  } else(
    console.log("Спасибо, что полузуетесь нашими услугами")
  )

