/**
 * @jest-environment jsdom
*/


import TimePicker from "@components/core/input/TimePicker";
import { Time } from "@stores/slices/hrbc/mailSettingDetailsSlice";
import { fireEvent, render } from "@testing-library/react";

const time: Time = {
    hour: '12',
    minute: '',
    timeErr: true
}

const time2: Time = {
    hour: '12',
    minute: '',
    timeErr: false
}

const changetime = jest.fn();

test('snapshot testing', () => {
    const renderResult = render(<TimePicker time={time} title="time"/>);
    expect(renderResult.asFragment()).toMatchSnapshot();
})

test('change hour time testing', () => {
    const renderResult = render(<TimePicker time={time} title="time" onChange={changetime} required />);
    const hourSelect = renderResult.container.getElementsByTagName("select")[0];
    const minuteSelect = renderResult.container.getElementsByTagName("select")[1];
    fireEvent.change(hourSelect, { target: { value: "12" } });
    fireEvent.change(minuteSelect, { target: { value: "20" } });
    expect(hourSelect.value).toBe("12");
    expect(minuteSelect.value).toBe("");
    expect(changetime).toHaveBeenCalledTimes(2);
})

test('disable time testing', () => {
    const renderResult = render(<TimePicker time={time2} title="time" error="error" onChange={changetime} disabled required/>);
    const div = renderResult.container.children[0];
    expect(div).toBeTruthy();
})

test('required time testing', () => {
    const renderResult = render(<TimePicker time={time2} error="error" onChange={changetime} required />);
    const div = renderResult.container.children[0];
    expect(div).toBeTruthy();
})