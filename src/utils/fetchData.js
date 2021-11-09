export default async function fetchData(endpoint) {
  // const response = await fetch();
  // `https://musayuksel3-chat-server.glitch.me/${endpoint}`
  // const data = await response.json();
  // return data;

  return fakeData;
}

const fakeData = [
  {
    id: 0,
    from: "Bart",
    text: "Welcome to CYF chat system!",
  },
  {
    id: 1,
    from: "musa",
    text: "Hhi",
    timeSent: "2021-11-9 08:16:19",
  },
  {
    id: 2,
    from: "musa",
    text: "message 3",
    timeSent: "2021-11-9 08:29:53",
  },
  {
    id: 3,
    from: "sdfd",
    text: "dfdf",
    timeSent: "2021-11-9 08:34:51",
  },
  {
    id: 4,
    from: "musa",
    text: "musa",
    timeSent: "2021-11-9 08:35:05",
  },
  {
    id: 5,
    from: "musaddd",
    text: "musa",
    timeSent: "2021-11-9 08:35:12",
  },
  {
    id: 6,
    from: "d",
    text: "Hhi",
    timeSent: "2021-11-9 08:35:19",
  },
  {
    id: 7,
    from: "musa",
    text: "name3",
    timeSent: "2021-11-9 08:35:28",
  },
  {
    id: 8,
    from: "musa",
    text: "222",
    timeSent: "2021-11-9 08:35:36",
  },
  {
    id: 9,
    from: "musa",
    text: "message 10",
    timeSent: "2021-11-9 08:35:48",
  },
  {
    id: 10,
    from: "musa",
    text: "message 11",
    timeSent: "2021-11-9 08:35:58",
  },
  {
    id: 11,
    from: "musa",
    text: "message 12",
    timeSent: "2021-11-9 08:36:08",
  },
];
