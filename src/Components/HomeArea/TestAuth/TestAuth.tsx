import axios, { AxiosRequestConfig } from "axios";
import "./TestAuth.css";
import { notify } from "../../../Utils/notify";
import { useSelector } from "react-redux";
import { AppState } from "../../../Redux/store";

export function TestAuth(): JSX.Element {
  const isLoggedIn = useSelector<AppState, boolean>((store) => !!store.user);
  const isAdmin = useSelector<AppState, boolean>(
    (store) => store.user?.role === "Admin"
  );

  async function test() {
    try {
      const options: AxiosRequestConfig = {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      };

      const response = await axios.get(
        "http://localhost:3030/api/categories/",
        options
      );
      console.log(response.data);
    } catch (err: any) {
      notify.error(err);
    }
  }

  async function testAdmin() {
    try {
      const response = await axios.get(
        "http://localhost:3030/api/products/out-of-stock"
      );
      console.log(response.data);
    } catch (err: any) {
      notify.error(err);
    }
  }

  return (
    <div className="TestAuth">
      {isLoggedIn && <button onClick={test}>TestAuth</button>}
      <span> | </span>
      {isAdmin && <button onClick={testAdmin}>Test Admin</button>}
    </div>
  );
}
