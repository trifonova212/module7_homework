const prototypeObject = {
  prototypeOne: 1,
  prototypeTwo: 2, 
}

const object = Object.create(prototypeObject);

object.objectThree = 3;
object.objectFour = 4;

function outputObject() {
  for (let key in object) {
    if (object.hasOwnProperty(key)) {
      console.log(key, object[key]);
    } 
  }
}

outputObject(object);


