
"use client"


import { ButtonSuccess, ButtonWarning, ButtonDanger, Buttoncoba, DangerOutline, DangerInfo } from "../../components/button";


const TestButton = () => {
   return(
       <div className="m-10">
           <ButtonSuccess type="button" onClick={() => alert("Success button clicked!")}>
               Success Button
           </ButtonSuccess>
           <ButtonWarning type="button" className="ml-2" onClick={() => alert("Warning button clicked!")}>
               Warning Button
           </ButtonWarning>
           <ButtonDanger type="button" className="ml-2" onClick={() => alert("Danger button clicked!")}>
               Danger Button
           </ButtonDanger>
            <Buttoncoba type="button" className="ml-2" onClick={() => alert("Danger button clicked!")}>
               Danger Button
           </Buttoncoba>
            <DangerOutline type="button" className="ml-2" onClick={() => alert("Danger button clicked!")}>
               Danger Button
           </DangerOutline>
           <DangerInfo type="button" className="ml-2" onClick={() => alert("Danger button clicked!")}>
               Danger Button
           </DangerInfo>
       </div>
   )
}


export default TestButton;

