        import React, { useEffect, useState } from 'react'
        import 'react-date-range/dist/styles.css';
        import 'react-date-range/dist/theme/default.css';
        import { DateRange as DateRangePickers } from 'react-date-range';
        import moment from 'moment'
        import Button from '@material-ui/core/Button';
        import Dialog from '@material-ui/core/Dialog';
        import DialogActions from '@material-ui/core/DialogActions';
        import DialogContent from '@material-ui/core/DialogContent';
        import DialogContentText from '@material-ui/core/DialogContentText';
        import DialogTitle from '@material-ui/core/DialogTitle';

        function DateRange() {

            const [open, setOpen] = React.useState(false);

            const handleClickOpen = () => {
                setOpen(true);
            };

            const handleClose = () => {
                setOpen(false);
            };



            const handleSelect = (ranges) => {
                console.log(ranges.selection);
                setDate([ranges.selection])
            }

            const [dateRange, setDate] = useState([
                {
                    startDate: new Date(),
                    endDate: new Date(),
                    key: "selection",
                    showDateDisplay:false
                },
            ])

            return (
                <div>
                    <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                        Choose
                    </Button>
                    <Dialog
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >
                        <DialogTitle style={{paddingBottom:"0px"}} id="alert-dialog-title">{"Select Range"}</DialogTitle>
                        <DialogContent>
                            <DialogContentText id="alert-dialog-description">


                                <DateRangePickers
                                    // months={1}
                                    editableDateInputs={true}
                                    onChange={handleSelect}
                                    moveRangeOnFirstSelection={false}
                                    ranges={dateRange}
                                    // direction="horizontal"
                                />
                            
                            
                            
                            
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose} color="primary">
                                Cancel
                        </Button>
                            <Button onClick={handleClose} color="primary" autoFocus>
                                Select
                        </Button>
                        </DialogActions>
                    </Dialog>
                </div>
            )
        }

        export default DateRange
