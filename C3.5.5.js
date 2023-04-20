class ElectricalAppliance {
  constructor(name, power){
    this.name = name;
    this.power = power;
    this.isPlugged = false;
  }
  // метод определения включенного в розетку прибора
  plugIn() {
    console.log(this.name + " is plugged!");
    this.isPlugged = true;
  }

  // метод определения выключенного из розетки прибора
  unplug() {
    console.log(this.name + " is unplugged!");
    this.isPlugged = false;
  }
}

// Прибор №1
class Lamp extends ElectricalAppliance {
  constructor (name, brand, power, bulbType) {
    super(name, power);
    this.brand = brand;
    this.bulbType = bulbType;
    this.isPlugged = true;
  }
}

// Прибор №2
class Computer extends ElectricalAppliance {
  constructor(name, brand, power, type, functionality) {
    super(name, power);
    this.brand = brand;
    this.type = type;
    this.functionality = functionality;
    this.isPlugged = false;
  }
}

// Лампа
const tableLamp = new Lamp("Table lamp", "Xiaomi", 5, "LED");

// Компьютер
const homePC = new Computer("Table PC", "Intel", 120, "stationary", "for work");

// Выключаем лампу из розетки
tableLamp.unplug();

// Включаем homePC в розетку
homePC.plugIn();

// Результат
console.log(homePC)
console.log(tableLamp)