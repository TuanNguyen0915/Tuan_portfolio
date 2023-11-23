import { experiences } from '../../data/data.js'
// packages
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper'
import { motion } from 'framer-motion'
//css
import './Experience.css'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/autoplay'

const Experience = (props) => {
    const transition = { duration: 4, type: 'spring' }
    return (
        <div className="experience" id='exp'>
            <motion.div
                initial={{ y: -300, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={transition}
                className="e-heading">
                <span>Experiences</span>
                <span
                    style={{ color: props.lightMode ? '' : '#e9e7c6' }}
                >Throughout my career, I have honed my ability to work collaboratively with teams and solve work problems in an efficient and effective manner. This has enabled me to consistently meet customer needs and exceed their expectations, bringing joy to their experience.</span>
                {/* <div className="blur e-blur1"></div> */}
                <div className="blur e-blur2"></div>
            </motion.div>
            {/* slider */}
            <Swiper
                modules={[Pagination, Autoplay]}
                slidesPerView={1}
                pagination={{ clickable: true }}
                autoplay={
                    { delay: 2000 }
                }
                data-swiper-autoplay="2000"
            >
                {experiences.map((exp, idx) => (
                    <SwiperSlide key={idx}
                    >
                        <div className="exp-box">
                            <img src={exp.img} alt="" />
                            <span>{exp.company}</span>
                            <span
                                style={{ color: props.lightMode ? '' : '#e9e7c6' }}
                            >{exp.exp}</span>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

        </div >
    )
}

export default Experience