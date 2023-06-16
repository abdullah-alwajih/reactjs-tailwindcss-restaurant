export const Button = ({text, onClick}) => {
    return (
        <>
            <button onClick={onClick}
                    className="px-2 py-1 font-bold text-primary border-primary leading-6 bg-white rounded hover:text-black hover:font-bold hover:tracking-normal hover:leading-6 hover:bg-primary">
                {text}
            </button>
        </>
    )
}
