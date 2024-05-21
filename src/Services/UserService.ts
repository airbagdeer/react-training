import axios from "axios";
import { UserModel } from "../Models/UserModel";
import { appConfig } from "../Utils/AppConfig";
import { jwtDecode } from "jwt-decode";
import { store, userActions } from "../Redux/store";
import { CredentialsModel } from "../Models/CredentialsModel";

class UserService {
  constructor() {
    const token = localStorage.getItem("token");
    if (token) {
      const container = jwtDecode<{ user: UserModel }>(token);
      const dbUser = container.user;

      const action = userActions.loginUser(dbUser);
      store.dispatch(action);

      
    }
  }

  public async register(user: UserModel) {
    //send user to server
    const response = await axios.post<string>(appConfig.registerUrl, user);
    //get the token
    const token = response.data; //JWT - Json web token
    //extract user
    const container = jwtDecode<{ user: UserModel }>(token);
    const dbUser = container.user;
    //update global state
    const action = userActions.registerUser(dbUser);
    store.dispatch(action);

    localStorage.setItem("token", token);
  }

  public async login(credentials: CredentialsModel) {
    //send user to server
    const response = await axios.post<string>(appConfig.loginUrl, credentials);
    //get the token
    const token = response.data; //JWT - Json web token
    //extract user
    const container = jwtDecode<{ user: UserModel }>(token);
    const dbUser = container.user;
    //update global state
    const action = userActions.loginUser(dbUser);
    store.dispatch(action);

    localStorage.setItem("token", token);
  }

  public logout() {
    //update global state
    const action = userActions.logoutUser();
    store.dispatch(action);

    localStorage.removeItem("token");
  }
}

export const userService = new UserService();
