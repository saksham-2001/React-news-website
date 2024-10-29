
// import './App.css';
// import {
//   BrowserRouter as Router,Route, Switch} from "react-router-dom";
// import { useEffect } from 'react';
// import Newscard from './Newscard';
// import Navbar from './Navbar';
// // import { topic } from './Navbar';
// import Header from './Header';
// import displaynews from "./fetchdata.js";
// import { displayweather } from './fetchdata.js';
// // import Data from "./Data.json";
// // import { useEffect } from 'react';
// import { useState } from 'react';
// // let News=[];

// function App() {
 
//   const[mode, setMode]=useState("light");

//   function handlemode(){
//     if(mode=="light"){
//     setMode("dark");}
//     else{
//       setMode("light");
//     }
//     // console.log("dark mode activated");
//   }
  

//   // const search = topic;
//   const [news, setNews] = useState([]);
//   const [Topic, setTopic] = useState("trending");

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const newsData = await displaynews(Topic);
//         setNews(newsData);
//         console.log(news);
//       } catch (error) {
//         console.error('Error fetchin g data:', error);
//       }
//     }

//     fetchData();
//   }, [Topic]);

//   // displayweather();

//   function handletopicchange(value) {
//     setTopic(value);

//   }



//   // console.log(Topic + "app");

//   // console.log(News+"cdsc");
//   // console.log(News.articles[1].title);
//   // console.log(Data);
//   //   useEffect(()=>{
//   // console.log ('topic updated');
//   //     }
//   //   ,[{topic}])

//   return (


//     <div className={"App_"+mode}>
//       <Header
//         onTopicChange={handletopicchange}
//         onModeChange={handlemode}
//         Mode={mode}
//       />
    
//       <Navbar
//         onTopicChange={handletopicchange}
//         Mode={mode}
//       />
//       <div className='content'>
//         {news.map(element => {
//           return (
//             <Newscard
//               Mode={mode}
//               id={element.id}
//               topic={Topic}
//               title={element.title}
//               text={element.text}
//               link={element.link}
//               image={element.image}
//             // url={element.url}
//             // keyword={Topic}
//             />
//           )

//         })

//         }







//       </div>
//     </div>
//   );
// }

// export default App;


// import { useState, useEffect } from 'react';
// import Newscard from './Newscard';
// import Navbar from './Navbar';
// import Header from './Header';
// import displaynews from "./fetchdata.js";

// function App() {
//   const [mode, setMode] = useState("light");
//   const [news, setNews] = useState([]);
//   const [topic, setTopic] = useState("trending");

//   // Dark mode toggle function
//   const handleMode = () => setMode(prevMode => (prevMode === "light" ? "dark" : "light"));

//   // Fetch news data based on selected topic
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const newsData = await displaynews(topic);
//         setNews(newsData);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };
//     fetchData();
//   }, [topic]);

//   return (
//     <div className={`App_${mode}`}>
//       <Header onTopicChange={setTopic} onModeChange={handleMode} mode={mode} />
//       <Navbar onTopicChange={setTopic} mode={mode} />
      
//       <div className='content'>
//         {news.map((element, index) => (
//           <Newscard
//             key={index}
//             mode={mode}
//             id={element.id}
//             topic={topic}
//             title={element.title}
//             text={element.text}
//             link={element.link}
//             image={element.image}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default App;
import Newscard from './Newscard';
import Navbar from './Navbar';
import Header from './Header';
import displaynews from "./fetchdata.js";
import { useState, useEffect } from 'react';

function App() {
  const [mode, setMode] = useState("light");
  const [news, setNews] = useState([]);
  const [topic, setTopic] = useState("trending");

  // Handle theme mode toggle
  function handleMode() {
   if(mode === "light"){
    setMode("dark");
   }
   else{
    setMode("light");
   }
  }

  // Fetch news data when the topic changes
  useEffect(() => {
    async function fetchData() {
      try {
        const newsData = await displaynews(topic);
        setNews(newsData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, [topic]);

  return (
    <div className={`App_${mode}`}>
      <Header
        onTopicChange={setTopic}
        onModeChange={handleMode}
        mode={mode}
      />
      <Navbar
        onTopicChange={setTopic}
        mode={mode}
      />
      <div className="content">
        {news.map((element) => (
          <Newscard
            key={element.id}
            mode={mode}
            topic={topic}
            {...element} // Spread operator to pass props
          />
        ))}
      </div>
    </div>
  );
}

export default App;
