import { memo, useEffect } from "react"

const ChildComponent = ({ list, handleCount }) => {

    useEffect(() => {
        console.log('ChildComponent')
    }, [list])

    const handleClick = () => {
        handleCount()
    }

    return (
        <div>
            <button onClick={handleClick}>Add</button>
            {list.map((value, index) => {
                return <div key={ index }>{ value }</div>
            })}
        </div>
    )
}

export default memo(ChildComponent)