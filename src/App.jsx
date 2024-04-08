import { useEffect } from "react";
import "./App.css";

function App() {
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

  function calcDimensions() {
    console.log(window.innerWidth, window.innerHeight);
  }

  //1x
  // const [id, setUserId] = useState(1);

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
    window.addEventListener("resize", calcDimensions);
    return () => {
      window.removeEventListener("resize", calcDimensions);
      // clearTimeout(timer);
    };
  }, []);

  // react uses virtual dom for html elements to and compare
  // the value of the element to check which element is updated
  return (
    <>
      <h3>hooks managment</h3>
      {/* <h2>{data.name}</h2> */}
      {/* <h2>{data.count}</h2> */}
      {/* <h2>{data.role}</h2> */}
      {/* <button onClick={() => handleCount()}>increment</button> */}
      {/* <input
        value={data.name}
        name="username"
        // onChange={(e) => handleName(e)}
      /> */}
      {/* <h2>{data.count}</h2> */}
      {/* <button onClick={() => handledecrement()}>decrement</button> */}
    </>
  );
}

export default App;
