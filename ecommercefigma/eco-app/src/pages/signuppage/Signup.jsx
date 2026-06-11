import React, { useState } from 'react'
import "./Signup.css"

const Signup = () => {

    const [formdata, setformdata] = useState({
        name: "",
        email: "",
        age: "",
        password: ""
    })

    const [errors, setErrors] = useState({})

    const handelsubmit = (e) => {
        e.preventDefault()

        let newErrors = {}

        
        const nameRg = /^[A-Z][a-zA-Z ]+$/
        const emailRg = /^[a-zA-Z][a-zA-Z0-9]*@(gmail\.com|hotmail\.com)$/
        const ageRg = /^(1[89]|[2-9][0-9])$/
        const passwordRg = /^.{6,12}$/

        if (!formdata.name) {
            newErrors.name = "Name is required"
        }
        else if (!nameRg.test(formdata.name)) {
            newErrors.name =
                "First letter must be capital and only letters allowed"
        }

    
        if (!formdata.email) {
            newErrors.email = "Email is required"
        }
        else if (!emailRg.test(formdata.email)) {
            newErrors.email = "Enter valid email.valid type @gmail.com or hotmail.com"
        }


        if (!formdata.age) {
            newErrors.age = "Age is required"
        }
        else if (!ageRg.test(formdata.age)) {
            newErrors.age = "Age must be 18 or above"
        }

    
        if (!formdata.password) {
            newErrors.password = "Password is required"
        }
        else if (!passwordRg.test(formdata.password)) {
            newErrors.password =
                "Password must be at least 6 characters and maximum 12"
        }

        setErrors(newErrors)

        if (Object.keys(newErrors).length === 0) {
            console.log(formdata)
        }
    }

    return (
        <div className='Form'>
            <form onSubmit={handelsubmit}>

                <h1>Sign Up your New Account</h1>

                <label>Name:</label>
                <input
                    type="text"
                    value={formdata.name}
                    onChange={(e) =>
                        setformdata({ ...formdata, name: e.target.value })
                    }
                    placeholder="Enter Your name"
                />
                <p>{errors.name}</p>

                <label>Email:</label>
                <input
                    type="text"
                    value={formdata.email}
                    onChange={(e) =>
                        setformdata({ ...formdata, email: e.target.value })
                    }
                    placeholder="Enter Your Email"
                />
                <p>{errors.email}</p>

                <label>Age:</label>
                <input
                    type="number"
                    value={formdata.age}
                    onChange={(e) =>
                        setformdata({ ...formdata, age: e.target.value })
                    }
                    placeholder="Enter Your age"
                />
                <p>{errors.age}</p>

                <label>Password:</label>
                <input
                    type="password"
                    value={formdata.password}
                    onChange={(e) =>
                        setformdata({ ...formdata, password: e.target.value })
                    }
                    placeholder="Enter Your Password"
                />
                <p>{errors.password}</p>

                <button type="submit">Submit Data</button>

            </form>
        </div>
    )
}

export default Signup