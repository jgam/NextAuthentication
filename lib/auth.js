import axios from "axios";

axios.defaults.withCredentials = true;

export const getServerSideToken = (req) => {
  console.log(req.signedCookies);
  const { signedCookies = {} } = req;
  if (!signedCookies) {
    return {};
  } else if (!signedCookies.token) {
    return {};
  } else {
    return { user: signedCookies.token };
  }
};

export const getClientSideToken = () => {
  if (typeof window !== "undefined") {
    const user = window[WINDOW_USER_SCRIPT_VARIABLE] || {};
    return { user };
  }
  return { user: {} };
};

const WINDOW_USER_SCRIPT_VARIABLE = "__USER__";

export const getUserScript = (user) => {
  //declare what propertyo of the window that our app to access to
  return `${WINDOW_USER_SCRIPT_VARIABLE} = ${JSON.stringify(user)}`;
};

export const authInitialProps = () => ({ req, res }) => {
  const auth = req ? getServerSideToken(req) : getClientSideToken();
  return { auth };
};

export const loginUser = async (email, password) => {
  const response = await axios.post("/api/login", { email, password });
  if (typeof window !== "undefined") {
    window[WINDOW_USER_SCRIPT_VARIABLE] = data || {};
  }
  console.log(response);
};

export const getUserProfile = async () => {
  const { data } = await axios.get("/api/profile");
  return data;
};
