`use strict`;

console.log('Задание №1')

const tax = 73/100
let income = 0

function revenue (soldPrice){
  return income += tax*soldPrice
}
revenue(100)
revenue(1000)
revenue(950)
console.log(`Налог с продаж (73 %), к оплате: ${revenue(0)}`)

///////

console.log('Задание №2')

let PackageSquare = 30
let ready = 0

function packaging(x,y,z){
  let square = 2*(z*y+x*z+x*y)
  if(square <= PackageSquare){
    PackageSquare -= square
    return ready = 'упакован'
  } else {
    return ready = 'не упакован'
  }
}

packaging(0.1,0.2,0.5)
console.log(`Заказ (0.1, 0.2, 0.5) ${ready}, осталось ${PackageSquare} м2 упаковочной бумаги` )
packaging(10,20,30)
console.log(`Заказ (10, 20, 30) ${ready}, осталось ${PackageSquare} м2 упаковочной бумаги` )

////////

console.log('Задание №3')

let batteryStatus = [ 7, 2, 1, 4, 8]
let batteryStatusCounter = []


for(let i = 0; i < batteryStatus.length; i++) {
  batteryStatusCounter[i] = function() {
    if(batteryStatus[i] > 0) {
      batteryStatus[i]--;
      if(batteryStatus[i] > 0) {
        console.log(`Телепорт ${i+1} использован, заряд — ${batteryStatus[i]} единиц`);
      } else {
        console.log(`Телепорт ${i+1} использован, заряд — 0 единиц, требуется перезарядка!`);
      }
    } else {
      console.log(`Телепорт ${i+1} недоступен, перезаряжается`);
    }
  };
};

batteryStatusCounter[4]()
batteryStatusCounter[3]()
batteryStatusCounter[2]()
batteryStatusCounter[1]()
batteryStatusCounter[4]()
batteryStatusCounter[4]()