// Solve the questions below:

// #1) Create a promise that resolves in 4 seconds and returns "success" string
const p1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 4000, 'success');
})

// #2) Run the above promise and make it console.log "success"
p1.then(console.log)

// #3) Read about Promise.resolve() and Promise.reject(). How can you make
// the above promise shorter with Promise.resolve() and console loggin "success"
const p1 = Promise.resolve(setTimeout(console.log, 4000, 'success'))

// #4) Catch this error and console log 'Ooops something went wrong'
Promise.reject('failed')
  .catch(() => console.log('Ooops something went wrong'))

// #5) Use Promise.all to fetch all of these people from Star Wars (SWAPI) at the same time.
// Console.log the output and make sure it has a catch block as well.
const urls = [
  'https://swapi.co/api/people/1',
  'https://swapi.co/api/people/2',
  'https://swapi.co/api/people/3',
  'https://swapi.co/api/people/4'
]
Promise.all(urls.map(url => fetch(url)))
  .then(results => console.log(results))
  .catch(() => console.log('Problem fetching data'))

// #6) Change one of your urls above to make it incorrect and fail the promise
// does your catch block handle it?
const urls = [
  'https://swapi.co/api/people/1',
  'https://swapi.com/api/people/2',
  'https://swapi.co/api/people/3',
  'https://swapi.co/api/people/4'
]
Promise.all(urls.map(url => fetch(url)))
  .then(results => console.log(results))
  .catch(() => console.log('Problem fetching data'))
