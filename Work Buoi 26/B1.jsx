import { createContext, useContext, useRef, useState } from "react"

const LanguageContext = createContext()

const LanguageSelector = () => {
    const [Language, SetLanguage] = useState('en')

    
    const changeLanguage = ( Language ) => {
        SetLanguage(Language)
    }

    return (
        <div>
            <label for="option">Select Language</label>
            <select id="option" onChange={(Event) => changeLanguage(Event.target.value) }>
                <option value="en">English</option>
                <option value="vn">Tiếng Việt</option>
                <option value="jp">日本語</option>
            </select>
            <div>
            <LanguageContext.Provider value={ Language } >
                <Translation />
            </LanguageContext.Provider>
        </div>
        </div>
    )
}

const Translation = () => {
    const Language = useContext(LanguageContext)

    const translations = useRef({
        en: "Hello",
        vn: "Xin Chào",
        jp: "こんにちは"
    })
    return <div>{translations.current[Language]}</div>
}
 
export default LanguageSelector

// 0:28:30