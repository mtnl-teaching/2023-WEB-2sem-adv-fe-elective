import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import NavButton from "./components/NavButton";
import VanillaGraphExample from "./components/VanillaGraphExample";
import ApolloExample from "./components/ApolloExample";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import LectureMessage from "./components/LectureMessage";

const client = new ApolloClient({
  uri: "https://beta.pokeapi.co/graphql/v1beta",
  cache: new InMemoryCache(),
});

function App() {
  const [count, setCount] = useState(0);

  return (
    <ApolloProvider client={client}>
      <div className="App">
        {/* Example from lecture 1: */}
        <NavButton text="Students" variant="primary">
          <div>Testing something</div>
        </NavButton>

        {/* Example from lecture 3: Adv. APIs */}
        <ApolloExample />

        {/* Example from lecture 4: WebSockets and Eco Web Dev */}
        <LectureMessage />
      </div>
    </ApolloProvider>
  );
}

export default App;
