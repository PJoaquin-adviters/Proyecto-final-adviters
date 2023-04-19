import axios from "axios";
import httpRequest from "./httpRequest";

//LOGIN
const auth = (mail, password) => httpRequest.post("/auth", { mail, password });

const methods = {
  auth,
};

export default methods;
