import css from "./Alert.module.css";
import clsx from "clsx";

interface AlertProps {
  type?: "success" | "error";
}

export default function Alert({ type }: AlertProps) {
  return (
    <p className={clsx(css.alert, type && css[type])}>This is alert text</p>
  );
}
