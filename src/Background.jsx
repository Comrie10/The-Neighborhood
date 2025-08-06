function Background(){
    return(
        <body>
            <main className="Home_body_main">
                <div className="F_cards">
                    <div className="container">
                        <div className="outer_card">
                        <div className="inner_card">
                        <div className="back">
                            <h1 id ="background_h1">Traditional Banking</h1>
                            <p id="Mini_text">Traditional banking of the past was centered around face-to-face interaction between a teller and customer 
                                in order to facilitate various banking services</p>
                            <p id="Mini_text">The various in-person banking services would include: deposits, withdrawals and payment transfers</p>
                            <p id="Mini_text">However as the world modernized and banks shifted toward a technological 
                                focus for their customer model, machine replacements were introduced</p>
                            <p id="Mini_text">These machine replacements were known as Automated Teller machines or ATMs</p>  
                        </div>                      
                        <div className="front">
                            <h1 id ="background_h1">Traditional Banking</h1>
                            <img src="/bank.jpg" alt="Teller" className="Teller_img"></img>
                        </div>
                    </div>
                    </div>
                    <div className="outer_card">
                    <div className="inner_card">
                        <div className="back">
                            <h1 id ="background_h1">Present Banking</h1>
                            <p id="Mini_text">Today's banking structure hinges greatly on the use of ATMs for a myriad of operations.</p>
                            <p id="Mini_text">These operations include but are not limited to withdrawals and deposits of cash from various accounts linked to a user and their credit/debit card(s)</p>
                        </div>                    
                        <div className="front">
                            <h1 id ="background_h1">Present Banking</h1>
                            <img src="/Atm_img.png" alt="Teller" className="Teller_img"></img>
                        </div>                         
                    </div>
                    </div>
                    </div>
                    <div className="Customer_header">
                        <img src="/dislike_img.png" alt="No Cash" className="Dislike_img"></img>
                        <div>
                        <h2 className="Customer_header_text" id ="background_h1">The Customers are Dissatisfied</h2>
                        <p className="Customer_text1" id="Mini_text">As ATMs become a staple of modern banking issues such as insufficent funds and malfunctioning ATMs have led to increasing customer dissatisfaction</p>
                        <p className="Customer_text2"id="Mini_text">The Neighborhood is built on the back of these aforementioned inconveniences as customers now face an availability issue in relation to ATMs and their continually depleted funds causing a major inconvenience</p>
                    </div>
                    </div> 
                    </div>
                                   
            </main>
        </body>
    );
}
export default Background;