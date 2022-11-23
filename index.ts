// Introdução
/*var number1:number=40
var number2:number=60


function sum (num1:number, num2:number){
     console.log (` Os números informados são: ${num1} e ${num2}. A resultado de sua soma é: ${num1+num2}`)
}*/

// sum (number1, number2)


/******************************TIPOS NUMÉRICOS************************************* */
/*let x:number = 70.236
console.log (x)
console.log(typeof x)
console.log(x.toPrecision(3))*/


/********************************TIPOS STRING**************************************** */
/*let firstName:string= "Renato";
let lastName:string = "Dardengo";
console.log(firstName.toUpperCase())
console.log (`O nome completo é ${firstName+" "+lastName}`)*/

/**********************************TIPO BOOLEAN*************************************** */
/*let x:boolean=true;
console.log (x);

x=false;
console.log (x)
    //type inference
let w=true
console.log(typeof w)*/

/***************************************************************** */
//criando arquivo de configuração => tsc --init


/*************************CONVERSÃO DE TIPOS**********************/
/*let num:number=50;
let x=num.toString();
console.log (`O valor convertido da variável foi ${x}`)*/


/****************************ARRAYS********************************* */
/*let values:number[]=[10,20,30,40]
values.push (60)
 console.log (values)*/

    /*******Array de objetos******/
/*interface AlunosAprovados {
    name: string;
    nota: number;
}

const students: Array<AlunosAprovados> = [
    { name: 'Carla', nota: 6 },
    { name: 'Fernando', nota: 5 },
    { name: 'Ana', nota: 7 },
    { name: 'Denis', nota: 8 },
    { name: 'Alice', nota: 9 },
    { name: 'Antonio', nota: 9 }
]


var names:string[]=[]
var aprovados = students.map ((x)=>{
    if (x.nota> 7) {
        names.push(x.name)
    }
})


console.log (names)*/

/*******Outra sintaxe de array */

/*var nums: Array<number>= [50,60,90]
nums.push (60)
console.log(nums)*/

/************************************** TIPO ANY*********/

/*var x:any = [1, "teste", true,{"valor":1}]

console.log(x)*/


/******************************PARAMETROS TIPADOS************/
/*function teste(a:number, b:number){
    return a+b
}
console.log (teste(5,10))*/

/***************************RETORNO TIPADOS***************/
/*function teste(a:string):string{
    //return 15;
    return `Olá ${a}`
}
console.log (teste("Renato"))*/

/***************************OBJETOS TIPADOS***************/
/*function coordinates(coord: {x:number, y:number}){
    console.log(` A coordenada x: ${coord.x}`);
    console.log(` A coordenada y: ${coord.y}`)
}
const obj={x:30, y:60}
coordinates (obj)*/

/***********************PROPRIEDADES OPCIONAIS**************/
/*function showNumbers(a:Number, b:number, c?:number){
    console.log(`A: ${a}`);
    console.log(`B: ${b}`);
    if (c) {
        
        console.log(`C: ${c}`)
    }
}
showNumbers (5,6,7)

function greetins (name:string, lastName?:string){
    if(!lastName){
        return ` Olá ${name}`
    }

    return `Olá ${name} ${lastName}`
}

console.log(greetins("Renato", "Dardengo"))
console.log(greetins("João"))*/

/***************************UNION TYPES***************/
/*function showBalance(value:string|number){
    console.log (value)
}
showBalance(500)
showBalance("500")

//validação com union types
function showRole(role: boolean | string) {
  if (typeof role==="boolean") {
    return "Usuário não aprovado"
  } 

  return "A funçãpo do usuário é "+ role
}
console.log(showRole(false))
console.log(showRole("admin"))

//Type alias
type ID=string|number;
function showid(id:ID){
    console.log (id)
}

showid(50)
showid("500")*/

/***********************INTERFACES****************/
interface Point{
    x:number;
    y:number
}

const coord:Point={
    x:10,
    y:20
}

function Show(obj:Point){
    console.log (`O valor de X ${obj.x} e y ${obj.y}`)
}
Show (coord)
