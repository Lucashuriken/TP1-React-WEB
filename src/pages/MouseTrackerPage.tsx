import { useMousePosition } from "../hooks/useMousePosition";

export default function MouseTrackerPage() {
  const { x, y } = useMousePosition();

  return (
    <div>
      <h2>Mouse Tracker</h2>
      <p>X: {x}</p>
      <p>Y: {y}</p>
    </div>
  );
}
