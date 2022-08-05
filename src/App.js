import styled from "styled-components/macro"
import { DefaultButton } from "./components/Buttons";

function App() {

  return (
    <div style= {{padding: "2rem"}}>
     <DefaultButton>Click Me</DefaultButton>
     <DefaultButton large>Click Me</DefaultButton>
    </div>
  
  )
}

export default App;
