const person = {
  age: 25,

  // tellAge: function () {
  // this - Person'ı gösteriyor içerde kullandığımız için
  // console.log(this);
  // console.log(this.age);
  // }.bind(this),
  //bind sayesinde this'imizi windowa çekmiş olduk
  // fonksiyon dışındaki this windowu gösterir

  tellAge: () => {
    console.log(this);
    console.log(this.age);
  },
  // arrow fonk. sayesinde this'le direkt bind'ı bağlamış gibi düşünüyor ve windowu bize getiriyor
};

person.tellAge();
