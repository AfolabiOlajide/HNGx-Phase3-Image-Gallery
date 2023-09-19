

const Button = ({ text, onClick }: { text: string, onClick?: React.MouseEventHandler<HTMLButtonElement>}) => {
    return (
        <button className="bg-grad outline-none border-none px-[2.4rem] py-[.5rem] rounded-sm text-[.9rem]" onClick={onClick}>{text}</button>
    )
}

export default Button