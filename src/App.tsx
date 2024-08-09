import './App.css'
import InputField from './components/InputField';
import React,{useState} from 'react';
import  {Todo,list}  from './models/ToDo';

let name : string;
let age : number  | string; //Union of type => could be anything
let hobbies: string[];
let isStudent : boolean;


// type Person = {
//   name : string;
//   age ? : number;  //optional use ?
// }

// type Job = Person & {
//   jobName : string;
// }


// let job : Job= {
//   name : 'John',
//   jobName: 'SWE'
// }

interface Job {
  year: number;
  age?: number;
  jobName?: string;
};

interface Person extends Job {
  name: string;
}

let person : Person = {
  name: 'John',
  year: 1
}



let printName : (name : string) => void;  //function type (void returns nothing)

let printNameCopy : (name : string) => never; //function type (never does not return anything)

// let person : Person = {
//   name : 'GEORGE',
//   age : 25
// };


// let people: Person[] = [
//   {name : 'John', age :45},
//   {name : 'Paul', age : 25}
// ]

// let roles : [number, string];

// console.log(people)

const App : React.FC = () => {
  const [todo,setTodo]= useState <string> ('');
  const [todos,setTodos]= useState <Todo[]> ([]);

  const handleAdd = (e : React.FormEvent) => {
    e.preventDefault();

    if (todo){
      setTodos([...todos, {id: Date.now(),todo, isDone: true}]);
      setTodo("");
      
    }

    
  }

  console.log(todos);

  
  return (
    <>
      <div className="App">
        <span className="heading">TASKIFY</span>
        <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
  
      </div>
    </>
  )
}

export default App
