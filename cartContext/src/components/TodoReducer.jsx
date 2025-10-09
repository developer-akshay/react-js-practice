import React, { useReducer, useState } from "react";

function todoListReducer(state, action) {
  switch (action.type) {
    case "ADD":
      return [
        ...state,
        {
          id: Date.now(),
          text: action.payload.text,
          completion: action.payload.completion,
        },
      ];
    case "TOGGLE_COMPLETION":
      return state.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            completion: !item.completion,
          };
        }
        return item;
      });

    case "DELETE_TODO":
      return state.filter((item) => {
        return item.id !== action.payload.id;
      });

    default:
      return state;
  }
}

const TodoReducer = () => {
  const [todoInput, setTodoInput] = useState("");
  const [list, dispatch] = useReducer(todoListReducer, []);
  return (
    <div class="todoBox">
      <div className="todo">
      <h2>TODO </h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (!todoInput.trim()) return;
            dispatch({
              type: "ADD",
              payload: {
                text: todoInput?.trim(),
                completion: false,
              },
            });
            setTodoInput("");
          }}
        >
          <input
            type="text"
            placeholder="enter text here"
            value={todoInput}
            onChange={(e) => setTodoInput(e.target.value)}
          />
          <button type="submit">ADD TODO</button>
        </form>

        <div className="list">
          {list?.map((item) => {
            return (
              <li key={item.id}>
                {item.text}
                <input
                  type="checkbox"
                  checked={item.completion}
                  onChange={() =>
                    dispatch({
                      type: "TOGGLE_COMPLETION",
                      payload: {
                        id: item.id,
                      },
                    })
                  }
                />
                <button
                  onClick={() => {
                    dispatch({
                      type: "DELETE_TODO",
                      payload: {
                        id: item.id,
                      },
                    });
                  }}
                >
                  Delete
                </button>
              </li>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TodoReducer;
