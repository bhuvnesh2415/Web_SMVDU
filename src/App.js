// import React, { forwardRef, useRef } from "react";
// import ReactToPrint, { PrintContextConsumer } from "react-to-print";
import './App.css';
import ImageUpload from './Image';

import React, {useRef} from 'react';
import {render} from "react-dom";
import { useReactToPrint } from "react-to-print"; 
// import { render } from "@testing-library/react";


class ComponentToPrint extends React.Component{
render(){
  return(
  <>
<div> 

<div className='all_form' >
 <div className='ALUMNI_TITLE'>ALUMNI REGISTRATION FORM</div>
 <div className='ALUMNI_FLEX'>
   <div className='ALUMNI_ONE'>
     <div className='ALUMNI_NAME'>Name of the Alumni<span className='star'>*</span></div>
     <div><input type="text" className='ALUMNI_text'  ></input></div>
     <div className='ALUMNI_NAME'>picture<span className='star'>*</span></div>
     <div>
     <ImageUpload />
     </div>
   </div>

   <div className='ALUMNI_TWO'>
     <div className='ALUMNI_NAME'>Gender<span className='star'>*</span></div>
     <select name="plan" className='ALUMNI_text2' >
       <option value="none" selected disabled hidden>--Select--</option>
       <option value="free">Male</option>
       <option value="starter">Femail</option>
       <option value="professional">Transgender</option>
     </select>
   </div>
 </div>
 <div className='ALUMNI_Education'>Present Status</div>
 <div className='ALUMNI_FLEX'>
   <div className='ALUMNI_ONE'>
     <div className='ALUMNI_NAME'>Degree<span className='star'>*</span></div>
     <select name="plan" className='ALUMNI_text2' >
       <option value="none" selected disabled hidden>--Select--</option>
       <option value="free">Free</option>
       <option value="starter">Starter </option>
       <option value="professional">Professional</option>
       <option value="corporate">Corporate</option>
     </select>          </div>
   <div className='ALUMNI_TWO'>
     <div className='ALUMNI_NAME'>Year of Completion<span className='star'>*</span></div>
     <select name="plan" className='ALUMNI_text2' >
       <option value="none" selected disabled hidden>--Select--</option>
       <option value="free">Free</option>
       <option value="starter">Starter </option>
       <option value="professional">Professional</option>
       <option value="corporate">Corporate</option>
     </select>
   </div>
 </div>
 <div className='ALUMNI_Education'>Present Status </div>
 <div className='ALUMNI_FLEX'>
   <div className='ALUMNI_ONE'>
   <div className='ALUMNI_NAME'>Employment Type<span className='star'>*</span></div>
     <select name="plan" className='ALUMNI_text2' >
       <option value="none" selected disabled hidden>--Select--</option>
       <option value="free">Salaried</option>
       <option value="starter">Entrepreneur </option>
       <option value="professional">House Maker</option>
       <option value="corporate">Yet to be Placed</option>
     </select>    
   </div>
   <div className='ALUMNI_TWO'>
   </div>
 </div>
 <div className='ALUMNI_Education'>Employment Details</div>
 <div className='ALUMNI_FLEX'>
   <div className='ALUMNI_ONE'>
     <div className='ALUMNI_NAME'>Present Employer Name</div>
     <div><input type="text" className='ALUMNI_text'  ></input></div>
   </div>
   <div className='ALUMNI_TWO'>
     <div className='ALUMNI_NAME'>Designation</div>
     <div><input type="text" className='ALUMNI_text'  ></input></div>

   </div>
 </div>
 <div className='ALUMNI_Education'>Work Location </div>
 <div className='ALUMNI_FLEX'>
   <div className='ALUMNI_ONE'>
     <div className='ALUMNI_NAME'>Country</div>
     <div><input type="text" className='ALUMNI_text'  ></input></div>
     
     <div className='ALUMNI_NAME'>City</div>
     <div><input type="text" className='ALUMNI_text'  ></input></div>
     
   </div>
   <div className='ALUMNI_TWO'>
     <div className='ALUMNI_NAME'>State</div>
     <div><input type="text" className='ALUMNI_text'  ></input></div>

   </div>
 </div>
 <div className='ALUMNI_Education'>Special Achievements </div>
 <div className='ALUMNI_FLEX'>
   <div className='ALUMNI_ONE'>
     <div className='ALUMNI_NAME'>Special Achievements after graduation</div>
     <div><textarea rows="8" cols="80"  className='ALUMNI_textarea'></textarea></div>
      </div>
   <div className='ALUMNI_TWO'>
   </div>
 </div>
 <div className='ALUMNI_Education'>Higher Studies Details (If Any)</div>
 <div className='ALUMNI_FLEX'>
   <div className='ALUMNI_ONE'>
   <div className='ALUMNI_NAME'>Present Status<span className='star'>*</span></div>
     <select name="plan" className='ALUMNI_text2' >
       <option value="none" selected disabled hidden>- None -</option>
       <option value="free">Free</option>
       <option value="starter">Completed</option>
       <option value="professional">Persuing</option>
     </select> 
     <div className='ALUMNI_NAME'>Country</div>
     <div><input type="text" className='ALUMNI_text'  ></input></div>
     
     <div className='ALUMNI_NAME'>City</div>
     <div><input type="text" className='ALUMNI_text'  ></input></div>
     
   </div>
   <div className='ALUMNI_TWO'>
     <div className='ALUMNI_NAME'>University Name</div>
     <div><input type="text" className='ALUMNI_text'  ></input></div>
     <div className='ALUMNI_NAME'>State</div>
     <div><input type="text" className='ALUMNI_text'  ></input></div>

   </div>
 </div>
 <div className='ALUMNI_Education'>Present Residential Details </div>
 <div className='ALUMNI_FLEX'>
   <div className='ALUMNI_ONE'>
    
     <div className='ALUMNI_NAME'>Country<span className='star'>*</span></div>
     <div><input type="text" className='ALUMNI_text'  ></input></div>
     
     <div className='ALUMNI_NAME'>City<span className='star'>*</span></div>
     <div><input type="text" className='ALUMNI_text'  ></input></div>
     
     <div className='ALUMNI_NAME'>Phone 2 (Residence)</div>
     <div><input type="text" className='ALUMNI_text'  ></input></div>
     
     <div className='ALUMNI_NAME'>Email Id<span className='star'>*</span></div>
     <div><input type="text" className='ALUMNI_text'  ></input></div>
     
   </div>
   <div className='ALUMNI_TWO'>
     <div className='ALUMNI_NAME'>State<span className='star'>*</span></div>
     <div><input type="text" className='ALUMNI_text'  ></input></div>
     <div className='ALUMNI_NAME'>Phone 1 (Office)</div>
     <div><input type="text" className='ALUMNI_text'  ></input></div>
     <div className='ALUMNI_NAME'>Mobile<span className='star'>*</span></div>
     <div><input type="text" className='ALUMNI_text'  ></input></div>

   </div>
 </div>
 <div className='ALUMNI_Submit_main1'><div class="g-recaptcha" data-sitekey="6LeeKRAhAAAAAMClvCBsUCvZh5U9FPmrHlmS_pvi"></div></div>

 <div className='ALUMNI_Submit_main2'><button className='ALUMNI_Submit'>Submit</button></div>
</div></div>
  </>
  )
}

}

export default function App() {
const Example =()=>{
  const ComponentRef=useRef();
  const handlePrint = useReactToPrint({
    content: () => ComponentRef.current,
  });
  return (
    <div>
      <ComponentToPrint ref={ComponentRef}/>
      <div className='ALUMNI_Submit_main2'>
      <button onClick={handlePrint} className='ALUMNI_Submit'>print this out !</button>
      </div>
    </div>
  );
};
render(<Example/>,document.querySelector("#root"));


}
