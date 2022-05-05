import classNames from "classnames";
import { memo } from "react"

const TextArea: React.FC<TextAreaProps> = (props) => {
    const {title, value, fullWidth, rows, onChange, className} = props;
    return <div className={classNames(className)}>
        {title && <p className="mb-2 text-base">{title}</p>}
        <textarea rows={rows ? rows: 20}
        onChange = {e => onChange && onChange(e.target.value)} 
        className={classNames("outline-none border-solid border", {"w-full": fullWidth === undefined || fullWidth === true})} 
        value={value}/>
    </div>
}

interface TextAreaProps {
    className?: string;
    title?: string;
    value?: string;
    fullWidth?: boolean;
    rows?: number;
    onChange?: (value: string) => void;
}

export default memo(TextArea);

