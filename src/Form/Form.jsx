import React from 'react';
import './Form.css';

export const Form = () => {
    const [user, setUser] = React.useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        phonenumber: ''
    })
    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted');
        var formdata = {
            firstname: user.firstname,
            lastname: user.lastname,
            email: user.email,
            password: user.password,
            phonenumber: user.phonenumber
        }
        console.log(formdata);
        alert(`Form submitted successfully with data: ${JSON.stringify(formdata)}`);
    };
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUser(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    return (
        <>

            <form className="form-container" onSubmit={handleSubmit}>

                <h1>Registration Form</h1>
                <p>Please fill in this form to create an account.</p>
                <label htmlFor="name">FirstName:</label>
                <input type="text" id="name" name="firstname" required value={user.firstname} onChange={handleInputChange} />

                <label htmlFor="name">LastName:</label>
                <input type="text" id="name" name="lastname" required value={user.lastname} onChange={handleInputChange} />


                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required value={user.email} onChange={handleInputChange} />


                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" required value={user.password} onChange={handleInputChange} />

                <label htmlFor="phonenumber">PhoneNumber:</label>
                <input type="text" id="phonenumber" name="phonenumber" required value={user.phonenumber} onChange={handleInputChange} />


                <button type="submit">Submit</button>
            </form>
        </>

    );
}