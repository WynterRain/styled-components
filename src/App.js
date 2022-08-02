import styled from "styled-components"
import BasicTitle from "./components/BasicTitle";
import {DefaultButton} from "./components/Button"

function App() {
  return (
    <div style = {{padding:'2rem'}}>
      <BasicTitle special >styled components</BasicTitle>
      <BasicTitle >styled components</BasicTitle>
      <DefaultButton>click me</DefaultButton>
    </div>
  
  )
}

export default App;
