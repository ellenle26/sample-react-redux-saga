import classNames from "classnames";

const Button: React.FC<ButtonProps> = (props) => {
    const {text, children, type, className, onClick} = props;
    
    return <button className={classNames(className, 
        "py-5 px-2 w-40 text-sm font-normal border border-solid hover:opacity-80", {
        "bg-gray_": type === "contained"
    })} onClick = {event => onClick && onClick(event)}>{!text ? children: text}</button>
}

interface ButtonProps {
    className?: string;
    text?: string;
    children?: any;
    type?: "outline" | "contained";
    onClick?: (event: any) => void;
}
export default Button;