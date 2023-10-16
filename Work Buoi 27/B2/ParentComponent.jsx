import { useCallback, useState } from "react"
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
    const [list] = useState([
        {id: 1, name: 'A', age: 32},
        {id: 2, name: 'B', age: 31},
        {id: 3, name: 'C', age: 23},
    ])
    const [filter, setFilter] = useState('')
    const [show, setShow] = useState(list)

    const handleInput = useCallback((Event) => {
        setFilter(Event.target.value)
    }, [])

    const handleFilter = useCallback(() => {
        if(filter === '') {
            return setShow(list)
        } else {
            setShow([...list.filter(value => value.name === filter)])
        }
    }, [filter, list])

    return (
        <div>
            <input type="text" value={filter} onChange={handleInput} />
            <button onClick={handleFilter}>Search</button>
            <ChildComponent show={show} />
        </div>
    )
}
export default ParentComponent