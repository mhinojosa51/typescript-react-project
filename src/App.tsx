import {render} from 'react-dom';
import { FunctionComponent, StrictMode } from 'react';

const App: FunctionComponent = () => {
    return (
        <StrictMode>
            <div>React is Running</div>
        </StrictMode>
    )
}

render(<App />, document.getElementById("root"));