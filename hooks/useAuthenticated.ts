import { LOCAL_STORGE } from "@/constants/global";
import useLocalStorge from "./useLocalStorge";

const useAuthenticated = () => {
  const accessTokenStorge = useLocalStorge(LOCAL_STORGE.ACCESS_TOKEN);
  const accessToken = accessTokenStorge.getItem();
  return !!accessToken;
};

export default useAuthenticated;
