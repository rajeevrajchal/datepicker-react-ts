import React, {useState} from 'react';
import DatePicker from "./common/datePicker";

function App() {
    const [selectedDate, setSelectedDate] = useState('')
    const handleOnChange = (selectedDay: any) => {
        setSelectedDate(selectedDay)
    }
    return (
        <>
            <DatePicker onChange={handleOnChange}/>
            <p>your selected day is {selectedDate} </p>
        </>
    );
}

export default App;
