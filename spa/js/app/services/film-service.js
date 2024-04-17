let film;
/* {
  title: "Star Wars",
  year: 1977,
  director: "George Lucas",
  imdbRating: 8.6,
},
 */
let idToSearch = '0001527';

async function fetchQuestions() {
  const api = `http://www.omdbapi.com/?apikey=cea2add0&r=json&i=tt${idToSearch}`;

  try {
      const response = await fetch(api);
      const body = await response.json();

      if (!response.ok) {
          console.log('API Error:', body.message);
          throw new Error(body.message);
      }
      console.log(body.Response);
      if(body.Response === "False"  || body.imdbRating === "N/A" || body.imdbRating < 7 || body.year < 1990){
        
        fetchQuestions();
      }
      console.log('API Response:', body);
      // Decode HTML entities in the fetched questions
      
      film = body;
  
      console.log('film is: ', film);
      
  } catch (error) {
      //resetToken();
      console.error('Fetch Error:', error);
      throw error;
  }
}


export function getFilm(index) {
  fetchQuestions();
  return film;
}
