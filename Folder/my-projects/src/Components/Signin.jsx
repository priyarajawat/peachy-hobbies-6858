import { Button, Heading, Input, Spacer, Spinner ,Text} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AppContext } from "./AuthContext";


let getPost = () => {
  return fetch(`https://reqres.in/api/login`).then((res) => res.json())
}


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
 
  const [state, dispatch] = useContext(AppContext);
  

  let handleSubmit = (e) =>{
    e.preventDefault();
    dispatch({type:"LOGIN_REQUEST"})
getPost().then((res)=>{
           dispatch({
                  type: "LOGIN_SUCCESS",
                  payload: res.token
              });
      navigate("/");
}).catch((err)=>{
  dispatch({type:"LOGIN_FAILURE"})
  console.log(err)
})
  }


  return (
    <div className="red2">
      <form className="red"   onSubmit={handleSubmit}>
        <div>
          <label>
          <Heading textAlign="center" fontWeight="500" fontStyle="italic" color="#008080"> Email</Heading>
           
            <br/>
            <br/>
            <Input marginLeft="180px"  fontStyle="italic" fontSize="20px" width="50%" value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="email"/>
           
          </label>
          <br/>
          <br/>
        </div>
        <div>
          <label>
           
           <Heading textAlign="center" fontWeight="500" fontStyle="italic" color="#008080"> Password</Heading>
            <br/>
            <br/>
            <Input  marginLeft="180px"  fontStyle="italic" fontSize="20px" width="50%"  value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="password" />
           
          </label>
          <br/>
        </div>
        <div>
            <br/>
            <br/>
            <Button marginLeft="270px"  fontStyle="italic" fontSize="19px" color="white" backgroundColor="#008080" onClick={handleSubmit} width="25%" type="submit" value="SUBMIT"> submit {state.isLoading && <Spinner color="red.500" />}</Button>
          
       
         
        </div>
      </form>
      {state.isError && <Text color="red">Something went wrong</Text>}
      <br/>
      <Spacer/>
      <div>
       
      </div>
    </div>
  );
}
export default Login;