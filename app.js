let a =
React.createElement("div",{id:"ParentDiv"},
React.createElement("div",{id:"childdiv"},[
React.createElement("h1",{id:"heding"},"Hello Worlddd"),
React.createElement("h2",{id:"heding"},"Hello Worlddd"),
React.createElement("h3",{id:"heding"},"Hello Worlddd")]),);

let b= ReactDOM.createRoot(document.getElementById("body"));

b.render(a);

