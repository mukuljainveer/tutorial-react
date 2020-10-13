import React from 'react'

function MemoComponent({name}) {
    console.log('RENDERING MEMO COMPONENT')
    return (
        <div>
            
        </div>
    )
}

export default React.memo(MemoComponent)
