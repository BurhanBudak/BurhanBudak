import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import Main from "../components/main"
export default () => (

        <Layout>
            <Header color="#e74c3c">
        </Header>
        <Main>
        <img alt="burhan" src={"/img/profilbild2.jpg"} style={{borderRadius: `50%`, width:`200px`,height:`200px`}}></img>
      <figcaption>
    <p style={{maxWidth:`400px`}}>Hej, mitt namn är Burhan Budak och just nu studerar jag till Front-end utvecklare hos yrkeshögskolan Nackademin. I min utbildning så lär jag mig allt inom webbutveckling som JavaScript,HTML, CSS, ramverk och lite back-end. Anledningen för att jag valde Front-end är för att jag har märkt hur webben växer och hur webbutveckling är viktigt för spridningen av information.</p>
      </figcaption> 
    </Main>
        </Layout>

)