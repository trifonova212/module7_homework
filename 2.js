const prototypeObject = {
  prototypeOne: 1,
  prototypeTwo: 2, 
}

const object = Object.create(prototypeObject);

object.objectThree = 3;
object.objectFour = 4;
object.objectFive = 5;

function checkProperty(string, object) {
	console.log(string in object);
}

checkProperty('objectFive', object);
