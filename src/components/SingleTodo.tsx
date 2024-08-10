import React,{useState} from 'react';
import { Todo } from '../models/Todo';
import { MdDone } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";



interface Props {
  todo : Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo: React.FC <Props> = ({todo,todos,setTodos}) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  const handleDone = (id : number) => {
    setTodos(todos.map((t) => 
      t.id===id ? {...t, isDone: !t.isDone} : t
    ))}

    const handleEdit = (e: React.FormEvent, id: number) => {
      e.preventDefault();
      setTodos(
        todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
      );
      setEdit(false);
    };
  
    const handleDelete = (id : number) => {
      setTodos(todos.filter((t) => t.id!==id));
    }
  return (
    <form className="todos__single" onSubmit={(e)=> {handleEdit(e, todo.id)}}>

      {
        edit ? (<input value={editTodo} onChange={(e)=>{setEditTodo(e.target.value)}} className="todos__single--text"/>)
        :
          todo.isDone ? 
            (<s className="todos__single--text">{todo.todo}</s>)  :
            (<span className="todos__single--text">{todo.todo}</span>)
      }

      {
        todo.isDone ? (
          <s className="todos__single--text">{todo.todo}</s>

        )
        :
        (
          <span className="todos__single--text">{todo.todo}</span>
        )
      }
      

      <div>
        <span className="icon" onClick={()=> {if (!edit && !todo.isDone) setEdit(!edit)}}>
                <MdEdit/>
          </span>
        <span className="icon"><MdDelete onClick={() => {handleDelete(todo.id)}}/></span>
        <span className="icon"><MdDone onClick={()=> {handleDone(todo.id)}}/></span>
      </div>

    </form>
  )
}

export default SingleTodo