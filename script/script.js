//soluzione 
const container = document.querySelector('.container');

for(let i = 1; i <= 100; i++){

  const box = document.createElement('div');
  box.className = 'box';

  let output = i;

  if(!(i % 15)){
    output = 'FizzBuzz';
    box.classList.add('fizzbuzz');
  }else if(!(i % 3)){
    output = 'Fizz'
    box.classList.add('fizz');
  }else if(!(i % 5)){
    output = 'Buzz'
    box.classList.add('buzz');
  }

  box.append(output);

  container.append(box);

}