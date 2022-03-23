import { useState } from 'react'
import '../styles/Footer.css'

function Footer() {
    const [inputValue, setInputValue] = useState('')
    function checkInput(value) {
        if (!value.includes('@')) {
            alert(`Votre mail n'est pas valide`)
        } else {
            setInputValue(value)
        }
    }

    return (
        <footer className='lmj-footer'>
            <div className='lmj-footer-elem'>
                Pour les passionné·e·s de plantes 🌿🌱🌵
            </div>
            <div className='lmj-footer-elem'>Laissez-nous votre mail :
                <input value={inputValue} onChange={(e) => {
                    setInputValue(e.target.value)
                    console.log(inputValue)
                }} onBlur={(e) => {
                    checkInput(e.target.value)

                }}>

                </input>
            </div>
        </footer>
    )
}

export default Footer