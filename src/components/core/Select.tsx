import classNames from "classnames";
import { Choice } from "libs/types";
import { memo, useRef } from "react";

const Select: React.FC<SelectProps> = (props) => {
    const { items, className, fullWidth, onChange, value, disabled } = props;
    const border = props.error ? "border-error" : "border-border";
    const ref = useRef(null);
    return <div className={classNames(className, "relative inline-block", {
        "w-full": fullWidth === true }, { "opacity-50": disabled})} role={"core-select"}>
        {(props.title) && (
            <div className={"mb-1 flex items-center text-sm font-bold"}>
                {props.title && (
                    <p>{props.title}</p>
                )}
            </div>
        )}
        <select className={classNames("peer outline-none rounded-md cursor-pointer font-medium text-base border border-solid appearance-none pl-4 py-2 pr-8", `${border}`, {
            "w-full": fullWidth === true
        })} ref={ref} onChange={event => onChange && onChange(event.target.value)} value={value} disabled={disabled}>
            {props.placeholder && <option value={""}>{props.placeholder}</option>}
            {items.map((item, index) => {
                return <option key={index} value = {item.value}>{item.label}</option>
            })}
        </select>
        {props.title ? 
            <img alt="arrow" src="/icons/arrow_down.svg" className="absolute bottom-5 right-4 peer-focus:rotate-180" /> :
            <img className="absolute top-1/2 right-0 pointer-events-none" style={{ transform: "translate(0, -50%)" }} src="/icons/down_icon.svg" />
        }
    </div>
}


interface SelectProps {
    title?: string;
    placeholder?: string;
    className?: string;
    items: Choice[];
    fullWidth?: boolean;
    value: any;
    disabled?: boolean;
    error?: string;
    onChange?: (value: any) => void;
}


export default  memo(Select);