import React, { useCallback, useMemo, useState } from 'react';
import Child from './Child';
import Child2 from './Child2';
import BuggyComponent from './BuggyComponent';
import ErrorBoundary from './ErrorBoundary';
const Parent = () => {
    const [show, setShow] = useState(false);
    console.log("Parent");
    const updateShow = useCallback(() => {
        setShow((prev) => !prev);
    }, [setShow]);
    return (<>
        {show && <h1>Text</h1>}
        <button onClick={() => setShow((prev) => !prev)}>Click Me</button>
        <hr />
        <Child data={"Hello World"} onClick={updateShow} arr={useMemo(() => [1, 2, 3], [])} />
        <Child2 />
        <ErrorBoundary>
            <BuggyComponent />
        </ErrorBoundary>
    </>)
}

export default Parent;