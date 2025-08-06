function Features(){
    return(
        <body id="body_feat">
            <main className="Home_body_main"></main>
                {/*<div className="Feature_header" id="card">
                    <h1 className="Feature_header_text"> What the Neighborhood can offer</h1>
                </div>*/}
                
                <div className="feature_row" id="card_1">
                    <div id="card_0">
                        <img id="s" src="/map2.jpg"/>
                    </div>
                    <div id="row_1">
                    <div className="feature_r1_c1">
                        <img id="port"src="/Portability_image.png" alt="Android and iOS"/>
                    </div>
                    <div className="feature_r1_c2">
                        <h4 className="feature_r1_c2_header">
                            Available on Andriod and IOS Operating Systems
                        </h4>
                        <p className="feature_r1_c2_text">
                            The Neighborhood  is meant to be available on both Android and iOS platforms. Users should be able to enact login/signup/logout processes on both.
                        </p>
                    </div>
                    </div>
                </div>
                <div className="feature_row" id="card_2">
                    <div className="feature_r2_c2">
                        <h4 className="feature_r2_c2_header">
                            Email Verification Process 
                        </h4>
                        <p className="feature_r2_c2_text">
                            The Neighborhood will prompt a user verification process by sending a one-time code to the given email upon signing up for the app.
                            At this point, the user will enter this code into the presented section on the app display after which the system will either accept or deny user entry into the app itself
                        </p>
                    </div>
                    <div className="feature_r2_c1">
                        <img src="/email_img.png" alt="Email" className="email_img"/>
                    </div>
                    
                </div>
                <div className="feature_row" id="card_3">
                    <div id="card_8">
                        <img src="/Survey.png" id="Survey"/>
                    </div>
                     <div id="card_3_og">
                    <div className="feature_r3_c1">
                        <img src="/questionnaire_img.png" alt="questionnaire" className="Questionnaire"></img>
                    <div className="feature_r3_c2">
                        <h4 className="feature_r3_c2_header">
                            Questionnaire for User Preferences
                        </h4>
                        <p className="feature_r3_c2_text">
                            Upon signing up for the Neighborhood app, 
                            the user will be prompted with a number of questions to determine their preferences in terms of bank, machine type, currency etc. 
                            This information will be used for experience personalization in terms of the map and recommendations.
                        </p>
                    </div>
                    </div>
                    </div>
                </div>
                <div className="feature_row" id="card_4">
                    <div id="row_3_p1">
                    
                    <div className="feature_r4_c2">
                        <h4 className="feature_r4_c2_header">
                            Map Display with Pinned User and ATM Locations
                        </h4>
                        <p className="feature_r4_c2_text1">
                            The Neighborhood will request access to a user's location and if approved will use this information along with the given questionnaire data to develop a personalized experience. This personalized experience encompasses a map with pinned ATMs from banks of the user's preference based on the questionnaire within a chosen radius of user's current location also on the map.
                        </p>
                        <p className="feature_r4_c2_text2">
                            If the user had chosen to bypass the questionnaire, a more genral view of the map encompassing all the banks ATMs will be presented. However, ineither case a user will have the option to filter ATMs based on any momentary preference the user may have.
                        </p>
                    </div>
                    </div>
                    <div><img src="GEN_MAP.jpg" id="atm_map"/></div>
                </div>
                <div className="feature_row" id="card_5">
                    <div>
                        <img src="/Select_ATM.jpg" id="S_ATM"/>
                    </div>
                    
                    <div className="feature_r5_c2">
                        <h4 className="feature_r5_c2_header">
                            ATM tags and Information on the Map
                        </h4>
                        <p className="feature_r5_c2_text">
                            Each ATM will be represented by a tag on the Neighborhood Map. The tag color will indicate whether the ATM is available, unavailable or available but has higher foot traffic.
                            When a user selects an ATM tag, the information associated with that ATM will then be displayed. The infomation relevant to an ATM includes: machine type, available currency, associated bank and the distance from the user's location to that ATM.
                        </p>
                    </div>
                </div>
                <div className="feature_row" id="card">
                    <div className="feature_r6_c1">
                        <img src="/recommend_img.png" alt="Recommendation" className="recommend_img"></img>
                    </div>
                    <div className="feature_r6_c2">
                        <h4 className="feature_r6_c2_header">
                            ATM Recommendations
                        </h4>
                        <p className="feature_r6_c2_text">
                            The Neighborhood has, as part of it display, a button which the user can press to ask the app to recommend an ATM for them to visit. The app will recommend ATMs based on the questionnaire data, the user's current location and the availability of ATMs in the area.
                        </p>
                    </div>
                </div>
            
        </body>
    );// Filter by ATM, bank, Reccommend, Specific ATM
}
export default Features