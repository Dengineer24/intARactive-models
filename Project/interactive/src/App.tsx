import React, { useContext } from "react";
import Main from "./containers/Main"
import Loading from "./containers/Loading"
import ReactDOM from "react-router-dom"

class App extends React.Component {
    state = {
      loading: true
    };
  
    componentDidMount() {
      // this simulates an async action, after which the component will render the content
      demoAsyncCall().then(() => this.setState({ loading: true }));
    }

    render() {
      const { loading } = this.state;
      
      if(loading) { 
        return(
<>
            <div >

            <Loading />

            </div>
        </>
        );
      }
      
      return (
        <>
            <div className="App">
                <Main />
            </div>
        </>
      ); 
    }
  }
  
  function demoAsyncCall() {
    return new Promise((resolve) => setTimeout(() => resolve('success'), 1500));}
  /*
  
  ReactDOM.render(
    <App />,
    document.getElementById('app')
  );*/

export default App;
