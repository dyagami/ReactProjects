const Navbar = ({url, setUrl}) => {
    return (
        <nav className="navbar">
            

            <nav className="links">

                <h1>Links:</h1>
                <div className="links">
                    <div className="link">
                        <h1><li><a href ="/phpmyadmin" target="_blank" >PhpMyAdmin</a></li></h1>
                    </div>
                    <div className="link">        
                        <h1><li><a href ="#" onClick={(event) => {event.preventDefault(); console.log("link clicked"); setUrl("http://dnsleaktest.com")}} >DNS Leak Test</a></li></h1>
                    </div>
                    <div className="link">        
                        <h1><li><a href ="#" onClick={(event) => {event.preventDefault(); console.log("link clicked"); setUrl("/wordpress")}} >Wordpress</a></li></h1>
                    </div>
                    <div className="link">
                        <h1><li><a href ="#" onClick={(event) => {event.preventDefault(); setUrl("/copypaste")}} >Copypaste</a></li></h1>
                    </div>
                
                
                </div>

            </nav>
        </nav>


    );



}

export default Navbar;