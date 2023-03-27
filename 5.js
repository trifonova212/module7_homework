class ElectricalAppliance {
  constructor(name, power) {
  this.name = name;
  this.power = power;
}
  
  turnOn() {
  this.enabled = true;
}
  totalPowerConsumption() {
  return this.enabled ? this.power : 0;
}  
}

class ComputingDevices extends ElectricalAppliance {
  constructor(color,power, name ) {
  super(name);
  this.power = power;
  this.color = color;
}
  
  getSum(firstValue,secondValue) {
  return firstValue + secondValue;
}
}

const computer = new ComputingDevices('computer', 100, 'black');
const lamp = new ElectricalAppliance('lamp', 72);
const tv = new ElectricalAppliance('tv', 60); 

console.log(computer.totalPowerConsumption() + lamp.totalPowerConsumption() + tv.totalPowerConsumption());
computer.turnOn();
console.log(computer.totalPowerConsumption() + lamp.totalPowerConsumption() + tv.totalPowerConsumption());
lamp.turnOn();
console.log(computer.totalPowerConsumption() + lamp.totalPowerConsumption() + tv.totalPowerConsumption());
tv.turnOn();
console.log(computer.totalPowerConsumption() + lamp.totalPowerConsumption() + tv.totalPowerConsumption());