import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { motion } from 'framer-motion'

import './Contact.css'

const Contact = (props) => {
    const transition = { duration: 3, type: 'spring' }
    const formRef = useRef()
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: ''
    })
    const [done, setDone] = useState(false)
    const handleChange = e => {
        const { name, value } = e.target
        setForm({ ...form, [name]: value })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setDone(true)
        emailjs.send(
            'service_7tifjfg', //service id
            'template_448rt5s',// template id
            {
                name: form.name,
                email: form.email,
                message: form.message
            },
            'Lpi7KZhy99lKg8tG_' // my public key
        ).then(
            () => {
                setDone(false)
                setForm({
                    name: '',
                    email: '',
                    message: '',
                })
            },
            (error) => {
                console.log(error);
                alert('Something went wrong. Please try again.')
            }
        )
    }

    return (
        <div className="contact" id='contact'>
            <motion.div
                initial={{ x: -300, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={transition}
                className="c-left">
                <div className="c-decs">
                    <span>Get in touch</span>
                    <span
                        style={{ color: props.lightMode ? '' : 'whitesmoke' }}
                    >Contact me</span>
                    <span
                        style={{ color: props.lightMode ? '' : '#e9e7c6' }}
                    >I take great pleasure in collaborating with passionate and committed individuals who strive to make the world a better place. Their dedication and creativity inspire me to push my limits and achieve new heights. If you share this vision and would like to work together, please don't hesitate to reach out to me. I'm always looking for new opportunities to learn and grow.
                    </span>
                    <div className="blur c-blur"></div>
                </div>
            </motion.div>
            <div className="c-right">
                <motion.form
                    ref={formRef}
                    className="form-control"
                    onSubmit={handleSubmit}
                    autoComplete='off'
                    initial={{ x: 300, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={transition}
                >
                    <input
                        type="text" placeholder="Your Full Name"
                        value={form.name} name="name"
                        required onChange={handleChange}
                        autoComplete="off"
                    />
                    <input
                        type="email" placeholder="Your Email"
                        value={form.email} name="email"
                        required onChange={handleChange}
                        autoComplete="off"
                    />
                    <textarea
                        rows="6" placeholder="Your Message"
                        value={form.message} name='message'
                        required onChange={handleChange}
                        autoComplete="off"
                    />
                    <button className="btn c-btn">
                        Send
                    </button>
                </motion.form>
                <span className='form-mess'
                    style={{ color: props.lightMode ? '' : 'whitesmoke' }}
                >
                    {done && 'Thank you. I will get back to you as soon as possible.'}
                </span>
            </div>
        </div>
    )
}

export default Contact
