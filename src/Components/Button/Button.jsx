import "./Button.css"

import PropTypes from "prop-types"

const sayHello = () => {
    return "Hello World!"
}

function Button({ text, variant, isOutlined, hasIcon, id, sayHello }) {
    // console.log({ PropTypes });
    return (
        <>
            {/* <button className={"button " + variant}>{text}</button> */}
            <button className={`button ${variant} ${isOutlined ? "outlined" : ""} ${id}`}>
                {text}

                {/* {hasIcon ? <img src="https://via.placeholder.com/50" alt="random pic" width={50} height={50} /> : ""} */}

                {hasIcon && <img src="https://via.placeholder.com/50" alt="random pic" width={50} height={50} />}
            </button >
        </>
    )
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    variant: PropTypes.string,
    isOutlined: PropTypes.bool,
    hasIcon: PropTypes.bool,
    id: PropTypes.number,
    sayHello: PropTypes.func
}

Button.defaultProps = {
    text: "Click",
    variant: "primary",
    isOutlined: false,
    hasIcon: false,
    id: 0
}

export default Button