import { rerenderEntireTree } from "../render"

let state = {

  profile: {
    postsData: [
      { id: 1, massage: 'hellow world!', like: 45325 },
      { id: 2, massage: 'hi', like: 5245 },
      { id: 3, massage: 'didi', like: 3232 },
    ],

  },

  dialogs: {
    massegeData: [
      { id: 1, massege: 'hellow world' },
      { id: 1, massege: 'hi' },
      { id: 1, massege: '07949299294' }
    ],
    dialogData: [
      { id: 1, name: "Sashula" },
      { id: 2, name: "Dima" },
      { id: 3, name: "Lesha" }
    ],
  },

}

export let addPost = (postMessage) => {
  let newPost = {
    id: 5,
    massage: postMessage,
    like: 45325
  }

  state.profile.postsData.push (newPost)
  rerenderEntireTree(state)
}



export default state