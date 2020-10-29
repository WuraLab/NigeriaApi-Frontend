import Axios from "axios";
export class API {
  static loginUser(body) {
    return new Promise((resolve, reject) => {
      Axios.post(`https://nigeria-api-backend.herokuapp.com/api/v1/users/login`, JSON.stringify(body), {
        
        headers: {
          "Content-Type": "application/json",
        },
      }).then((resp) => {

        console.log(resp.data);
        resolve(resp);
      });
    });
  }
}
