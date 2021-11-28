let rerenderEntireTree = () => {
    console.log("ismenen");
};
let state = {
    profile: {
        posts: [
            { id: 1, massage: "hellow world!", like: 45325 },
            { id: 2, massage: "hi", like: 5245 },
            { id: 3, massage: "didi", like: 3232 },
        ],
    },

    dialogs: {
        massegeData: [
            { id: 1, massege: "hellow world" },
            { id: 1, massege: "hi" },
            { id: 1, massege: "07949299294" },
        ],
        dialogData: [
            { id: 1, name: "Sashula" },
            { id: 2, name: "Dima" },
            { id: 3, name: "Lesha" },
        ],
    },
};

export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        massage: postMessage,
        like: 45325,
    };

    state.profile.posts.push(newPost);
    rerenderEntireTree(state);
};

export let updateNewPostText = (newText) => {
    state.profile.posts.push(newText);
    rerenderEntireTree(state)
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer;
};

export default state;
