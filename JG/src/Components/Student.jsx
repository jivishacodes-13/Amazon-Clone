import React from "react";

function Student(props) {
  return (
    <div style={{
      width: "250px",
      padding: "18px",
      borderRadius: "12px",
      backgroundColor: "#ec77c7",  
      boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
      textAlign: "center",
      color: "#1f2937",
      fontFamily: "Arial"
    }}>
      <h3 style={{ margin: "8px 0", fontWeight: "600" }}>
        {props.name}
      </h3>

      <p style={{ margin: "4px 0", fontSize: "14px" }}>
        Course: {props.course}
      </p>

      <p style={{ margin: "4px 0", fontSize: "14px" }}>
        Marks: {props.marks}
      </p>

    </div>
  );
}

export default Student;