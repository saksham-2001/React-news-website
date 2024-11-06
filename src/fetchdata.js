import Header from "./Header";
// const ApiKey = '99d16f14510e45ac8259cf9ddcffefd2';

const ApiKey = 'pub_355116beb840e8244d1e332dd636350c12f26';

// Function to generate sample data
function generateSampleData() {
    return [
        {
            id: 1,
            title: "API Rate Limit Exceeded (429)",
            text: "You have exceeded the number of allowed requests. Please try again later. The server is temporarily unavailable due to too many requests.",
            link: "#",
        },
        {
            id: 2,
            title: "API Rate Limit Exceeded (429)",
            text: "You have exceeded the number of allowed requests. Please try again later. The server is temporarily unavailable due to too many requests.",
            link: "#",
        },
        {
            id: 3,
            title: "API Rate Limit Exceeded (429)",
            text: "You have exceeded the number of allowed requests. Please try again later. The server is temporarily unavailable due to too many requests.",
            link: "#",
        },
        {
            id: 4,
            title: "API Rate Limit Exceeded (429)",
            text: "You have exceeded the number of allowed requests. Please try again later. The server is temporarily unavailable due to too many requests.",
            link: "#",
        },
        {
            id: 5,
            title: "API Rate Limit Exceeded (429)",
            text: "You have exceeded the number of allowed requests. Please try again later. The server is temporarily unavailable due to too many requests.",
            link: "#",
        },
        {
            id: 6,
            title: "API Rate Limit Exceeded (429)",
            text: "You have exceeded the number of allowed requests. Please try again later. The server is temporarily unavailable due to too many requests.",
            link: "#",
        },
        {
            id: 7,
            title: "API Rate Limit Exceeded (429)",
            text: "You have exceeded the number of allowed requests. Please try again later. The server is temporarily unavailable due to too many requests.",
            link: "#",
        },
        {
            id: 8,
            title: "API Rate Limit Exceeded (429)",
            text: "You have exceeded the number of allowed requests. Please try again later. The server is temporarily unavailable due to too many requests.",
            link: "#",
        },
        {
            id: 9,
            title: "API Rate Limit Exceeded (429)",
            text: "You have exceeded the number of allowed requests. Please try again later. The server is temporarily unavailable due to too many requests.",
            link: "#",
        },
        {
            id: 10,
            title: "API Rate Limit Exceeded (429)",
            text: "You have exceeded the number of allowed requests. Please try again later. The server is temporarily unavailable due to too many requests.",
            link: "#",
        },
    ];
}
function displaynews(topic) {


    return new Promise((resolve, reject) => {
        // const ApiKey = '16c1ce1e03a1404e80a852edfe61f775' ;
        const ApiKey = 'pub_355116beb840e8244d1e332dd636350c12f26';

        let url = `https://newsdata.io/api/1/news?apikey=${ApiKey}&q=${topic}&language=en`;
        let contents = [];

        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                for (let i = 0; i < 10; i++) {
                    let description = data.results[i].description;

                    // Set a custom message if description is empty or null
                    let textContent = description
                        ? description.slice(0, 400) + (description.length > 400 ? '...' : '')
                        : "There is no description available for this article. Please click on the link below to read more.";
                    let obj = {
                        id: i + 1,
                        title: data.results[i].title,
                        text: textContent,
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