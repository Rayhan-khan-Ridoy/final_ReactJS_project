import { Link } from 'react-router-dom';
import axios from 'axios';

const Admin_header = () => {


return (
    <div>
        <div id="header" align="center"  >



            <table>
                <tr>
                    <td id="nav" ><p id="name">ONLINE SHOP</p></td>
                    <td id="nav">  <Link to="/regis">Register Admin</Link></td>
                    <td id="nav"><Link to="/">Login</Link></td>




                </tr>
            </table>
        </div>



    </div>
)
}


export default Admin_header;
