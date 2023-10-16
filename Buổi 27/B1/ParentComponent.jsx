import { useCallback, useEffect, useState } from "react"
import ChildComponent from "./ChildComponent"

const ParentComponent = () => {
    const [list, setList] = useState([1, 2, 3])

    useEffect(() => {
        console.log('ParentComponent');
    }, )

    const handleCount = useCallback(() => {
        setList([...list, list.length + 1])
    }, [list])

    return (
        <div>
            <ChildComponent list={list} handleCount={handleCount} />
        </div>
    )
}

export default ParentComponent