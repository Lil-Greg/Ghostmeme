import { useRef } from "react";

export default function register() {
    const firstNameRef = useRef<HTMLInputElement>(null);
    const lastNameRef = useRef<HTMLInputElement>(null);
    const passWordRef = useRef<HTMLInputElement>(null);
    return (<>
        <div className="col-md-6">
            <label htmlFor="inputFirst" className="form-label" >First Name</label>
            <input type="text" autoCapitalize="on" className="form-control" id="inputFirst" ref={firstNameRef} required />
        </div>
        <div className="col-md-6">
            <label htmlFor="inputLast" className="form-label" >Last Name</label>
            <input type="text" autoCapitalize="on" className="form-control" id="inputLast" ref={lastNameRef} required />
        </div>
        <div>
            <label htmlFor="inputFirst" className="form-label" >Password</label>
            <input type="text" autoCapitalize="on" className="form-control" id="inputFirst" ref={passWordRef} required />
        </div>
    </>
    )
}