//The user will enter a date.
window.addEventListener('load', getFetch)

function getFetch(){
   fetch('https://api.nasa.gov/planetary/apod?api_key=2RMWPG1zptG1RB5UnvZf7WCnvVwgiUEE4SeaQqtZ')
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        console.log(data.hdurl)
        document.querySelector('#apod').src = data.hdurl
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}
