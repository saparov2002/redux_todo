import { useDispatch, useSelector } from "react-redux"
import { DELETE_USER } from "../redux/types"

const List = () => {
    const todo = useSelector(state => state.todo)
    const dispatch = useDispatch()

    const handleDelete = (evt) => {
        const clickedId = evt.target.id
         dispatch({type: DELETE_USER,id:clickedId})
    }
  return (
    <div>
        {
            todo.length>0 && todo.map(item=> (
                <p className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" key={item.id}>
                    <span className=" text-gray-700 text-sm font-bold mb-2 px-8 pt-6 pb-8 ">
                    {item.name}
                    </span>
                <button onClick={handleDelete} className="bg-red-800 rounded-md text-white px-3 mx-3 py-2">Delete</button>
                    
                    </p>
            ))
        }
    </div>
  )
}

export default List