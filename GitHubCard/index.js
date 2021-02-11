import axios from "axios"

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
axios.get('https://api.github.com/users/AustinGreer')
.then(res => {
  debugger
})
.catch(err => {
  debugger
})
.then(() => {
  console.log("it fired")
})


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

const followersArray = [];

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
const userCard = (userObj) => {
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
  // 1. card container
  const card = document.createElement('div')
  card.classList.add('card')

  // 2. card img
  const img = document.createElement('img')
  img.setAttribute('src', userImg)

  // 3. info container
  const cardInfo = document.createElement('div')
  cardInfo.classList.add('card-info')

  // 4. card users name
  const cardName = document.createElement('h3')
  cardName.classList.add('name')
  cardName.textContent = name

  // 5. users username
  const username = document.createElement('p')
  username.classList.add('username')
  username.textContent = userName

  // 6. users location
  const location = document.createElement('p')
  location.textContent = `Location: ${userLocation}`

  // 7. user profile container
  const profileContainer = document.createElement('p')
  profileContainer.textContent = 'Profile:'

  // 8. profile link
  const profile = document.createElement('a')
  profile.setAttribute('href', userProfile)
  profile.textContent = userProfile

  // 9. user followers
  const followers = document.createElement('p')
  followers.textContent = `Followers: ${userFollowers}`

  // 10. user following
  const following = document.createElement('p')
  following.textContent = `Following: ${userFollowing}`

  // 11. user bio
  const bio = document.createElement('p')
  bio.textContent = `Bio: ${userBio}`



  // structure elements
  card.append(img, cardInfo)
  cardInfo.append(cardName, username, location, profileContainer, followers, following, bio)
  profileContainer.appendChild(profile)

  return card
}

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell

    userImg, 
    userName, 
    name, 
    userLocation, 
    userProfile, 
    userFollowers, 
    userFollowing, 
    userBio
*/
