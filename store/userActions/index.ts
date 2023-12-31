import { Dispatch } from "redux";
import { UserActionType, UserActions } from "../../reducers/userReducers/types";
import {
  Login,
  removeTokens,
  setAccessToken,
  setRefreshToken,

  
} from '../services/api-user-service';
import { toast } from "react-toastify";
import jwtDecode from "jwt-decode";



export const LoginUser = (user: any) => {
    return async (dispatch: Dispatch<UserActions>) => {
      try {
        dispatch({ type: UserActionType.START_REQUEST });
        const data = await Login(user);
        const { response } = data;
        console.log("response ", response);
  
        if (response.success) {
          const { accessToken, refreshToken, message } = response;
          removeTokens();
          setAccessToken(accessToken);
          setRefreshToken(refreshToken);
          toast.success(response.message);
          AuthUser(accessToken, response.message, dispatch);
        } else {
          toast.error(response.message);
        }
        dispatch({
          type: UserActionType.FINISH_REQUEST,
          payload: response.message,
        });
      } catch {}
    };
  };


  export const AuthUser = (
    token: string,
    message: string,
    dispatch: Dispatch<UserActions>) => {
    const decodedToken = jwtDecode(token) as any;
    dispatch({
      type: UserActionType.LOGIN_USER_SUCCESS,
      payload: {
        message,
        decodedToken,
      },
    });
  };