import { useState } from "react";
import "./App.css";

interface User {
  name: string;
  age: number;
}

const App = () => {
  const [user, setUser] = useState<User>();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(user);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={user?.name || ""}
        placeholder="name"
        onChange={(e) =>
          setUser((prev) => ({ ...prev!, name: String(e.target.value) }))
        }
      />
      <input
        type="text"
        value={user?.age || ""}
        placeholder="age"
        onChange={(e) =>
          setUser((prev) => ({ ...prev!, age: Number(e.target.value) }))
        }
      />
      <button type="submit">Click</button>
    </form>
  );
};

export default App;
