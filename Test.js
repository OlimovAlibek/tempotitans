function bonusTime(salary, bonus) 
{
  if(bonus)
  {
    return "£" + (salary*10).toString();
  }
  return "£" + salary.toString();
}


function bonusTime(salary, bonus) {
 return '£'+(bonus ? salary*10:salary)
}

const bonusTime = (salary, bonus) => `£${salary * (bonus ? 10 : 1)}`;


function bonusTime(salary, bonus) {
  return '£' + salary * (bonus ? 10 : 1);
}
