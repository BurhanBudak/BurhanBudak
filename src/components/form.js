import React from "react"
import FormStyles from  "./form.module.scss"

export default () => (
    <div >

   
        <div className={FormStyles.contact}>
            <form 
            method="post" 
            netlify-honeypot="bot-field" 
            data-netlify="true" 
            data-netlify-recaptcha="true" 
            netlify
            class="contactForm"
            >
                        <input type="hidden" name="bot-field" />
                        
                            <label>
                            Name
                            <input type="text" name="name" id="name" required />
                            </label>
                        
                            <label>
                            Email
                            <input type="email" name="email" id="email" required />
                            </label>
                        
                        
                            <label>
                                Phone number
                                <input type="tel" id="phone" name="phone" required/>
                            </label>
                        
                        
                            <label>
                            Subject
                            <input type="text" name="subject" id="subject" required />
                            </label>
                       <div className={FormStyles.wide}>
                            <label>
                            Message
                            <textarea name="message" id="message" rows="5" />
                            </label>
                        </div>
                        
                           
                            <button className={FormStyles.button} type="submit">Send</button>
                       
                            <input className={FormStyles.button} type="reset" value="Clear" />
                    
                        
                </form>
            </div>
    </div>
)