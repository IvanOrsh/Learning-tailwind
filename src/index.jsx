import { createRoot } from "react-dom/client";

import LoginModal from "./lessons/02-miniprojects/05-login-modal/LoginModal";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<LoginModal />);
