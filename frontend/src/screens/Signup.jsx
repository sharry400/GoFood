import React, { useState } from 'react'

const Signup = () => {
    const [credentials, setCredentials] = useState({ name: "", email: "", password: "", location: "" })
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await fetch("http://localhost:5000/api/auth/createuser", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: credentials.name,
                    location: credentials.location,
                    email: credentials.email,
                    password: credentials.password
                })
            })
            const json = await response.json()
            console.log(json)
            if (!json.success) {
                alert("Enter Valid Credentials")
                return
            }
            alert("Signup successful")
        } catch (error) {
            console.error(error)
            alert("Something went wrong")
        }
    }
    const onChange = (event) => {
        setCredentials({ ...credentials, [event.target.name]: event.target.value })
    }
    return (
        <>
            <div className='container'>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" className="form-control" id='name' name='name' value={credentials.name} onChange={onChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="email" aria-describedby="emailHelp" name='email' value={credentials.email} onChange={onChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" name='password' value={credentials.password} onChange={onChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                        <input type="password" className="form-control" id="confirmPassword" name='confirmPassword' value={credentials.confirmPassword} onChange={onChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="location" className="form-label">Address</label>
                        <input type="location" className="form-control" id="location" name='location' value={credentials.location} onChange={onChange} />
                    </div>
                    <button type="submit" className=" m-3 btn btn-success">Submit</button>
                </form>
            </div>
        </>
    )
}

export default Signup