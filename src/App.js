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
  };

  

  useEffect(() => {
    const fetchData = async () => {
      const list = [];
      const q = query(collection(db, 'matters'));
      const querySnapshot = await getDocs(q);
  
      for (const doc of querySnapshot.docs) {
        const matter = { id: doc.id, ...doc.data() };
  
        if (matter.Deadlines) {
          const deadlines = await Promise.all(
            matter.Deadlines.map(async (deadlineRef) => {
              const deadlineSnapshot = await getDoc(deadlineRef);
              const deadlineData = deadlineSnapshot.data();
  
              if (deadlineData) {
                const milestones = [];
  
                if (deadlineData.Milestones) {
                  await Promise.all(
                    deadlineData.Milestones.map(async (milestoneRef) => {
                      const milestoneSnapshot = await getDoc(milestoneRef);
                      const milestoneData = milestoneSnapshot.data();
  
                      if (milestoneData) {
                        milestones.push({ id: milestoneSnapshot.id, ...milestoneData });
                      }
                    })
                  );
                }
  
                deadlineData.Milestones = milestones;
              }
  
              return { id: deadlineSnapshot.id, ...deadlineData };
            })
          );
  
          matter.Deadlines = deadlines;
        }
  
        list.push(matter);
      }
  
      setAllMatters(list);
    };
  
    fetchData();
  }, []);
  
  
  
  

 

    console.log(allMatters, "All Matters")
  


  // useEffect(() => {
  //   if (trackIndex !== null && allMatters.length > 0) {
  //     const thisMatter = allMatters[trackIndex];
     
  //   }
  // }, [trackIndex, allMatters]);
 



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
