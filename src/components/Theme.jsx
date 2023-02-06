import React, { useEffect, useState } from 'react'

const Theme = () => {
    const [theme, setTheme] = useState(JSON.parse(localStorage.getItem('theme')) || 'light')
    const [toggleCheck, setToggleCheck] = useState(JSON.parse(localStorage.getItem('toggle')) || false)

    const handleCheck = (e) => {
        const check = e.target.checked;
        check ? setTheme('dark') : setTheme('light');
        setToggleCheck((prev) => !prev);
    }
    useEffect(() => {
        JSON.parse(localStorage.getItem('theme'));
    }, [])

    useEffect(() => {
        document.body.className = theme;
        localStorage.setItem('theme', JSON.stringify(theme))
        localStorage.setItem('toggle', JSON.stringify(toggleCheck))

    }, [theme])


    console.log(theme, 'dark')
    return (
        <>
            <div className="toggle">
                <input type="checkbox" id="check-4" onChange={handleCheck} checked={toggleCheck} />
                <label htmlFor="check-4"></label>
            </div>
        </>
    )
}

export default Theme
