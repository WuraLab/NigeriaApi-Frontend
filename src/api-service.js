
export class API {
    static loginUser(body) {
        return new Promise((resolve, reject)=> {
        fetch(`https://nigeria-api-backend.herokuapp.com/api/v1/users/login`,
        {
            method:'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
          })
          .then((resp)=>{
            resolve( resp.json())
          })
        }) 
      }
}