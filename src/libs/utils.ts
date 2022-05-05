import { Expression, StaffConditionOption } from "./types";
import { Choice } from "./types";

export const getLabelByValue = (list: Choice[], value: any) => {
    const item = list.find(i => i.value === value);
    if (!item) {
        return null;
    } else {
        return item.label;
    }
}

export const getNumberOrDefault = (value: any, d: string) => {
    if (!value) {
        return d;
    }
    return value;
}

export const staffOptionArrToOptions = (arr: StaffConditionOption[] | null) => {
    if (!arr) {
        return []
    }
    const optionList: Choice[] = [];
    arr.forEach((item) => {
        const choiceItem: Choice = {
        label: item.itemName,
        value: item.itemName
        }
        optionList.push(choiceItem);
    })
    return optionList;
}


export const checkExpressionType = (option: string, staffConditionOptions: StaffConditionOption[] | null) => {
    if (option && staffConditionOptions) {
        const selectedItem = staffConditionOptions.find(item => item.itemName === option);
        if (selectedItem !== undefined) {
            return selectedItem.expressionType;
        }
    }
}

export const checkOptionVals = (option: string, staffConditionOptions: StaffConditionOption[] | null) => {
    if (option && staffConditionOptions) {
        const selectedItem = staffConditionOptions.find(item => item.itemName === option);
        if (selectedItem !== undefined) {
            if (selectedItem.expressionType === Expression.CHOICES) {
                return selectedItem.value;
            }
        }
    }
}

export const dataToString = (file: File) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsText(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
})

export const substractTplContent = (value: string, getSubject: boolean) => {
    if (!value) { return }
    const valArr = value.split("[件名]");
    if (getSubject) {
        return valArr[1];
    } else {
        return valArr[2];
    }
}