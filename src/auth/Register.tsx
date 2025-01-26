import { useRef } from "react";

export default function Register() {
    const emailRef = useRef<HTMLInputElement>(null);
    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const cityRef = useRef<HTMLInputElement>(null);
    const stateRef = useRef<HTMLSelectElement>(null);
    const zipRef = useRef<HTMLInputElement>(null);
    const addressRef = useRef<HTMLInputElement>(null);
    const firstNameRef = useRef<HTMLInputElement>(null);
    const lastNameRef = useRef<HTMLInputElement>(null);
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
            <label htmlFor="inputFirst" className="form-label" >Username</label>
            <input type="text" autoCapitalize="on" className="form-control" id="inputFirst" ref={usernameRef} required />
        </div>
        <div>
            <label htmlFor="inputFirst" className="form-label" >Password</label>
            <input type="text" autoCapitalize="on" className="form-control" id="inputFirst" ref={passwordRef} required />
        </div>
        <div>
            <label htmlFor="inputFirst" className="form-label" >Zipcode</label>
            <input type="text" autoCapitalize="on" className="form-control" id="inputFirst" ref={zipRef} required />
        </div>
        <div>
            <label htmlFor="inputFirst" className="form-label" >City</label>
            <input type="text" autoCapitalize="on" className="form-control" id="inputFirst" ref={cityRef} required />
        </div>
        <div>
            <label htmlFor="inputFirst" className="form-label" >Email</label>
            <input type="text" autoCapitalize="on" className="form-control" id="inputFirst" ref={emailRef} required />
        </div>
        <div>
            <label htmlFor="inputFirst" className="form-label" >Address</label>
            <input type="text" autoCapitalize="on" className="form-control" id="inputFirst" ref={addressRef} required />
        </div>
        <div className="col-md-4">
            <label htmlFor="inputState" className="form-label">State</label>
            <select id="inputState" className="form-select" ref={stateRef} defaultValue={'none'} required>
                <option value='none' disabled>Choose...</option>
                <option value="AL">Alabama</option>
                <option value="AK">Alaska</option>
                <option value="AZ">Arizona</option>
                <option value="AR">Arkansas</option>
                <option value="CA">California</option>
                <option value="CO">Colorado</option>
                <option value="CT">Connecticut</option>
                <option value="DE">Delaware</option>
                <option value="DC">District Of Columbia</option>
                <option value="FL">Florida</option>
                <option value="GA">Georgia</option>
                <option value="HI">Hawaii</option>
                <option value="ID">Idaho</option>
                <option value="IL">Illinois</option>
                <option value="IN">Indiana</option>
                <option value="IA">Iowa</option>
                <option value="KS">Kansas</option>
                <option value="KY">Kentucky</option>
                <option value="LA">Louisiana</option>
                <option value="ME">Maine</option>
                <option value="MD">Maryland</option>
                <option value="MA">Massachusetts</option>
                <option value="MI">Michigan</option>
                <option value="MN">Minnesota</option>
                <option value="MS">Mississippi</option>
                <option value="MO">Missouri</option>
                <option value="MT">Montana</option>
                <option value="NE">Nebraska</option>
                <option value="NV">Nevada</option>
                <option value="NH">New Hampshire</option>
                <option value="NJ">New Jersey</option>
                <option value="NM">New Mexico</option>
                <option value="NY">New York</option>
                <option value="NC">North Carolina</option>
                <option value="ND">North Dakota</option>
                <option value="OH">Ohio</option>
                <option value="OK">Oklahoma</option>
                <option value="OR">Oregon</option>
                <option value="PA">Pennsylvania</option>
                <option value="RI">Rhode Island</option>
                <option value="SC">South Carolina</option>
                <option value="SD">South Dakota</option>
                <option value="TN">Tennessee</option>
                <option value="TX">Texas</option>
                <option value="UT">Utah</option>
                <option value="VT">Vermont</option>
                <option value="VA">Virginia</option>
                <option value="WA">Washington</option>
                <option value="WV">West Virginia</option>
                <option value="WI">Wisconsin</option>
                <option value="WY">Wyoming</option>
            </select>
        </div>

    </>
    )
}