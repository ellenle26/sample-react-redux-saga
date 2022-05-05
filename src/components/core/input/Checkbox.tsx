import classNames from "classnames";
import { FC } from "react";

const Checkbox: FC<CheckboxProps> = (props: CheckboxProps) => {


    return (
        <div className={classNames("inline-block mt-3 mr-4", { "opacity-50": props.disabled }, props.className)}>
            <label className={"cursor-pointer leading-loose flex items-center"}>
                <input
                    id="checkbox"
                    className={"hidden"}
                    type="checkbox"
                    disabled={props.disabled ? props.disabled : false}
                    onChange={(event) => props.onChange && props.onChange(event.target.checked)}
                />
                <img
                    className={"inline-block mr-1"}
                    src={
                        props.checked
                            ? "/icons/checkbox_checked.svg"
                            : "/icons/checkbox_unchecked.svg"
                }
                    alt="icon"
                />
                {props.label && (
                    <p className={"text-sm text-gray-800"}>{props.label}</p>
                )}
            </label>
        </div>
    );
};

export interface CheckboxProps {
    checked?: boolean;
    label?: string;
    disabled?: boolean;
    className?: string;
    onChange?: (value: boolean) => void;
}

export default Checkbox;