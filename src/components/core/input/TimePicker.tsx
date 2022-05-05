import { Time } from "@stores/slices/hrbc/mailSettingDetailsSlice";
import { FC } from "react";

const TimePicker: FC<TimePickerProps> = (
    props: TimePickerProps,
) => {
    const required = props.required === true;
    const requiredMargin = required ? "mr-2" : "";


    return (
        <div className={`w-32 ${props.disabled ? 'opacity-50' : ''} ${props.className}`}>
            {(props.title || required) && (
                <div className="mb-1 flex items-center text-sm font-bold">
                    {props.title && (
                        <p className={`${requiredMargin}`}>{props.title}</p>
                    )}
                </div>
            )}
            <div className={`w-28 h-10 border ${props.time?.timeErr || props.error ? "border-error" : "border-border"} rounded-lg leading-loose flex justify-evenly items-center px-4 py-2`}>
                <label className="relative">
                    <select
                        className={`appearance-none outline-none cursor-pointer`}
                        onChange={(event) => {
                            props.onChange && props.onChange(event.target.value, "hour");
                            props.round ? props.onChange && props.onChange("00", "minutes") : '';
                        }}
                        value={props.time?.hour || ""}
                    >
                        <option value="">&nbsp;</option>
                        {   
                            Array.from({ length: 24 }, (_, i) => (
                                <option key={i} value={i.toString().length < 2 ? "0" + i : i}>
                                    &nbsp;&nbsp;{i.toString().length < 2 ? "0" + i : i}&nbsp;&nbsp;
                                </option>
                            ))
                        }
                    </select>
                </label>
                <span>:</span>
                <label className="relative">
                    {props.round ? 
                    <span>00</span> :
                    <select
                        className={`appearance-none outline-none cursor-pointer`}
                        onChange={(event) => props.onChange && props.onChange(event.target.value, "minutes")}
                        value={props.time?.minute || ""}
                    >
                        <option value="">&nbsp;</option>
                        { 
                            Array.from({ length: 60 }, (_, i) => (
                                <option key={i} value={i.toString().length < 2 ? "0" + i : i}>
                                    &nbsp;&nbsp;{i.toString().length < 2 ? "0" + i : i}&nbsp;&nbsp;
                                </option>
                            ))
                        }
                    </select>}
                </label>
            </div>
            {props.error && (
                <p className="text-xs mt-1 text-error">{props.error}</p>
            )}
        </div>
    );
};

interface TimePickerProps {
    title?: string;
    required?: boolean;
    error?: string;
    disabled?: boolean;
    className?: string;
    time: Time;
    round?: boolean;
    onChange?: (value: any, type: string) => void;
}

export default TimePicker;