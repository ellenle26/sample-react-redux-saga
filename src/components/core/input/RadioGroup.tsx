import { FC } from "react";


const RadioGroup: FC<RadioGroupProps> = ( props: RadioGroupProps ) => {
    const required = props.required === true;
    const requiredMargin = required ? "mr-2" : "";

    return (
        <div className={`${props.className}`}>
            {(props.title || props.required) && (
                <div className={"mb-1 flex items-center text-sm font-bold"}>
                    {props.title && (
                        <p className={`${requiredMargin}`}>{props.title}</p>
                    )}
                </div>
            )}
            <form id="radio_group" className={props.horizontalDisplay ? "flex-row" : "flex-col"}>
                {
                    Array.isArray(props.options) && props.options.length > 0 && props.options.map((item, index) => (
                        <label key={index} className={"cursor-pointer leading-loose flex items-center mb-1"}>
                            <input
                                id="radio"
                                className={"hidden"}
                                type="checkbox"
                                name={item}
                                checked={props.value === item}
                                onChange={(e) => props.onChange && props.onChange(e.target.name)}
                            />
                            <img
                                className={"inline-block mr-3"}
                                src={
                                    props.value === item
                                        ? "/icons/radio_checked.svg"
                                        : "/icons/radio_unchecked.svg"
                                }
                                alt="icon"
                            />
                            <p className={"text-sm text-gray-800"}>{item}</p>
                        </label>
                    ))
                }
            </form>
        </div>
    )
}

interface RadioGroupProps {
    title?: string;
    required?: boolean;
    horizontalDisplay?: boolean;
    options: string[];
    value: string;
    className?: string;
    onChange?: (value: any) => void;
}

export default RadioGroup;