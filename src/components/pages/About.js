import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import plan from '../../../public/plan.PNG';
function About() {
    const [blur, setBlur] = useState(true)
    const notify = () => toast.warn(`Click to ${blur === true ? "Show" : "Blur"} the plan`);
    useEffect(() => {
        notify()
    }, [blur])
    console.log(blur)
    return (
        <div>
            <ToastContainer />
            <h1>Internship Under Yourself</h1>
            {
                blur === true ?
                    <img src="plan.PNG" alt='My plan' style={{ width: "100%", filter: "blur(0.2rem)" }} onClick={() => setBlur(!blur)} className="planing" />
                    :
                    <img src="plan.PNG" alt='My plan' style={{ width: "100%", filter: "blur(0)" }} onClick={() => setBlur(!blur)} className="planing" />

            }
            {/* <img src="plan.PNG" alt='My plan' onClick={() => setBlur(!blur)} className={blur ? "planImage planing" : "planImage noBlurPlanning"} /> */}
            {/* <img src="plan.PNG" alt='My plan' style={{width:"100$", filter: "blur(1.5rem)" }} onClick={() => setBlur(!blur)} className="planing" /> */}
        </div>
    )
}

export default About
