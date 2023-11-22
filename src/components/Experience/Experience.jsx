import { experiences } from '../../data/data.js'
// packages
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'
//css
import './Experience.css'
import 'swiper/css'
import 'swiper/css/pagination'
const Experience = (props) => {
    return (
        <div className="experience" id='exp'>
            <div className="e-heading">
                <span>Experiences</span>
                <span
                    style={{ color: props.lightMode ? '' : '#e9e7c6' }}
                >Throughout my career, I have honed my ability to work collaboratively with teams and solve work problems in an efficient and effective manner. This has enabled me to consistently meet customer needs and exceed their expectations, bringing joy to their experience.</span>
                {/* <div className="blur e-blur1"></div> */}
                <div className="blur e-blur2"></div>
            </div>
            {/* slider */}
            <Swiper
                modules={[Pagination]}
                slidesPerView={1}
                pagination={{ clickable: true }}
            >
                {experiences.map((exp, idx) => (
                    <SwiperSlide key={idx}
                    >
                        <div className="exp-box">
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