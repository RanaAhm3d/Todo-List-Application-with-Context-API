import { useContext } from "react"
import { Store } from "../store/Store"

export default function Todolist() {
    const { todos, changeState } = useContext(Store);
    return (
        <>
            <h4>ALL TO DOS</h4>
            {todos.length === 0 ? (
                <h4>There's no todos</h4>
            ) : (
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Title</th>
                            <th scope="col">Done</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {todos.map((e, i) => (
                            <tr key={i}>
                                <th scope="row">{e.title}</th>
                                <td>
                                    <span
                                        className={`text-white p-2 mt-2 ${e.done ? "bg-primary" : "bg-danger"
                                            }`}>

                                        {e.done ? "Done" : "Undone"}
                                    </span>
                                </td>
                                <td>
                                    <button
                                        onClick={() => changeState(i)}
                                        className="btn btn-primary">
                                        {e.done ? "Mark As Undone" : "Mark As Done"}
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </>
    )
}
