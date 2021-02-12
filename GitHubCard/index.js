import axios from "axios"


function getCards (user) {
  axios.get(`https://api.github.com/users/${user}`)
  .then(res => {
    //debugger
    const cardsContainer = document.querySelector('.cards')
    cardsContainer.appendChild(cardMaker({
      userImg: res.data.avatar_url,
      userName: res.data.name,
      name: res.data.login,
      userLocation: res.data.location,
      userProfile: res.data.url,
      userFollowers: res.data.followers,
      userFollowing: res.data.following,
      userBio: res.data.bio
    }))
  
  })
  .catch(err => {
    //debugger
    console.log(err)
  })

  .then(() => {
    console.log("it fired")
  });
  
};

getCards('AustinGreer')

const followersArray = ['ianbautista', 'ialkamal', 'NateTheDev1', 'ChadDiaz', 'rmjuarez12'];
followersArray.forEach(follower => {
  getCards(follower)
})




//BUILD CARDMAKER COMPONENT
const cardMaker = (userObj) => {
  // destructure userObj
  const { 
    userImg, 
    userName, 
    name, 
    userLocation, 
    userProfile, 
    userFollowers, 
    userFollowing, 
    userBio 
  } = userObj

  //create all elements --> add classes, content, and attributes
  // card container
  const card = document.createElement('div')
  card.classList.add('card')

  // card img
  const img = document.createElement('img')
  img.setAttribute('src', userImg)

  // info container
  const cardInfo = document.createElement('div')
  cardInfo.classList.add('card-info')

  // card users name
  const cardName = document.createElement('h3')
  cardName.classList.add('name')
  cardName.textContent = name

  // users username
  const username = document.createElement('p')
  username.classList.add('username')
  username.textContent = userName

  // users location
  const location = document.createElement('p')
  location.textContent = `Location: ${userLocation}`

  // user profile container
  const profileContainer = document.createElement('p')
  profileContainer.textContent = 'Profile:'

  // profile link
  const profile = document.createElement('a')
  profile.setAttribute('href', userProfile)
  profile.textContent = userProfile

  // user followers
  const followers = document.createElement('p')
  followers.textContent = `Followers: ${userFollowers}`

  // user following
  const following = document.createElement('p')
  following.textContent = `Following: ${userFollowing}`

  // user bio
  const bio = document.createElement('p')
  bio.textContent = `Bio: ${userBio}`

  // structure elements
  card.append(img, cardInfo)
  cardInfo.append(cardName, username, location, profileContainer, followers, following, bio)
  profileContainer.appendChild(profile)

  return card
}


/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/



/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/
//change 

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/
