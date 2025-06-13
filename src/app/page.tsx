"use client"
export default function Home() {

const cookies = document.cookie.split(';');
let userName;

for (const cookie of cookies) {
  const [name, value] = cookie.trim().split('=');
  if (name === 'userName') {
    userName = value;
    break;
  }
}


  return (
    <>
      <h1>Homepage</h1>
      <h1>Name: {userName}</h1>
    </>
  );
}
