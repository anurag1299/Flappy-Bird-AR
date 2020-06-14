const p = require('Patches');
const Diagnostics = require('Diagnostics');


const numberFormat = 'Time: {0}';

p.outputs.getScalar('score').then(event=> {
     event.monitor().subscribe(function (values) {
          //Diagnostics.log(values.newValue);
          p.inputs.setString('value', (Math.floor(values.newValue/10)).toString());
     });
});

//Patches.setStringValue('value', number.format(numberFormat));