import { createRoot } from "react-dom/client";

import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";
import { App } from "./App";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

ChartJS.defaults.font.family = '"Poppins", sans-serif';

createRoot(document.getElementById("root") as HTMLElement).render(<App />);
