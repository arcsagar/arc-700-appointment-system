import { addUserData } from "./userReducer";

export const loginUser =  (loginUserData:any, navigate:any) => {
    return async (dispatch:any) => {
      
    const bodyData = JSON.stringify(loginUserData); 
  const fetchData = await fetch('http://localhost:3001/login', { 
    method: 'POST', 
    body: bodyData, 
    headers: { 
      'Content-type': 'application/json', 
    } 
  }); 
  const pullData = await fetchData.json(); 
  console.log('pullData',pullData)

  dispatch(addUserData({userData: pullData.userData}))
  navigate(`/${pullData.userData.type}`)
    }
}