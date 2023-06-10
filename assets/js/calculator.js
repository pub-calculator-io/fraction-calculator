function calculate(){

  // 1. init & validate
  const integer = elementId => input.get(elementId).integer().raw();
  const natural = elementId => input.get(elementId).natural().raw();
  const aNum = integer('fraction_a_top');
  const aDenom = natural('fraction_a_bottom');
  const bNum = integer('fraction_b_top');
  const bDenom = natural('fraction_b_bottom');
  const operation = input.get('math_operation').raw();
  
  // additional checks
  if(operation == 'divide' && bNum == '0') input.error('fraction_b_top', 'Division by zero fraction_b');
  if(!input.valid()) return;
  
  // 2. calculate
  const aFrac = math.fraction(aNum, aDenom);
  const bFrac = math.fraction(bNum, bDenom);
  const resultFrac = math[operation](aFrac, bFrac);
  const resultPeriodic = resultFrac.toString();
  const resultDecimal = math.number(resultFrac);
  const operationsMap = {'add':'+','subtract':'−','multiply':'×','divide':'÷'};
  
  // 3. output
  Fractions.outputMixed(aFrac, 'a');
  Fractions.outputMixed(bFrac, 'b');
  Fractions.outputMixed(resultFrac, 'result');
  _('operation').innerText = operationsMap[operation];
  _('resultDecimal').innerText = Fractions.getFracPart(resultFrac) ? 
    `or ${resultPeriodic} or ${resultDecimal}` : '';
  
  // chart
  _('aWholeChart').innerText = Fractions.getWholePart(aFrac);
  _('bWholeChart').innerText = Fractions.getWholePart(bFrac);
  _('resultWholeChart').innerText = Fractions.getWholePart(resultFrac);
  _('operationChart').innerText = operationsMap[operation];
  changeChartData(
    Fractions.getChartData(aFrac), 
    Fractions.getChartData(bFrac), 
    Fractions.getChartData(resultFrac)
  );

}
