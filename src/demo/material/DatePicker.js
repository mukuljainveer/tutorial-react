import React from "react";
import { DateRangePicker } from "materialui-daterange-picker";

const DatePicker = props => {
  const [open, setOpen] = React.useState(true);
  const [dateRange, setDateRange] = React.useState({});

  const toggle = () => setOpen(!open);

  return (
    <>
    {console.log(dateRange)}
    <DateRangePicker
      open={open}
      toggle={toggle}
      onChange={(range) => setDateRange(range)}
    />
    </>
  );
}

export default DatePicker;