import { useContext } from "react"
import { Store } from "../store/Store"

export default function Undonetodo() {
    const { todos } = useContext(Store);
    const data = todos.filter((e) => e.done == false)
    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">Title</th>
                    <th scope="col">Done</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                {data.map((e, i) => (
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

                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
