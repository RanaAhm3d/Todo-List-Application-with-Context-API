import React, { useContext, useState } from 'react'
import { Store } from '../store/Store';

export default function Addtodo() {
    const [title, setTitle] = useState("");
    const [done, setDone] = useState(false);
    const { addTodo } = useContext(Store);
    return (
        <>
            <h4 className='mb-2'> Add New Todo</h4>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    addTodo({
                        title: title,
                        done: done,
                    });
                }}
                action="">
                <>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">
                            Title
                        </label>
                        <input
                            required
                            onChange={(e) => setTitle(e.target.value)}
                            value={title}
                            type="text"
                            className="form-control"
                            id="title"
                        />
                        <div className='container'>
                            <input
                                onChange={(e) => setDone(e.target.checked)}
                                value={done}
                                className="form-check-input p-2"
                                type="checkbox"
                            />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                Done
                            </label>
                        </div>

                        <div className='container'>
                            <button className="btn btn-primary ms-3" type="submit">
                                Add TO Do
                            </button>
                        </div>


                    </div>

                </>

            </form>
        </>

    )
}
