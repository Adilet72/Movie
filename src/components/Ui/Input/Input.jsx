
const Input = ({type, hintText, onChange, value}) => {
    return (
        <div>
            <input
                className={"w-[1089px] bg-black flex-grow bg- text-white px-4 py-2"}
                value={value}
                type={type || 'text'}
                placeholder={hintText}
                onChange={onChange} />
        </div>
    );
};

export default Input;