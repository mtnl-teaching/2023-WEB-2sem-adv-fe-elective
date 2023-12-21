import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {ApolloClient, ApolloProvider, createHttpLink, InMemoryCache,} from "@apollo/client";

export interface RootProps {
  children: React.ReactNode;
}

const httpLink = createHttpLink({
  uri: "https://rickandmortyapi.com/graphql",
});

// 3
const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

const Root = ({children}: RootProps) => {
  return (
      <ApolloProvider client={client}>
        <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "column",
            }}
        >
          <Header/>
          {children}
          <Footer/>
        </div>
      </ApolloProvider>
  );
};

export default Root;
