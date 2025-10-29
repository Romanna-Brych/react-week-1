// import { useState } from "react";

// export default function ClickCounter() {
//   const [clicks, setClicks] = useState(0);

//   const handleClick = () => {
//     setClicks(clicks + 1);
//   };

//   return <button onClick={handleClick}>Clicked: {clicks}</button>;
// }

interface ClickCounterProps {
  value: number;
  onUpdate: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function ClickCounter({ value, onUpdate }: ClickCounterProps) {
  return <button onClick={onUpdate}>Clicked: {value}</button>;
}
