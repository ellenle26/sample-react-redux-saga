import classNames from "classnames";
import { FC, useRef } from "react";

const TagInput: FC<TagInputProps> = (props: TagInputProps) => {
    const required = props.required === true;
    const requiredMargin = required ? "mr-2" : "";
    const border = props.error ? "border-error" : "border-border";

    const inputRef = useRef<HTMLInputElement>(null);


    return (
        <div className={classNames("w-full", { "opacity-50": props.disabled }, props.className)}>
            {(props.title || required) && (
                <div className="mb-1 flex items-center text-sm font-bold">
                    {props.title && (
                        <p className={`${requiredMargin}`}>{props.title}</p>
                    )}
                </div>
            )}
            <div
                className={`h-fit flex items-start flex-wrap w-full bg-white text-gray-800 text-base box-border border outline-none ${border} pt-2 px-4 rounded-lg`}
                onClick={() => {
                    inputRef.current?.focus();
                }}
            >
                {
                    Array.isArray(props.values) && props.values.length > 0 && props.values.map((t,i) => (
                        <div key={i} className="min-w-fit flex items-center mr-2 mb-2 bg-white border border-tag rounded-2xl px-2 py-1">
                            <span className="leading-none mr-1">{t}</span>
                            <img className="cursor-pointer mt-1" alt="close_icon" src="/icons/close.svg" 
                                onClick={() => props.onRemoveTag && props.onRemoveTag(i)}/>
                        </div>
                    ))
                }
                <input
                    ref={inputRef}
                    className="outline-none text-sm mt-1 mb-2"
                    type="text"
                    onKeyDown={(event) => {
                        if (event.key === "Enter") {
                            if (event.currentTarget.value && event.currentTarget.value.trim() !== '') {
                                props.onAddTag && props.onAddTag(event.currentTarget.value);
                                event.currentTarget.value = ''
                            }
                        }
                    }}
                />
            </div>
            {props.error && (
                <p className="text-xs mt-1 text-error">{props.error}</p>
            )}
        </div>
    )
}

export default TagInput;

interface TagInputProps {
    title?: string;
    name?: string;
    placeholder?: string;
    required?: boolean;
    values: string[];
    error?: string;
    disabled?: boolean;
    className?: string;
    onAddTag: (value: string) => void;
    onRemoveTag: (id: number) => void;
}