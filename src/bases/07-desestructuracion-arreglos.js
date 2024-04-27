const personajes = ['Goku', 'Vegeta', 'Trunks'];
const [ , , p3 ] = personajes;
console.log( p3 );

const retornaArreglo = () => {
    return ['ABC', 123]
}

const [ letras, numeros ] = retornaArreglo();
console.log(letras, numeros);

// Tarea
const use_State = ( nombre ) => {
    return [ nombre, () => { console.log('Hola mundo') } ];
}

const [ nombre, setNombre ] = use_State( 'Goku' );
const arr = [ nombre, setNombre ]

console.log(arr[0])