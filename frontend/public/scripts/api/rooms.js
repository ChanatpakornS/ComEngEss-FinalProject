import { BACKEND_URL } from "../config.js";

export const drawing = async (roomId, drawing) => {
  await fetch(`${BACKEND_URL}/room/${roomId}/draw`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(drawing),
  });
};
export const getRooms = async () => {
  const response = await fetch("http://localhost:3000/room", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.json();
};

export const joinRoom = async (roomId) => {
  const response = await fetch(`http://localhost:3000/room/${roomId}/join`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.json();
};

export const quitRoom = async (roomId) => {
  const response = await fetch(`http://localhost:3000/room/${roomId}/quit`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.json();
}

// export const createRoom = async (roomName) => {
//   const response = await fetch("http://localhost:3000/room", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ roomName }),
//   });
//   return response.json();
// };
