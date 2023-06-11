import { Route, Switch } from "react-router-dom";
import Login from "./Login";
import Home from "./Home"
import CaseDetails from "./CaseDetails";
import Calendar from "./Calendar";
import { useState } from "react";
import { useEffect } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

import {query, collection, getDocs, getDoc} from 'firebase/firestore'

import {db} from "./firebase"

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';  

function App() {

  const [allMatters, setAllMatters] = useState([]);
  const [selectedMatter, setSelectedMatter] = useState(null);
  const [trackIndex, setTrackIndex ] = useState()
  

  const history = useHistory()



  const handleMatterDetail = (id) => {
    // setTrackIndex(parseInt(index.target.id));
    history.push(`/casedetails/${id}`);

    console.log(id, "CONSOLE LOG ID")
  };

  // useEffect(() => {
  //   fetch("http://localhost:8000/")
  //     .then((response) => response.json())
  //     .then((data) => setAllMatters(data))
  //     .catch((error) => {
  //       console.error("Error fetching matters:", error);
  //     });
  // }, []);
  

  useEffect(() => {
    const fetchData = async () => {
      let list = [];
      const q = query(collection(db, 'matters'));
      const querySnapshot = await getDocs(q);
      
      querySnapshot.forEach(async (doc) => {
        const matter = { id: doc.id, ...doc.data() };
        
        if (matter.Deadlines) {
          const deadlines = [];
          
          for (const deadlineRef of matter.Deadlines) {
            const deadlineSnapshot = await getDoc(deadlineRef);
            const deadlineData = deadlineSnapshot.data();
            
            if (deadlineData) {
              deadlines.push({ id: deadlineSnapshot.id, ...deadlineData });
            }
          }
          
          matter.Deadlines = deadlines;
        }
        
        list.push(matter);
      });
      
      setAllMatters(list);
    };
    
    fetchData();
  }, []);
  
  console.log(allMatters)
  
 


  useEffect(() => {
    if (trackIndex !== null && allMatters.length > 0) {
      const thisMatter = allMatters[trackIndex];
     
    }
  }, [trackIndex, allMatters]);
 






  return (
    <>
        <Switch>
          <Route exact path ="/">
            <Home allMatters={allMatters} setAllMatters={setAllMatters} handleMatterDetail={handleMatterDetail} />
          </Route>
          <Route exact path ="/login">
            <Login />
          </Route>
          <Route path="/casedetails/:id">
            <CaseDetails allMatters={allMatters} trackIndex={trackIndex} />
          </Route>
          <Route exact path ="/calendar">
            <Calendar />
          </Route>
        </Switch>
    </>
  );
}

export default App;
