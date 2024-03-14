
import './App.css';

import { useEffect } from 'react';
import Newscard from './Newscard';
import Navbar from './Navbar';
// import { topic } from './Navbar';
import Header from './Header';
import displaynews from "./fetchdata.js";
import { displayweather } from './fetchdata.js';
// import Data from "./Data.json";
// import { useEffect } from 'react';
import { useState } from 'react';
// let News=[];

function App() {

  const[mode, setMode]=useState("light");

  function handlemode(){
    if(mode=="light"){
    setMode("dark");}
    else{
      setMode("light");
    }
    // console.log("dark mode activated");
  }
  

  // const search = topic;
  const [news, setNews] = useState([]);
  const [Topic, setTopic] = useState("trending");

  useEffect(() => {
    async function fetchData() {
      try {
        const newsData = await displaynews(Topic);
        setNews(newsData);
        console.log(news);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, [Topic]);

  // displayweather();

  function handletopicchange(value) {
    setTopic(value);

  }



  // console.log(Topic + "app");

  // console.log(News+"cdsc");
  // console.log(News.articles[1].title);
  // console.log(Data);
  //   useEffect(()=>{
  // console.log ('topic updated');
  //     }
  //   ,[{topic}])

  return (


    <div className={"App_"+mode}>
      <Header
        onTopicChange={handletopicchange}
        onModeChange={handlemode}
        Mode={mode}
      />
      <Navbar
        onTopicChange={handletopicchange}
        Mode={mode}
      />
      <div className='content'>
        {news.map(element => {
          return (
            <Newscard
              Mode={mode}
              id={element.id}
              topic={Topic}
              title={element.title}
              text={element.text}
              link={element.link}
              image={element.image}
            // url={element.url}
            // keyword={Topic}
            />
          )

        })

        }







      </div>
    </div>
  );
}

export default App;
