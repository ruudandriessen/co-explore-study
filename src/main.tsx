import { createRoot } from "react-dom/client";

import { App } from "./App";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

createRoot(document.getElementById("root") as HTMLElement).render(<App />);
