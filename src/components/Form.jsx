import { useDispatch, useSelector } from "react-redux";
import { ADD_USER } from "../redux/types";

const Form = () => {
    const dispatch = useDispatch()
    const todo = useSelector(state => state.todo)

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            id: todo.length,
            name: e.target.todo.value
        }
    e.target.reset()

      dispatch({type: ADD_USER,todo:data})

    }
  return (
    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
        <label className="block text-gray-700 text-sm font-bold mb-2"> 
            <span>Create Todo</span>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="todo" placeholder="Create"  required/>
            <button className="bg-blue-500 hover:bg-blue-700 text-white mt-3 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">add</button>
        </label>
    </form>
  )
}

export default Form