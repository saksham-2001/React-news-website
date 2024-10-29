import Header from "./Header";
// const ApiKey = '99d16f14510e45ac8259cf9ddcffefd2';
 
const ApiKey ='pub_355116beb840e8244d1e332dd636350c12f26';

// Function to generate sample data
function generateSampleData() {
    return [
        {
            id: 1,
            title: "Sample News Title 1",
            text: "This is a description for the first sample news article.",
            link: "#", // Sample link
        },
        {
            id: 2,
            title: "Sample News Title 2",
            text: "This is a description for the second sample news article.",
            link: "#",
        },
        {
            id: 3,
            title: "Sample News Title 3",
            text: "This is a description for the third sample news article.",
            link: "#",
        },
        {
            id: 4,
            title: "Sample News Title 4",
            text: "This is a description for the fourth sample news article.",
            link: "#",
        },
        {
            id: 5,
            title: "Sample News Title 5",
            text: "This is a description for the fifth sample news article.",
            link: "#",
        },
        {
            id: 6,
            title: "Sample News Title 6",
            text: "This is a description for the sixth sample news article.",
            link: "#",
        },
        {
            id: 7,
            title: "Sample News Title 7",
            text: "This is a description for the seventh sample news article.",
            link: "#",
        },
        {
            id: 8,
            title: "Sample News Title 8",
            text: "This is a description for the eighth sample news article.",
            link: "#",
        },
        {
            id: 9,
            title: "Sample News Title 9",
            text: "This is a description for the ninth sample news article.",
            link: "#",
        },
        {
            id: 10,
            title: "Sample News Title 10",
            text: "This is a description for the tenth sample news article.",
            link: "#",
        },
    ];
}
function displaynews(topic) {
    return new Promise((resolve, reject) => {
        // const ApiKey = '16c1ce1e03a1404e80a852edfe61f775' ;
        const ApiKey ='pub_355116beb840e8244d1e332dd636350c12f26';

        let url = `https://newsdata.io/api/1/news?apikey=${ApiKey}&q=${topic}&language=en`;
        let contents = [];

        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                for (let i = 0; i < 10; i++) {
                    let obj = {
                        id: i+1,
                        title: data.results[i].title,
                        text: data.results[i].description,
                        link: data.results[i].link
                        // image:data.atrtciles[i].urlToImage
                    };
                    contents.push(obj);
                }
                resolve(contents);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
                // reject(error);
                console.log("This is sample data being shown");
                resolve(generateSampleData());
            });
    });
}




export default displaynews