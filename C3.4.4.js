function ElectricalAppliance(name, power) {
    this.name = name;
    this.power = power;
    this.isPlugged = false;
}

// метод определения включенного в розетку прибора
ElectricalAppliance.prototype.plugIn = function() {
    console.log(this.name + " is plugged!");
    this.isPlugged = true;
};

// метод определения выключенного из розетки прибора
ElectricalAppliance.prototype.unplug = function() {
    console.log(this.name + " is unplugged!");
    this.isPlugged = false;
};

// Прибор №1
function Lamp(name, brand, power, bulbType) {
    this.name = name;
    this.brand = brand;
    this.power = power;
    this.bulbType = bulbType;
    this.isPlugged = true;
}

Lamp.prototype = new ElectricalAppliance();

// Прибор №2
function Computer(name, brand, power, type, functionality) {
    this.name = name;
    this.brand = brand;
    this.power = power;
    this.type = type;
    this.functionality = functionality;
    this.isPlugged = false;
}

Computer.prototype = new ElectricalAppliance();

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