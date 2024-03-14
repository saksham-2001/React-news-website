import Header from "./Header";
// const ApiKey = '99d16f14510e45ac8259cf9ddcffefd2';
 
// const ApiKey ='pub_355116beb840e8244d1e332dd636350c12f26';
// const ApiKey='EInbGooBxCZnBmh7nV34-YcQ99C1Cyp0kg83Cs7oydLDP-Kx';
// let contents = [];

// function displaynews(topic){
//     // contents=[];
// // let url= 'https://inshorts.deta.dev/news?category="technology"';
// let url = `https://newsapi.org/v2/everything?apikey=${ApiKey}&q=${topic}`;
// // let url = `https://newsdata.io/api/1/news?apikey=${ApiKey}&q="${topic}"&language=en`;
// // let url =`https://api.currentsapi.services/v1/search?keywords=${topic}&language=en&apiKey=${ApiKey}`;
// contents=[];
// fetch(url).then((res) => {
//     return res.json()
// }).then((data) => {
//     let Data = data;
//     console.log(Data);
    
//     if (contents.length === 0) {
//         for (let i = 0; i < 10; i++) {
//         //    console.log (Data.news[i].title);
//             let obj = {
//                 // id: Data.articles[i].id,
//               title: Data.articles[i].title,
//                 text: Data.articles[i].description
//             };
            
//             // obj.title=Data.results.title;
//             // obj.text=Data.results.description;
//             contents.push(obj);
//             // obj ={title:'',text:''}
//         }

//     }
//     // console.log(contents);
//     return contents;
   
// }
// );



  
// }


// function ReturnData() {
//     // displaynews("trending");
//     return contents;
  

//     // console.log(contents); 

// }

function displaynews(topic) {
    return new Promise((resolve, reject) => {
        const ApiKey = '16c1ce1e03a1404e80a852edfe61f775' ;
        let url = `https://newsapi.org/v2/everything?apikey=${ApiKey}&q=${topic}`;
        let contents = [];

        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                for (let i = 0; i < 10; i++) {
                    let obj = {
                        id: i+1,
                        title: data.articles[i].title,
                        text: data.articles[i].description,
                        link: data.articles[i].url,
                        // image:data.atrtciles[i].urlToImage
                    };
                    contents.push(obj);
                }
                resolve(contents);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
                reject(error);
            });
    });
}

//  export async function displayweather(){
//     const Apikey=`c9c45efa09f3f9f8f8d299038997ca97`;
//     let url=`http://api.openweathermap.org/data/2.5/weather?q=Adelaide&id=524901&appid=${Apikey}`;
//     let res= await fetch(url);
//     let data = await res.json();
//     console.log(data);

//  }


export default displaynews