import { useState } from 'react';
import {Link} from 'react-router-dom';

import axios from 'axios';

const Registration = () => {
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");

    const [msg, setMsg] = useState("");

    const [msg2, setMsg2] = useState("");
    const [msg3, setMsg3] = useState("");
    const [msg4, setMsg4] = useState("");
    const [msg5, setMsg5] = useState("");
    const [msg6, setMsg6] = useState("");

    const handleForm = (e) => {
        e.preventDefault();
        var obj = { name: name, username: username, password: password, email: email, address: address };
        axios.post("http://127.0.0.1:8000/api/regis", obj).then((succ) => {
            //debugger;
            if (succ.data.name && succ.data.username && succ.data.password && succ.data.email && succ.data.address) {
                // debugger;
                //   setMsg("Login Successfull");
                //return <Link to="/dashboard" />;
                alert("registration succesfull!");


            }
            else {
                if (succ.data.name.length < 5) {
                    setMsg3(succ.data.name);
                }

                if (succ.data.username.length < 5) {
                    //alert(succ.data.username);
                    setMsg2(succ.data.username);

                    // setMsg3(succ.data.password);
                }

                if (succ.data.password.length < 8) {
                    setMsg4(succ.data.password);
                }

                if (succ.data.email !== null) {
                    setMsg5("Entered email address is OK!");
                }

                if (succ.data.address !== null) {
                    setMsg6("Entered admin address is OK!");
                }






                setMsg("Registration failed");
            }
        }, (err) => {

            setMsg("Registration failed for INternal Server Problem");
        });
        //alert(uname + " " +pass);
    }
    return (
        <div class="tablebody2">
        <fieldset align="center">
            
            <img src="css/Register_here_2_large.png" alt="" height="200px" width="500px"/>
            <form onSubmit={handleForm} align="center">
                <table border="1" align="center">

                    <tr>
                        <th></th>
                        <th></th>

                    </tr>
                    <tr style={{border:"2px solid",backgroundColor:"cyan"}}>
                        <td >
                            <span>Admin-name </span>
                        </td>

                        <td >
                            :<input type="text" value={name} onChange={function (e) { setName(e.target.value) }} placeholder="Name" required></input><br />
                            <span className='text-danger'>{msg3}</span><br />
                        </td>
                    </tr>
                    <tr style={{backgroundColor:"yellow"}}>
                        <td >
                            <span>username </span>
                        </td>

                        <td >
                            :<input type="text" value={username} onChange={function (e) { setUsername(e.target.value) }} placeholder="username" required></input><br />
                            <span className='text-danger'>{msg2}</span><br />
                        </td>
                    </tr>
                    <tr style={{backgroundColor:"#eb5834"}}>
                        <td>
                            <span>password </span>
                        </td>
                        <td>:<input type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" required></input><br />
                            <span className='text-danger'>{msg4}</span><br />
                        </td>
                    </tr>
                    <tr style={{backgroundColor:"yellow"}}>
                        <td>
                            <span>email </span>
                        </td>
                        <td> :<input type="email" value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder="email" required></input><br />
                            <span className='text-success'>{msg5}</span><br />
                        </td>
                    </tr>
                    <tr style={{border:"2px solid",backgroundColor:"cyan"}}>
                        <td>
                            <span>address</span>
                        </td>
                        <td> :<input type="text" value={address} onChange={(e) => { setAddress(e.target.value) }} placeholder="address" required></input><br />
                            <span className='text-success'>{msg6}</span><br /> 
                        </td>
                    </tr>

                    <tr >
                        <td >
                        <button type="submit" style={{borderRadius:"20%"}}><img src="css/registernow.png" alt="" height="50px" /></button>
                        </td>
                        <td><span className='text-danger'>{msg}</span></td>
                    </tr>


                </table>




            </form>
        </fieldset>
        </div>
    )
}
export default Registration;
