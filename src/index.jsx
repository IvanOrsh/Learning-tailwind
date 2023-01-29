import { createRoot } from "react-dom/client";

// from sandbox:
// import UtilityFirstExample from "./lessons/01-sandbox/01-utility-first/UtilityFirstExample";
// import ColorsExample from "./lessons/01-sandbox/02-colors/ColorsExample";
// import ContainerSpacingExample from "./lessons/01-sandbox/03-container-spacing/ContainerSpacingExample";
// import TypographyExample from "./lessons/01-sandbox/04-typography/TypographyExample";
// import SizingExample from "./lessons/01-sandbox/05-sizing/SizingExample";
// import LayoutPositionExample from "./lessons/01-sandbox/06-layout-position/LayoutPositionExample";
// import BgShadowsExample from "./lessons/01-sandbox/07-background-shadows/BgShadowsExample";
// import BordersExample from "./lessons/01-sandbox/08-borders/BordersExample";
import FiltersExample from "./lessons/01-sandbox/09-filters/FiltersExample";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<FiltersExample />);
