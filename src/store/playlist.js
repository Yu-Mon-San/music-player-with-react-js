import React from "react";

const fetchedPlaylist = [
  {
    id: 0,
    title: "01 Track1",
    author: "Artist 1",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-15.mp3",
    cover:
      "https://images.unsplash.com/photo-1584352604394-c2c6f06e00c1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
  },
  {
    id: 1,
    title: "02 Track2",
    author: "Artist 2",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    cover:
      "https://images.unsplash.com/photo-1574882225022-9e0e447e9662?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 2,
    title: "03 Track3",
    author: "Artist 3",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3",
    cover:
      "https://images.unsplash.com/photo-1516223725307-6f76b9ec8742?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80"
  },
  {
    id: 3,
    title: "04 Track4",
    author: "Artist 4",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3",
    cover:
      "https://images.unsplash.com/photo-1576328077645-2dd68934d2b7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=282&q=80"
  }
];

// mock api request
export const fetchPlaylist = () => {
  return new Promise((res, rej) => {
    setTimeout(() => res(fetchedPlaylist), 1000);
  });
};

export const PlaylistContext = React.createContext();
