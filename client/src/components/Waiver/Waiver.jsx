import React from "react";



const Waiver = () => {
    const URL = "https://form.jotform.com/230127028620141" //embed URL
    const styles = {
        height: "500px",
        width: "100%",
    }

    return (
        
        <div className="waiver-container" >
            <div> 
                {/* <button onClick={() => window.location.href = 'https://form.jotform.com/230127028620141'}>Waiver</button> */}
                {/* const styles = {} // if you want to add some custom CSS */}
                

                <iframe title="your title"  style={styles} src={URL}></iframe>
                
            </div>
        </div>
      )
    };
    
    export default Waiver;

   