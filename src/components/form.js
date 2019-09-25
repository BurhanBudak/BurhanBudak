import React from "react"
import FormStyles from  "./form.module.scss"

export default () => (
    <div className={FormStyles.contact}>

   
        <div class="contact">
            <form 
            method="post" 
            netlify-honeypot="bot-field" 
            data-netlify="true" 
            data-netlify-recaptcha="true" 
            netlify
            class="contactForm"
            >
                        <input type="hidden" name="bot-field" />
                        <p>
                            <label>
                            Name
                            <input type="text" name="name" id="name" required />
                            </label>
                        </p>
                        <p>
                            <label>
                            Email
                            <input type="email" name="email" id="email" required />
                            </label>
                        </p>
                        <p>
                            <label>
                                Phone number
                                <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"required/>
                            </label>
                        </p>
                        <p>
                        <label>
                            Subject
                            <input type="text" name="subject" id="subject" required />
                            </label>
                        </p>
                        <p class="wide">
                                <label>
                                Message
                                <textarea name="message" id="message" rows="5" />
                                </label>
                        </p>
                        <p>
                                <div data-netlify-recaptcha="true"></div>
                        </p>
                        <p class="wide">
                                <button type="submit" class="button">Send</button>
                        </p>
                        <p class="wide">
                                <input type="reset" value="Clear" />
                        </p>
                </form>
            </div>
    </div>
)