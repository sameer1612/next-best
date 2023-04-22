import { getKey } from "../../key-manager";
import "./footer.scss";

export function Footer() {
  const key = getKey();

  return (
    <>
      {key ? null : (
        <footer className="d-flex w-100 justify-content-center">
          <div>Enter the API key in the top right settings.</div>
        </footer>
      )}
    </>
  );
}
