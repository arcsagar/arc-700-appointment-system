import { setError, setLoading } from "../authStore/authReducer";
import { loginKey, storeLocal } from "../commonFun";
import { addUserData } from "./userReducer";

export const loginUser = (loginUserData: any, navigate: any) => {
  return async (dispatch: any) => {
    try {
      const bodyData = JSON.stringify(loginUserData);
      const resObj: any = await fetch("http://localhost:3001/login", {
        method: "POST",
        body: bodyData,
        headers: {
          "Content-type": "application/json",
        },
      });
      // console.log("resObj", resObj);

      const resBody = await resObj.json();
      dispatch(setLoading({loading:false}))
      if (resBody.status === 200) {
          console.log("resBody", resBody.token);
          storeLocal(loginKey,resBody.token)
        dispatch(addUserData({ userData: resBody.userData }));
        navigate(`/${resBody.userData.type}`);
      } else {
        alert(resBody.msg);
        dispatch(setError({error: resBody.msg}))
      }
    } catch (error) {
      alert(error);
      const errorString = 'something went wrong';
      dispatch(setLoading({loading:false}))
      dispatch(setError({error: errorString}))
    }
  };
};
