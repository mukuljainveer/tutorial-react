import React from 'react'
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import { TextField } from '@material-ui/core';
import MomentUtils from '@date-io/moment';


function Calendar() {
    const [selectedDate, handleDateChange] = React.useState(new Date());

    return (
        <>
            <MuiPickersUtilsProvider utils={MomentUtils}>
                <DatePicker
                    renderInput={(props) => <TextField {...props} />}
                    value={selectedDate}
                    onChange={(date) => handleDateChange(date)}
                />
            </MuiPickersUtilsProvider>
        </>
    )
}

export default Calendar
