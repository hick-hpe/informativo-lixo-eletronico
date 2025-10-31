import { useDragLayer } from "react-dnd";

export default function CustomDragLayer() {
  const { item, isDragging, currentOffset } = useDragLayer((monitor) => ({
    item: monitor.getItem(),
    isDragging: monitor.isDragging(),
    currentOffset: monitor.getSourceClientOffset(),
  }));

  if (!isDragging || !currentOffset) {
    return null;
  }

  const layerStyles = {
    position: "fixed",
    pointerEvents: "none",
    top: 0,
    left: 0,
    zIndex: 100,
    transform: `translate(${currentOffset.x}px, ${currentOffset.y}px)`,
  };

  return (
    <div style={layerStyles}>
      <img
        src={item.image}
        alt={item.name}
        style={{ width: "80px", height: "80px", opacity: 0.8 }}
      />
    </div>
  );
}