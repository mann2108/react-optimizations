import React, { useMemo } from 'react';

const Child = (props) => {
    console.log("Child");
    const { arr } = props;
    const summation = useMemo(() => {
        return arr.reduce((agg, currentValue) => {
            return agg + currentValue;
        },0)
    })
    return (<>
        <h1>{props.data}</h1>
        <button onClick={() => props.onClick()}>Click from Child</button>
        <h2>{summation}</h2>
    </>)
}

export default React.memo(Child);