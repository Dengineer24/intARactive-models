import React, { useContext } from "react";
//import { AuthContext } from "./context/AuthContext";
//import Main from "./containers/main"
import Home from "./pages/Home/Home"
import Main from "./containers/Main"

function App() {

    //const user = useContext(AuthContext);

    return (
        <>
                <div className="App">
                    
                    <Main />
                    
            </div>
        </>
    );
}

export default App;
