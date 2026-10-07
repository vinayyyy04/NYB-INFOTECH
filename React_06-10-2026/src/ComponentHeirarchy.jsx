import React from "react";

function ComponentHeirarchy() {
  return (
    <div>
      <h1>App Component</h1>
      <Parent />
    </div>
  );
}

function Parent() {
  return (
    <div>
      <h2>Parent Component</h2>
      <Child />
    </div>
  );
}

function Child() {
  return (
    <div>
      <h3>Child Component</h3>
      <GrandChild />
    </div>
  );
}

function GrandChild() {
  return (
    <div>
      <p>GrandChild Component</p>
    </div>
  );
}

export default ComponentHeirarchy;