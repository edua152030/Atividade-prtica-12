const data = [
    {
    nome: 'Roger Medeiros',
    sexo: 'M',
    salario: 3250,
    },
    {
    nome: 'Carolina Silva',
    sexo: 'F',
    salario: 1200,
    },
    {
    nome: 'Cristina Avila',
    sexo: 'F',
    salario: 8100,
    },
    {
    nome: 'Gustavo Hoffman',
    sexo: 'M',
    salario: 5200.35,
    },
    {
    nome: 'Eva Trindade',
    sexo: 'F',
    salario: 2501,
    },
    {
    nome: 'Andre Mathias',
    sexo: 'M',
    salario: 1750,
    },
    {
    nome: 'Joice Castro da Silva',
    sexo: 'F',
    salario: 3350.25,
    },
    ];

/*1. Imprima no console a quantidade de pessoas Total.

console.log(`a quantidade de pessoas é : ${data.length}`)
*/

/**2. Imprima no console a quantidade de pessoas pessoas do sexo
Feminino. 

const dataFemino = data.filter((pessoa) => pessoa.sexo === 'M')
console.log(dataFemino)
*/

/**3. Imprima no console a soma do salário de todas as pessoas.

const somaSalario = data.reduce((soma, salario) => soma + salario.salario, 0);

console.log(`A soma dos salários de todas as pessoas é: ${somaSalario}`);*/

/**4. Imprima no console a média do salário de todas as pessoas. 

const somaSalario = data.reduce((soma, salario) => soma + salario.salario, 0);
const qtd = (data.length)
const media = somaSalario / qtd
console.log(media.toFixed(2))*/

/*5. Imprima no console a soma do salário de todos as pessoas do sexo
Masculino

const somaSalario = data.reduce((soma, salario) => soma + salario.salario, 0 && salario.sexo === 'M');
    console.log(somaSalario)*/

/* 6. Imprima no console a média do salário de todas as pessoas do sexo
Masculino

const somaSalario = data.reduce((soma, salario) => soma + salario.salario, 0 && salario.sexo === 'M');
const qtd = (data.length)
const media = somaSalario / qtd
console.log(media.toFixed(2))*/

/*7. Utilize a função Some, para descobrir se existe algum salário
superior a R$ 7.000, imprima verdadeiro no console caso exista, caso
contrário falso.

const maior = data.some(i => i.salario > 7000);

console.log(maior);*/

/*8. Utilize a função findIndex, para descobrir a posição da pessoa de
nome 'Eva Trindade'.

const filtrarEva = data.findIndex( i => i.nome === 'Eva Trindade')
console.log(filtrarEva) */

/*9. Utilize a função filter, para filtrar todas pessoas que o nome possua o
sobrenome "Silva".

const filtrarSilva = data.filter(i => i.nome.includes("Silva"));

console.log(filtrarSilva);*/

/*10. Imprima os nomes utilizando o MAP 

const nomes = data.map(i => i.nome);

console.log(nomes);*/