import { Button, TextField } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import moment from 'moment'

function TimeArray() {
    const [formData, setFormData] = useState([{time:null}])

    const addFunc = () => {
        formData.push({time:null})
        setFormData([...formData])
    }

    const deleteFunc = (index) => {
        formData.splice(index,1)
        setFormData([...formData])
    }

    useEffect(()=>{
        console.log('FormData: ',formData)
    },[formData])

    return (
        <div>
            {formData.map((data,index) => {
                return (
                    <React.Fragment key={index}>
                        {data.time?moment.unix(data.time).format('HH:mm'):null}
                        <TextField type="time" defaultValue={data.time?moment.unix(data.time).format('HH:mm'):null} value={data.time?moment.unix(data.time).format('HH:mm'):"--:--"} onChange={(e)=>{
                            formData[index].time=moment(`${moment().add(5,'days').format('YYYY-MM-DD')} ${e.target.value}`).unix()
                            console.log(`TiMe: ${index}: `,moment(`${moment().add(5,'days').format('YYYY-MM-DD')} ${e.target.value}`).unix())
                            setFormData([...formData])
                        }}/>
                        <Button onClick={addFunc}>Add</Button><Button onClick={()=>deleteFunc(index)}>Delete</Button>
                        <br/>
                    </React.Fragment>
                )
            })}
        </div>
    )
}

export default TimeArray
