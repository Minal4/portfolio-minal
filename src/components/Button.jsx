
const Button = ({ page, title, dirty, isValid, click }) => {
    return (
        <>
            <button onClick={click} type='submit' disabled={isValid ? !(dirty && isValid) : false} className="btn__link">{title}</button >
        </>
    )
}

export default Button