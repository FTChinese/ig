const { 
  Random,
} = require("../lib/random");

new Random(12).hex().then(id => {
  console.log(id);
});
