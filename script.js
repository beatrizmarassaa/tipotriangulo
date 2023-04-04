const primeiraMedida = Number(prompt('Digite a primeira medida:'));
const segundaMedida = Number(prompt('Digite a segunda medida:'));
const terceiraMedida = Number(prompt('Digite a teceira medida:'));

if (primeiraMedida===segundaMedida && segundaMedida==terceiraMedida){
  alert('Esse triângulo é o equilátero');
} else if (primeiraMedida===segundaMedida||primeiraMedida===terceiraMedida || segundaMedida===terceiraMedida){
  alert('Esse triângulo é o isósceles');
  
} else {
  alert ('Esse é o triângulo escaleno')
}              