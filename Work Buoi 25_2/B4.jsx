import { useRef, useState } from "react"

const B4 = () => {
    const [inputValue, setValue] = useState("")
    const itemRef = useRef([])
    
    const handleClick = () => {
        if (inputValue.length > 0) {
            itemRef.current.push(inputValue);
            setValue('')
        }
    }

    return (
        <>
            <div>
                <input type="text" value={inputValue} onChange={(Event) => setValue(Event.target.value)} /> <br />
                <button onClick={handleClick}>Add</button>
                <ul>
                    {itemRef.current.map((value, index) => {
                        return (
                            <li key={index}>
                                {index} - {value}
                            </li>
                        )
                    })}
                </ul>
            </div>
        </>
    )
}

export default B4