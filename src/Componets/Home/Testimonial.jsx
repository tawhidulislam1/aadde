import { Link } from "react-router-dom";
import { testimonialsData } from "../../assets/Data/testimonialsData";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Testimonial = () => {
    return (
        <section id="testimonials" className="mt-24">
            {/* Heading */}
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center">Hear from our customers</h2>
            </div>

            {/* Swiper Section */}
            <div className="w-full max-w-7xl px-5 mx-auto mt-16 overflow-visible">
                <Swiper
                    modules={[Pagination, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 3000 }}
                    breakpoints={{
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                >
                    {testimonialsData.map(({ id, image, content, name }) => (
                        <SwiperSlide key={id}>
                            <div className="flex flex-col items-center p-6 space-y-6 pt-14 bg-white rounded-lg shadow-lg text-center h-full">
                                <img
                                    src={image}
                                    alt={name}
                                    className="w-16 h-16 object-cover rounded-full -mt-10 border-4 border-white shadow-md"
                                />
                                <h5 className="text-lg font-semibold">{name}</h5>
                                <p className="text-sm text-gray-600">{content}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Button */}
                <div className="my-16 text-center">
                    <Link
                        to="#"
                        className="inline-block p-3 px-6 pt-2 text-white bg-blue-500 rounded-full hover:bg-blue-400 transition"
                    >
                        Get Started
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Testimonial;
