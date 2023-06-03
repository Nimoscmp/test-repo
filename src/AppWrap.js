//  Redux
import { Provider } from "react-redux";
import generateStore from "./redux/store/store";

//  Components
import App from "./App";


const AppWrap = () => {

    const store = generateStore();

    return (
    <>
        <Provider
            store={store}>
        
            <App/>
        
        </Provider>
    </>
    )
}

export default AppWrap
