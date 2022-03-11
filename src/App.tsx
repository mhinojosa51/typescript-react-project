import {render} from 'react-dom';
import { FunctionComponent, StrictMode } from 'react';

const App: FunctionComponent = () => {
    return (
        <StrictMode>
            <div>React</div>
        </StrictMode>
    )
}

render(<App />, document.getElementById("root"));