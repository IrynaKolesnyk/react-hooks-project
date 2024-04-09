import { useLocalStorage } from "../hooks/useLocalStorage";

export default function LocalStorageToken() {
  const [token, { setItem, removeItem }] = useLocalStorage("token");

  return (
    <div className="tokenHookContainer">
      <p>Your token: {token}</p>
      <div>
        <button onClick={() => setItem("new-token")}>Set token</button>
        <button onClick={() => removeItem()}>Remove token</button>
      </div>
    </div>
  );
}
