import { ApolloProvider } from "@apollo/react-hooks"
import React from "react";
import Home from "../pages/home"
import { client } from "../pages/api/characters"
import { GlobalStyle } from '../components/common'
import { Header } from '../components/common'


const App = ()=>{
    
    return (
        <ApolloProvider client={client}>
            <GlobalStyle/>
            <Header/>
            <Home client={client}></Home>
        </ApolloProvider>
    )
}

export default App;