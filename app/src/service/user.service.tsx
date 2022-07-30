import axios from "axios";
import { useEffect } from "react";

// useEffect(()=>{

const API = axios.create({
  url: "http://localhost:4000/",
  headers: {
    "content-type": "application/json",
  },
});
API.interceptors.response.use((response) => {
  console.log(
    "🚀 ~ file: user.service.tsx ~ line 12 ~ API.interceptors.response.use ~ response",
    response
  );
  if (response.status === 200) return response.data;
});
// // });

// const UserService: React.FC<UserServiceProps> = ({user})=>  {

const get = () => {
  return axios.get("/users");
};
const post = (user: any) => {
  console.log(user);
  return axios
    .post("http://localhost:4000/user", user)
    .then((response) => {
      if (response.status === 200 && response.data) return response.data;
    })
    .catch((error) => {
      return error;
    });
};

// );

export default { get, post };
