import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import Main from "../components/main"

export default () => (
   
        <Layout>
        <Header color="#2980b9">

        </Header>
        <Main>
        <form method="post" netlify-honeypot="bot-field" data-netlify="true" name="contact">
                   <input type="hidden" name="bot-field" />
                <label>
                 Name
                <input type="text" name="name" id="name" />
                </label>
                        <label>
                        Email
                        <input type="email" name="email" id="email" />
                        </label>
                        <label>
                        Subject
                        <input type="text" name="subject" id="subject" />
                        </label>
                        <label>
                        Message
                        <textarea name="message" id="message" rows="5" />
                        </label>
                        <button type="submit">Send</button>
                        <input type="reset" value="Clear" />
        </form>
        </Main>
        </Layout>

)