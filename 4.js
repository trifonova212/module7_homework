function ElectricalAppliance(name, power) {
  this.name = name;
  this.power = power;
};

ElectricalAppliance.prototype.turnOn = function() {
  this.enabled = true;
};

ElectricalAppliance.prototype.totalPowerConsumption = function() {
  return this.enabled ? this.power : 0;
};

function ComputingDevices (name, power, color) {
  this.name = name;
  this.power = power;
  this.color = color;
};

ComputingDevices.prototype = new ElectricalAppliance();

ComputingDevices.prototype.getSum = function(firstValue,secondValue) {
  return firstValue + secondValue;
};

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