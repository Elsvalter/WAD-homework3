import { createStore } from 'vuex'

export default createStore({
    strict: true,
    state: {
        posts: [{
            "id": 1,
            "date": "2024-03-12",
            "author": "Michael Lee",
            "body": "Looking forward to the music festival next month!",
            "imgLink": "https://www.queensu.ca/gazette/sites/gazettewww/files/assets/CONVO%20-%20music%20festival%20Glastonbury%20james-genchi-APJ6MvCZefM-unsplash.jpg",
            "like": 11
          },
          {
            "id": 2,
            "date": "2024-04-25",
            "author": "Isabella Hernandez",
            "body": "Spent the afternoon reading by the river. Such a peaceful day.",
            "imgLink": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/e3/d1/79/caption.jpg?w=1200&h=700&s=1&cx=600&cy=400&chk=v1_67a05e5d62b9dd98f975",
            "like": 23
          },
          {
            "id": 3,
            "date": "2024-05-18",
            "author": "Liam Garcia",
            "body": "Can't believe how quickly summer is approaching!",
            "imgLink": null,
            "like": 15
          },
          {
            "id": 4,
            "date": "2024-05-30",
            "author": "James Anderson",
            "body": "Had an amazing coffee at the new cafe downtown. Highly recommend it!",
            "imgLink": "https://www.barniescoffee.com/cdn/shop/articles/bar-1869656_1920.jpg?crop=center&height=1155&v=1660683986&width=1540",
            "like": 0
          },
          {
            "id": 5,
            "date": "2024-06-15",
            "author": "Olivia Taylor",
            "body": "Enjoyed a beautiful hike in the countryside today!",
            "imgLink": "https://www.originaltravel.co.uk/travel-blog/showphoto/3697/0",
            "like": 0
          },
          {
            "id": 6,
            "date": "2024-07-01",
            "author": "Daniel Martinez",
            "body": "I am planning on moving to Tartu this fall and I would like to know more about the city! Can anyone share some information about nightlife, free time activities, gyms ect?",
            "imgLink": null,
            "like": 0
          },
          {
            "id": 7,
            "date": "2024-07-20",
            "author": "Sophia Wilson",
            "body": "Winter in Tartu!",
            "imgLink": "https://visitestonia.com/images/660777/tartu-joululinn-010-visit-estonia.jpg@1920w",
            "like": 0
          },
          {
            "id": 8,
            "date": "2024-07-27",
            "author": "Chris Brown",
            "body": "I am looking for information about the festivals and concerts held in Tartu this year - does anybody have any info?",
            "imgLink": null,
            "like": 0
          },
          {
            "id": 9,
            "date": "2024-09-15",
            "author": "Emily Davis",
            "body": "Hello! I am posting to introduce myself and let everybody know that I have made it to Tartu!",
            "imgLink": null,
            "like": 0
          },
          {
            "id": 10,
            "date": "2024-09-28",
            "author": "Mark Thompson",
            "body": "Had a very nice time at the christmas market this evening! Definitely would recommend if you are looking for something to do on a free night.",
            "imgLink": "https://image.jimcdn.com/app/cms/image/transf/dimension=1280x10000:format=jpg/path/sa6549607c78f5c11/image/i23cae0d1ae9d6b19/version/1699953836/tartu-christmas-city.jpg",
            "like": 0
          },
          {
            "id": 11,
            "date": "2024-10-05",
            "author": "Alice Johnson",
            "body": "Old town pic in Warsaw, Poland!!",
            "imgLink": "https://tricksandtrips.com/wp-content/uploads/2022/11/13-Unique-Things-to-Do-in-Old-Town-Warsaw.jpg",
            "like": 0
          }]
    },
    getters: {
        postsList: state => {
            var postsList = state.posts.map(post => {
                return {
                    id: post.id,
                    date: post.date,
                    author: post.author,
                    body: post.body,
                    image: post.imgLink,
                    likes: post.like
                }
            });
            return postsList
        },
    },
    mutations: {
      ResetLikes: state => {
        state.posts.forEach(post => {
          post.like = 0; 
        })
      },
      IncreaseLikes: (state, postId) => {
        const post = state.posts.find(post => post.id === postId);
        if (post) {
          post.like += 1;
        }
      }
    },
    actions: {
        ResetLikesAct : act => {
          setTimeout(function() {
            act.commit("ResetLikes")
          }, 1000)
        },
        IncreaseLikesAct : ({commit}, postId) => {
          setTimeout(() => {
            commit("IncreaseLikes", postId);
          }, 400);
        }
    }
})