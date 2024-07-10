import { Route, Routes } from "react-router-dom";
import "../App.css";
import Data from "./Data/Data";
import Form from "./Form/Form";
import Navbar from "./Navbar/Navbar";
import Option from "./Option/Option";
import SectionLinks from "../SectionLinks/SectionLinks";
import Navbarnew from "./Navbarnew/Navbarnew";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  loadAccount,
  loadAllData,
  loadMedical,
  loadNetwork,
  loadProvider,
  subscribeToEvents,
} from "../store/interactions";
import config from "../config.json";
import Alert from "./Alert/Alert";
function App() {
  const dispatch = useDispatch();
  const loadBlockchainData = async () => {
    const provider = loadProvider(dispatch);
    const chainId = await loadNetwork(provider, dispatch);
    const medical_config = config[chainId].medical;
    window.ethereum.on("accountsChanged", () => {
      loadAccount(provider, dispatch);
    });
    window.ethereum.on("chainChanged", () => {
      window.location.reload();
    });
    const medical = loadMedical(provider, medical_config.address, dispatch);
    loadAllData(provider, medical, dispatch);
    subscribeToEvents(medical, dispatch);
  };
  useEffect(() => {
    loadBlockchainData();
  });
  return (
    
    <div className="App">
      <Navbarnew/>
      {/* <div className="navbar">
        <Navbar />
        <Option />
        <Routes>
          <Route path="/" exact element={<Form />} />
          <Route path="/Data" element={<Data />} />
        </Routes>
        <Alert />
      </div> */}
      <div className="content">
        <h1>Welcome to Fund Management website</h1>
        <p>A blockchain-based fund management system leverages the decentralized, transparent, and secure nature of blockchain technology to revolutionize the management of investment funds. By utilizing smart contracts, the system ensures that all transactions and fund allocations are executed automatically based on predefined rules, reducing the need for intermediaries and minimizing the risk of human error. Investors benefit from enhanced transparency as all transactions are recorded on the blockchain, allowing for real-time auditing and verification. The immutable ledger also provides increased security against fraud and tampering.</p>
        <div className='hello' > 
          <img src="https://res.cloudinary.com/priyojit/image/upload/v1713957627/vjxexasxhrothofjip4r.png" alt=""  width={250} height={250}/>
          </div>
        <SectionLinks />
      </div>
    </div>
  );
}

export default App;
