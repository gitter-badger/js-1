function bite_me_monkey (monkObj, clientObj, terrain) {
  //define power levels
  const power = {orangutans: 5, chimpanzees: 3, gorillas: 9, humans: 1};
  //define terrain power
  const terrainPower = {sea: 10, island: 20};
  //define winner message
  const winnerMessage = {
    humans: "Everything\'s good, I\'ll see you in the office on Monday.",
    primates: "Abandon ship! Save your own skin and blame it on the \'modestly-sized\' yacht!"
  };
  //calculate battle values
  var humanBV   = clientObj.crew * power.humans 
          + clientObj.hit_points;
  var primateBV =   monkObj.orangutans  * power.orangutans
          + monkObj.chimpanzees * power.chimpanzees
          + monkObj.gorillas  * power.gorillas
          + monkObj.hit_points;
  //add terrain bonus
  if(terrain == "sea") primateBV += terrainPower.sea;
  else if(terrain == "island") humanBV += terrainPower.island;
  //check for jane
  if(monkObj.jane_reporting_4_duty) primateBV *= (monkObj.chimpanzees/2);
  //return winner
  return humanBV > primateBV ? winnerMessage.humans : winnerMessage.primates;
}
