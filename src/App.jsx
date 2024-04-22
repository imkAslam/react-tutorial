import { useEffect, useRef } from "react";
import "./App.css";
import { useCount } from "./hooks/count";
import Header from "./layout/header";

function App() {
  const [counter, setCounter] = useCount();
  const [numbs, setNumbs] = useCount(10);

  const inputRef = useRef();

  console.log("counter", counter);
  console.log("numbs", numbs);

  // const [data, setValue] = useState({
  //   name: "React",
  //   role: "Dev",
  //   count: 0,
  //   data: [],
  // });

  // const handleCount = () => {
  //   setValue((prevVal) => ({
  //     ...prevVal,
  //     count: prevVal.count + 1,
  //     data: [...prevVal.data, { name: "abc", counter: prevVal.count + 1 }],
  //   }));
  // };

  // const handledecrement = () => {
  //   setValue((prevVal) => ({
  //     ...prevVal,
  //     count: prevVal.count - 1,
  //   }));
  // };

  // counter();

  // function counter() {
  //   console.log("counter");
  // }

  // counter2();
  // //fat arrow fun
  // //let and const are in strict mode
  // const counter2 = () => {
  //   console.log("counter-2");
  // };

  // console.log(data);

  // asycn

  // useEffect is a React hook used for performing side effects in functional components.
  // Side effects may include data fetching, subscriptions, or manually changing the DOM or DOM events.

  useEffect(() => {
    // api call to server Promise API or async/await /1x 2x
    // get user lat log
    //Dom matation
    // fetch, axios or any 3rd party library
    // const api_call = fetch(`api/user/${id}`)
    //   .then((response) => console.log(response))
    //   .catch((e) => {
    //     console.log(e.message);
    //   });
    //life cycle of side effect
    // 1-component-didmount
    // 2-component-did update
    // 3-component-willunmount
    // let timer = setTimeout(() => {}, 100);
    //checking the window inner window width and height
    // window.addEventListener("resize", calcDimensions);
    // return () => {
    //   window.removeEventListener("resize", calcDimensions);
    //   // clearTimeout(timer);
    // };
  }, []);

  console.log("inputRef", inputRef?.current?.value);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <Header />

      <h3>hooks management</h3>
      {/* <h2>{data.name}</h2> */}
      {/* <h2>{data.count}</h2> */}
      {/* <h2>{data.role}</h2> */}
      <button onClick={() => setCounter()}>increment-counter</button>
      <br />
      <button onClick={() => setNumbs()}>increment-numbs</button>
      <div>
        <input className="email" ref={inputRef} name="username" />
      </div>
      <button>submit</button>
      {/* <h2>{data.count}</h2> */}
      {/* <button onClick={() => handledecrement()}>decrement</button> */}
    </div>
  );
}

export default App;
