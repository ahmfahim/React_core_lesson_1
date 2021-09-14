const domContainer = document.getElementById("root");

const Increment = () => {
    const [count, setCount] = React.useState(0);
    return (
        <div class='d-flex justify-content-center'>
            <div class='text-center'>
                <h1 class='display-1' id='display'>{count}</h1>
                <div>
                    <button class='btn btn-warning' id='button' onClick={() => setCount(count + 1)}>Increment +</button>
                </div>
            </div>
        </div>
    )
};

ReactDOM.render(
    <div>
        <Increment />
        <Increment />
        <Increment />
    </div>
    , domContainer
);