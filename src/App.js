import './App.css';
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
    if (mode === "light") {
      setMode("dark");
    }
    else {
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
