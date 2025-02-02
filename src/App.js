
import Main  from "./components/Main"
import {Provider} from "react-redux"
import appStore from "./redux/appStore";


const App =()=>{
  return <div>
   <Provider store={appStore}><Main/></Provider>
  </div>
}

export default App;
