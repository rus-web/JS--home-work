
///////////
// console.log('Задание №1')
function warrantyOptions(year){
    if(year === 1){
    return 1250
    } else if (year === 2){
    return 2300 } else{
    return 0} 
}
// console.log(`Дополнительно гарантийное осблужиание: ${warrantyOptions(1)} Q`)

///////////

// console.log('Задание №2')

var engravingPrice = 11
let string ='В подарок от лучшего друга'
function engraving(price){
    if (price.length > 1){
    var word = price.split(' ')
    return word.length * engravingPrice
    }
    else {
    return 0
    } 
}
//console.log(`Подарочная упаковка и гравировка: ${engraving(string)} Q`)

///////////

// console.log('Задание №3')
let shippingRegion = 'Галактика Альфа'
let shipping = 'yes'
let accesRegion = ['Галактика Альфа', 'Галактика Бета', 'Галактика Гамма']
function delivery (deliveryNeed, region){
   if (deliveryNeed === 'yes'){
    switch (region){
        case 'Галактика Альфа' :
        return 100;
        break;

        case 'Галактика Бета' :
        return 200;
        break;

        case 'Галактика Гамма' :
        return 350;
        break;
        default :
        return 'NaN';
        } 
         } else {
    return 0
    }
}
if (delivery(shipping,shippingRegion) === 'NaN'){
    //console.log(`Ощибка рассчета стоимости доставки`)
} else if (delivery(shipping,shippingRegion) === 0){
    //console.log(`Доставка не требуется`)
} else {
    //console.log(`Стоимость доставки до "${shippingRegion}": ${delivery(shipping,shippingRegion)}`)
}


function allServices(year,string,shipping,shippingRegion){
    return warrantyOptions(year)+engraving(string)+delivery(shipping,shippingRegion)
}

console.log(`Задание №4 (Дополнительное)`)
let security = 1 // Гарантия 
let caption = 'Любимому путешественнику' // Гравировка
let ship = `yes` // Требуется ли доставка
let shipReg = 'Галактика Бета' // Адресс
let currency = 'Q' // Валюта

console.log(
    `Общая стоимость заказа: ${allServices(security,caption,ship,shipReg)} ${currency}.
    Из них ${warrantyOptions(security)} ${currency} за гарантийное обслуживание на ${security} год/года.
    Гравировка на сумму ${engraving(caption)} ${currency}.
    Доставка в область '${shipReg}': ${delivery(ship,shipReg)} ${currency}.
    `)