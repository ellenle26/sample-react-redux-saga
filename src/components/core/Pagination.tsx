import classNames from "classnames";
import { memo } from "react";

const Pagination: React.FC<PaginationProps> = (props) => {
    const {activedPage, total, paginationItems, onPageChange} = props;
    return <div className="flex flex-row justify-center" role={"pagination"}>
        <div className={classNames("flex items-center justify-center w-10 h-10 min-w-10 min-h-10 cursor-pointer", {
            "cursor-pointer": activedPage > 0
        })} onClick={() => activedPage > 0  && onPageChange && onPageChange(activedPage - 1)}>
            {activedPage > 0 && <img src="/icons/left_icon.svg"/>}
        </div>
        {paginationItems.map(value => <div key={value} className = {classNames("flex text-primary cursor-pointer font-medium text-base items-center justify-center px-2",{
            "bg-secondary rounded-full cursor-default w-10 h-10 min-w-10 min-h-10 p-0": activedPage + 1 === value
        })} onClick = {() => {
            if (value !== "...") {
                onPageChange && onPageChange(value - 1);
            } else {
                const index = paginationItems.indexOf("...");
                onPageChange && onPageChange(paginationItems[index - 1]);
            }
        }}>{value}</div>)}
        <div className={classNames("flex items-center justify-center w-10 h-10 min-w-10 min-h-10", {
            "cursor-pointer": activedPage < total - 1 
        })} onClick={() => activedPage < total - 1  && onPageChange && onPageChange(activedPage + 1)}>
            {activedPage < total - 1 && <img src="/icons/right_icon.svg"/>}
        </div>
    </div>
}

interface PaginationProps {
    total: number;
    activedPage: number;
    paginationItems: any[];
    onPageChange?: (value: number) => void;
}

export default memo(Pagination);