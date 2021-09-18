import React, {useEffect} from "react";
import Routes from "./Routes";
import axios from "axios";


function App() {
  useEffect(() => {
    getClientAuth();
  }, []);

  const getClientAuth = async () => {
    const results = await axios.get(
      "https://hapi.utter.ai/restclient/issue?clientID=QdfTr0344Gdw8bm&domain=testclient.com"
    );

    localStorage.setItem("clientAuthToken", results.data.token);
  };

  return (
    <div>
      <Routes />
    </div>
  );
}

export default App;
