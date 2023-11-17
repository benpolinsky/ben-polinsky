import { useState } from "preact/hooks";

export default function Greeting({ messages }: { messages: string[] }) {
  const randomNumber = () => Math.floor(Math.random() * messages.length);
  const randomMessage = () => messages[randomNumber()];
  const [greeting, setGreeting] = useState(messages[0]);

  return (
    <div>
      <h3>{greeting}! Thanks for visiting</h3>
      <button onClick={() => setGreeting(randomMessage())}>New Greeting</button>
    </div>
  );
}
