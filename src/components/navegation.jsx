import React from "react";

class Navegation extends React.Component {
    render(){
        function home_view() {
            window.location = "/"
        }
        let register_view = () => {
            window.location = "/register_page"
        }
        return(
            <div id="block-nav">
                <li className="items-nav">
                    <button className="btn-nav" onClick={home_view}> Home </button>
                </li>
                <li className="items-nav">
                    <button className="btn-nav" onClick={register_view}> Register </button>
                </li>
                <li className="items-nav">
                    <button className="btn-nav"> Consult </button>
                </li>
                <li className="items-nav">
                    <button className="btn-nav"> Contact </button>
                </li>
            </div>
        )
    }
}

export default Navegation