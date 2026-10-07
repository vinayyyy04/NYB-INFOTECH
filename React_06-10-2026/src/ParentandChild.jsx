function ParentandChild() {
    return (
        <div>
            <h1>Parent Component</h1>
            <Child />
        </div>
    );
}

function Child() {
    return (
        <div>
            <h2>Child Component</h2>
        </div>
    );
}

export default ParentandChild;