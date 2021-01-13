// class List {
//     constructor() {
//         this.data = [];
//     }
//     add(data) {
//         this.data.push(data);
//         console.log(this.data);
//     }
// }
// class TodoList extends List {
//     constructor() {
//         super();

//         this.usuario = 'Marina';
//     }
//     mostraUsuario() {
//         console.log(this.usuario);
//     }
// }

// const MinhaLista = new TodoList();

// document.getElementById('novotodo').onclick = function () {
//     MinhaLista.add('novo todo');
// };

// MinhaLista.mostraUsuario();

// class Matematica {
//     static soma(a, b) {
//         return a + b;
//     }
// }

// console.log(Matematica.soma(1, 2));

// const arr = [1, 2, 3, 4, 5, 8, 9];
// const newArr = arr.map((item) => item * 2);
// console.log(newArr);

// const sum = arr.reduce(function (total, next) {
//     return total + next;
// });

// function soma(a = 3, b = 6) {
//     return a + b;
// }

// console.log(soma(1));
// console.log(soma());

const usuario = {
    nome: 'Marina',
    idade: 24,
    endereco: {
        cidade: 'SP',
        estado: 'SP',
    },
};

// const { nome, idade, endereco: { cidade } } = usuario;
// console.log(nome);
// console.log(idade);
// console.log(cidade);

function mostraNome({ nome }) {
    console.log(nome);
}

mostraNome(usuario);