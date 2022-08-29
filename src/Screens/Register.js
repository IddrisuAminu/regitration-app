import React, { useEffect, useState, useContext } from "react";
import React from "react";
import { Link, useNavigation } from "react-router-dom";

function Register() {
    const navigate = useNavigate();
    const { success, loading, User } = useContext();
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    useEffect(() => {
        if (success) {
            navigate("/")
        }
    },[success])

    return
    
        <form className="form" >


            <div >
                <div form-group>
                    < lebl htmfor="username">username</label>
                    <input type="text" className='form-control'
                        placeholder="enter a valid password" value={password} />
                </div>
                <button type="submit" >


                </button>

                <div className="row">
                    I already have an account
                    <Link to="/login">
                        Login to my account
                    </Link>
                pl,
                    
                

                </div>
</div>
        </form>
    
}

export default Register;
