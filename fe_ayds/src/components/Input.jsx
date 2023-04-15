const Input = ({label,type}) => {
    return(
        <div className="flex">
            <label className="block mb-5">{label}</label>
            <input type={type} className="outline-none border border-black"/>
        </div>
    )
}

export default Input;