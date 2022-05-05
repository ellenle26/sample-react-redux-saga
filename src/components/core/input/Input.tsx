import classNames from "classnames";
import { FC } from "react";


const Input: FC<InputProps> = (props: InputProps) => {
    const required = props.required === true;
    const requiredMargin = required ? "mr-2" : "";
    const border = props.error ? "border-error" : "border-border";


    return (
        <div className={classNames("w-full", { "opacity-50": props.disabled }, `${props.className}`)}>
            {(props.title || required) && (
                <div className="mb-1 flex items-center text-sm font-bold">
                    {props.title && (
                        <p className={`${requiredMargin}`}>{props.title}</p>
                    )}
                </div>
            )}
            <input
                className={`w-full h-10 box-border border outline-none ${border} text-sm px-4 rounded-lg`}
                name={props.name}
                placeholder={props.placeholder}
                value={props.value}
                disabled={props.disabled ? props.disabled : false}
                onChange={(event) =>
                    props.onChange && props.onChange(event.target.value)
                }
            />
            {props.error && (
                <p className="text-xs mt-1 text-error">{props.error}</p>
            )}
        </div>
    );
};

interface InputProps {
    title?: string;
    name?: string;
    placeholder?: string;
    required?: boolean;
    className?: string;
    value?: any;
    error?: string;
    disabled?: boolean;
    onChange?: (value: any) => void;
}

export default Input;