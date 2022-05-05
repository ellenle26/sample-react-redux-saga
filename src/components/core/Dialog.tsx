import classNames from "classnames";
import { FC } from "react";

import Button from "./Button";

const Dialog: FC<DialogProps> = (props: DialogProps) => {


    return (
        <div id="dialog" className={classNames({"hidden": !props.opened}, "absolute top-14 left-0 w-full h-[calc(100%-56px)] bg-black_70")}>
            <div className={classNames({"w-fit": props.width == null}, `${props.width}`, "max-w-4xl p-6 border-white rounded-xl relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white max-h-dialog overflow-auto")}>
                <div className="font-bold text-primary mb-5">{props.title}</div>
                <div>{props.children}</div>
                <div className="w-full flex justify-center mt-10">
                    <Button text={props.cancelText} type="outline" onClick={() => props.onClose && props.onClose()} 
                        className={classNames({ "mr-20": props.functionBttnMargin == null }, "font-bold text-primary border-primary rounded-button px-6 py-4 max-h-14")}/>
                    <Button text={props.saveText} type="contained" onClick={() => props.onSave && props.onSave()}
                        className="font-bold text-white bg-primary border-primary rounded-button px-6 py-4 max-h-14"/>
                </div>
            </div>
        </div>
    )
}

interface DialogProps {
    title?: string,
    children: any;
    opened: boolean,
    width?: string,
    saveText: string,
    cancelText: string,
    functionBttnMargin?: string,
    onSave?: () => void,
    onClose?: () => void
}

export default Dialog;