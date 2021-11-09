export default async function fetchData(endpoint) {
  const response = await fetch(
    `https://musayuksel3-chat-server.glitch.me/${endpoint}`
  );
  const data = await response.json();
  return data;
}
