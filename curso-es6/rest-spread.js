// REST pegar o resto das propiedades
const usuario = {
    nome: 'Marina',
    idade: 24,
    empresa: 'Rocketseat'
};

const { nome, ...resto } = usuario;

console.log(nome);
console.log(resto);

const arr = [1, 2, 3, 4];

const [a, b, ...c] = arr;
console.log(c);

function soma(...params) {
    return params.reduce((total, next) => total + next);
}

console.log(soma(1, 3, 4));

//  SPREAD = propagar, repassar as infomrações pra outra esrtutura de dados

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [...arr1, ...arr2];

console.log(arr3)

const usuario1 = {
    nome: 'Marina',
    idade: 24,
    empresa: 'Rocketseat',
};

const usuario2 = { ...usuario1, nome: 'Fernanda' };
console.log(usuario2)