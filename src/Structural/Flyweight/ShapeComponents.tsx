import React from "react";

interface ShapeProps {
  flyweight: Flyweight;
  position: { x: number; y: number };
}

const Shape: React.FC<ShapeProps> = ({ flyweight, position }) => {
  const style: React.CSSProperties = {
    backgroundColor: flyweight.color,
    width: flyweight.size,
    height: flyweight.size,
    borderRadius: "50%",
    position: "absolute",
    left: position.x,
    top: position.y,
  };
  return <div style={style}></div>;
};

export default Shape;
