import { useState } from 'react';
import { Link, matchRoutes } from 'react-router-dom';
import axios from 'axios';


const Login = () => {
    const [uname, setUname] = useState("");
    const [pass, setPass] = useState("");
    const [msg, setMsg] = useState("");
    const [msg2, setMsg2] = useState("");
    const [msg3, setMsg3] = useState("");

    const handleForm = (e) => {
        e.preventDefault();
        var obj = { username: uname, password: pass };
        axios.post("http://127.0.0.1:8000/api/adminLogin", obj).then((succ) => {
            debugger;
            //if(succ.data.username===uname && succ.data.password===pass){
            if (succ.data.logged_admin) {
                setMsg("Login Successfull");
                if (succ.data.logged_session) {
                    alert("welcome Mr "+succ.data.logged_session+ "<---session" );
                    <td id="nav"> <Link to="/">Logout</Link> </td>
                }


            }
            else {
                if (succ.data.username !== uname | succ.data.password !== pass) {
                    //alert(succ.data.username);
                    setMsg2(succ.data.username);
                    setMsg3(succ.data.password);
                }

                setMsg(<h6>USERNAME AND PASSWORD DOESN'T MATCH!</h6>);
            }
        }, (err) => {

            setMsg("Login failed for INTERNAL SERVER PROBLEM");
        });
        //alert(uname + " " +pass);
    }
    return (
        <div align="center" style={{ backgroundImage: "url(/css/loginback.png)", position: "relative" }}>

            <div id="loginbody"  >


                <fieldset align="center">

                    <span className='text-success'>{msg}</span> <br/>


                    <img src="css/admintxt.png" alt="" height="50px" width="150px"></img>
                    <br />
                    <img src="css/adminicon.png" alt="" height="120px" width="140px" ></img>
                    <br />
                    <br />

                    <form onSubmit={handleForm} align="center">
                        <input type="text" value={uname} onChange={function (e) { setUname(e.target.value) }} placeholder=" Enter your Username." required style={{ borderRadius: "20%" }}></input><br />
                        <span className='text-danger'>{msg2}</span><br />

                        <input type="password" value={pass} onChange={(e) => { setPass(e.target.value) }} placeholder=" Enter your Password." required style={{ borderRadius: "20%" }}></input><br />
                        <span className='text-danger'>{msg3}</span>

                        <button type="submit" style={{ borderRadius: "20%", marginTop: "10px" }}> <img src="css/loginbutton.jpg" alt="" height="30px"   ></img></button>  <br />
                        <button type="submit" style={{ borderRadius: "20%", marginTop: "5px" }}><Link to="/regis"> <img src="css/signup.png" alt="" height="30px" /></Link> </button>
                    </form>

                </fieldset>
            </div>
        </div>
    )
}
export default Login;
