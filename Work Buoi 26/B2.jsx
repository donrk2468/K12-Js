import { createContext, useContext, useEffect, useState } from "react"

const AuthContext = createContext(false)
const ManageSignIn = () => {
    const [SignedIn, setSignedIn] = useState(false)
    return (
        <AuthContext.Provider value={ { setSignedIn } } >
            {SignedIn ? <Home></Home> : <LoginForm></LoginForm>}
        </AuthContext.Provider>
    )
}

const LoginForm = () => {
    const  {setSignedIn}  = useContext(AuthContext)
    const [disableButton, setDisableButton] = useState(false)
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    
    useEffect(() => {
        if(name === 'donrk2468' && password === '123456') {
            setDisableButton(false)
        } else {
            setDisableButton(true)
        }
    }, [name, password])

    function handleSignIn() {
        setSignedIn(true)
    }

    return (
        <div>
            <div>
                <div>
                    UserName:<input type="text" value={name} onChange={Event => setName(Event.target.value)} />
                </div>
                <div>
                    PassWord:<input type="password" value={password} onChange={Event => setPassword(Event.target.value)} />
                </div>
            </div>
            <button onClick={handleSignIn} disabled={disableButton}>Sign in</button>
        </div>
    )
}

const Home = () => {
    const  {setSignedIn}  = useContext(AuthContext)

    const handleSignOut = () => {
        setSignedIn(false)
    }
    return (
        <div>
            Home
            Nothing Here
            <button onClick={handleSignOut}>Sign Out</button>
        </div>
    )
}


export default ManageSignIn