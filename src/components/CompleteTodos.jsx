import React from "react";

// CSS-in-JS
const completeStyle = {
  backgroundColor: "#ffffe0",
  width: "400px",
  minHeight: "200px",
  margin: "8px",
  borderRadius: "8px"
};

export const CompleteTodos = (props) => {
  const { todos, onClickBack } = props;

  return (
    <div style={completeStyle}>
      <p className="title">完了のTODO</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClickBack(index)}>戻す</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
