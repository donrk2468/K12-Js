import { useLayoutEffect } from "react"
import { useRef } from "react"

// // input focus
const B3 = () => {
    const InputRef = useRef()
    useLayoutEffect(() => {
        InputRef.current.focus()
    })

    return (
        <>
            <div>
                <input 
                    type='text'
                    ref={InputRef}
                />
            </div>
        </>
    )
}

export default B3