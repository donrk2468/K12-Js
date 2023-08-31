import { useRef, useState } from "react"

const B5 = () => {
    const Subject = ['Toan', 'Ly', 'Hoa']
    const InputRef = useRef([])
    const [sum, setSum] = useState(0)
    
    const handleInput = (index, event) => {
        console.log(InputRef.current);
        const newValue = event.target.value
        console.log("index input: ", index, "change: ", newValue);
    }

    const renderInput = (index, placeholder) => (
        <>
            <input 
                key={index}
                type="number" 
                placeholder={placeholder}
                ref={(ref) => InputRef.current[index] = ref}
                onChange={(event) => handleInput(index, event)}
            /> <br />
        </>
    )
    const handleClick = () => {
        let suma = 0
        InputRef.current.forEach((value) => {
            suma += Number(value.value)
            // console.log(value.value);
        })
        setSum(suma)
    }


    return (
        <div>
            PageTest <br />
            {Subject.map((value, index) => {
                return renderInput(index, value)
            })}
            <button onClick={handleClick}>Done</button>
            Tong: {sum}
        </div>
    )
}   

export default B5