import { AlertDanger, AlertInfo, AlertSucces, AlertWarning } from "@/components/alert";


const TestAlert = () => {
    
   return(
       <>
           <div className="m-10">
               <AlertInfo title="Alert Info">
                   Alert dengan tipe info
               </AlertInfo>
           </div>
           
           <div className="m-10">
               <AlertSucces title="Alert succes">
                   Alert dengan tipe sukses 
               </AlertSucces>
           </div>

           <div className="m-10">
               <AlertWarning title="Alert Warning">
                   Alert dengan tipe warning
               </AlertWarning>
           </div>

            <div className="m-10">
               <AlertDanger title="Alert Danger">
                   Alert dengan tipe Danger 
               </AlertDanger>
           </div>
       </>
   )
}


export default TestAlert;
