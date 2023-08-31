import { useEffect, useState } from "react"

// SumOfEvenNumbers
const B1 = () => {
    const [number, SetNumber] = useState()
    const [sum, setsum] = useState(0)
    useEffect(() => {
            let suma = 0
            for(let i = 0; i <= number; i++) {
                if(i % 2 === 0) {
                    suma += i
                }
            }
            setsum(suma)
    }, [number])

    return (
        <>
            <div >
                <input 
                    type="number"
                    value={number}
                    onChange={(element) => SetNumber(element.target.value)}
                /> <br />
                {sum}
            </div>
        </>
    )
}

export default B1