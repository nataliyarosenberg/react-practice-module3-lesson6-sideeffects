import { useState, useEffect } from "react";

export default function App() {
  const [first, setFirst] = useState(0);
  const [second, setSecond] = useState(0);
  const [clicks, setClicks] = useState(() => {
    // Read the value from localStorage
    const savedClicks = window.localStorage.getItem("saved-clicks");

    // If a value exists, parse and return it
    if (savedClicks !== null) {
      return JSON.parse(savedClicks);
    }

    // Otherwise, return the default value of 0
    return 0;
  });
  //useing effects to track each value separately
  useEffect(() => {
    console.log("First updated:", first);
  }, [first]);

  useEffect(() => {
    console.log("Secong updated:", second);
  }, [second]);
  //useing effects to track values all together
  useEffect(() => {
    console.log("First and secong updated:", first + second);
  }, [first, second]);

  // use of several effects 1. shown once after mounting
  useEffect(() => {
    console.log("You caan see me only once!");
  }, []);
  //2. Each time the value of click changes
  useEffect(() => {
    console.log("Clicks updated:", clicks);
  }, [clicks]);
  // 3. With each render (has no dependencies)
  useEffect(() => {
    document.title = `You clicked ${clicks} times`;
  });

  useEffect(() => {
    // Save the clicks state to localStorage whenever it changes
    localStorage.setItem("saved-clicks", JSON.stringify(clicks));
  }, [clicks]);

  return (
    <div>
      <button onClick={() => setFirst(first + 1)}>First: {first}</button>
      <button onClick={() => setSecond(second + 1)}>Second: {second}</button>
      <button onClick={() => setClicks(clicks + 1)}>
        You clicked {clicks} times
      </button>
      <button onClick={() => setClicks(0)}>Reset</button>
    </div>
  );
}
// const [isModalOpen, setIsModalOpen] = useState(false);

// const openModal = () => setIsModalOpen(true);

// const closeModal = () => setIsModalOpen(false);

//   return (
//     <div>
//       <button onClick={() => setClicks(clicks + 1)}>
//         You clicked {clicks} times
//       </button>
//       <button onClick = {() => setClicks(0)}>Reset</button>
//       {/* <h1>Main content of the page</h1>
//       <button onClick={openModal}>Open modal</button>
//       {isModalOpen && (
//         <Modal onClose={closeModal}>
//           <h2>Custom Modal Content</h2>
//           <p>This is a reusable modal with dynamic content.</p>
//         </Modal>
//       )} */}
//     </div>
//   );
// }

// export default function App() {
//   const [count, setCount] = useState(1);
//   const [person, setPerson] = useState(null);

//   useEffect(() => {
//     async function fetchCharacter() {
//       const response = await axios.get(`https://swapi.info/api/people/${count}`);
//       setPerson(response.data);
//     }
//     fetchCharacter();
//   }, [count]);

//   return (
//     <>
//       <h2>The count is { count }</h2>
//       <button onClick={() => setCount(count + 1)}>Get next character</button>
//       <pre>{JSON.stringify(person, null, 2)}</pre>
//     </>
//   );
// }
// export default function App() {
//   const [clicks, setClicks] = useState(0);

//   useEffect(() => {
//     console.log("You can see me only once!");
//   }, []);

//   return (
//     <button onClick={() => setClicks(clicks + 1)}>
//       You clicked {clicks} times
//     </button>
//   );
// };
// export default function App() {
//   const [count, setCount] = useState(0);
//   useEffect(() => {
//     console.log(`Effect ran for ${count}`);
//     return () => {
//       console.log(`Clean up for ${count}`);

//     };

// }, [count])
//   return (
//     <>
//       <button onClick={() => setCount(count + 1)}>
//         Count is {count}
//       </button>
//     </>
//   );
// }
