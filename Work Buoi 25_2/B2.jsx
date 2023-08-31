import { useEffect, useState } from "react"


const B2 = () => {
    const [UserName, SetUserName] = useState('')
    const [UserPass, SetUserPass] = useState('')

    useEffect(() => {
        if(UserName === 'Nelson' && UserPass === '1234') {
            document.body.style.backgroundColor = 'lightgreen';
        } else {
            document.body.style.backgroundColor = '';
        }
    },[UserName, UserPass])

    return (
        <>
            <div>
                <input 
                type="text"
                value={UserName}
                onChange={(Element) => SetUserName(Element.target.value)}
                /> <br />
                <input 
                type="text"
                value={UserPass}
                onChange={(Element) => SetUserPass(Element.target.value)}
                />
            </div>
        </>
    )

}

export default B2