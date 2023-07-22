import ReactDOM from "react-dom";
import AppDialog from "../../../common/AppDialog";
import { useRef, useState } from "react";

const UserProfile = () => {
    const dialogRef:any = useRef();
    const renderId: any = document.getElementById("app-dialog");
    const [error, setError] = useState('');
    const showDialog  = ReactDOM.createPortal(
        <AppDialog
          dialogRef={dialogRef}
          title={error}
          classKey={'blueClass'}
        />,
        renderId
      );
      const login = () => {
     
        const currentError = 'Login error';
        setError(currentError)
          dialogRef?.current?.showModal();
      
        }
 
    
    return (
        <div>
            <h1>User Profile </h1>
            <button onClick={login}>showDialog</button>
            {showDialog}
           
        </div>
    )
};

export default UserProfile;