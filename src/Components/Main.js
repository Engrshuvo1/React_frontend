import React from "react";
import Header from "./Header/Header";
import Hello from "./Hello/Hello";
import Test from './Hello/Test/Test';
import Footer from "../Footer/Footer";
import Order from "./Orders/Order";




const Main = props => {
    return (

        <div>

        <Hello />

        <Header />        
        
        <div className="container">
            
            <Test />

        </div>
        <Order />
        <Footer />

        </div>
    )
}


export default Main;