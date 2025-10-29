// import Product from "./Product";

import Alert from "./Alert";
import Button from "./Button";
import ClickCounter from "./ClickCounter";
import UserMenu from "./UserMenu";
import { useState } from "react";

// export default function App() {
//   return (
//     <>
//       <h1>Products</h1>

//       <Product
//         name="Tacos With Lime"
//         imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?w=640"
//         price={10.99}
//       />
//       <Product
//         name="Fries and Burger"
//         imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?w=640"
//         price={14.29}
//       />
//     </>
//   );
// }

interface Book {
  id: string;
  name: string;
}

const books: Book[] = [
  { id: "id-1", name: "JS for beginners" },
  { id: "id-2", name: "React basics" },
  { id: "id-3", name: "React Query overview" },
];

// interface User{
//   id: number;
//   name: string;
// }

interface Values {
  x: number;
  y: number;
}

export default function App() {
  const [clicks, setClicks] = useState<number>(0);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log("Im a button");
    console.log(event);
    setClicks(clicks + 1);
  };

  const [isOpen, setIsOpen] = useState(false);
  const toggleMessage = () => {
    setIsOpen(!isOpen);
  };

  const [values, setValues] = useState<Values>({ x: 0, y: 0 });
  // const updateX = () => {
  //   setValues({
  //     ...values,
  //     x: values.x + 1,
  //   });
  // };
  // const updateY = () => {
  //   setValues({
  //     ...values,
  //     y: values.y + 1,
  //   });
  // };
  const updateValue = (key: keyof Values) => {
    setValues({
      ...values,
      [key]: values[key] + 1,
    });
  };
  console.log(values);
  // const [item, setItem] = useState<User[]>([]);
  // const [user, setUser] = useState<User | null>(null);
  return (
    <>
      <h1>Books of the week</h1>
      <ul>
        {books.map((book) => (
          <li key={book.id}>{book.name}</li>
        ))}
      </ul>
      <Alert />
      <Alert type="success" />
      <Alert type="error" />
      <Button variant="primary" text="Login" />
      <Button variant="secondary" text="Follow" />
      <UserMenu name="My name" />
      <button onClick={handleClick}>Current: {clicks}</button>
      {/* <ClickCounter />
      <ClickCounter /> */}
      <ClickCounter onUpdate={handleClick} value={clicks} />
      <ClickCounter onUpdate={handleClick} value={clicks} />
      <button onClick={toggleMessage}>
        {isOpen ? "Hide message" : "Show message"}
      </button>
      {isOpen && <p>🎉 Surprise! You toggled me.</p>}
      {/* <button onClick={updateX}>Update X</button>
      <button onClick={updateY}>Update Y</button> */}
      <button onClick={() => updateValue("x")}>Update X</button>
      <button onClick={() => updateValue("y")}>Update Y</button>
    </>
  );
}
