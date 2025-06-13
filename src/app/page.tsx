"use client"

import { useEffect, useState } from "react";

export default function Home() {

  const [userName, setUserName] = useState<string | undefined>(undefined);
  useEffect(() => {
    if (typeof document !== 'undefined') {
      const cookies = document.cookie.split(';');

      for (const cookie of cookies) {
        const [name, value] = cookie.trim().split('=');
        if (name === 'userName') {
          setUserName(value);
          break;
        }
      }
    }
  }, []);

  return (
    <>
      <h1>Homepage</h1>

      <h1>Name: {userName}</h1>
    </>
  );
}
