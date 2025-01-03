import React from "react";
import Slider from "react-slick";
import { useTranslation } from "react-i18next";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BlogSection = () => {
    const { t } = useTranslation();
    
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const blogPosts = t("blog.posts", { returnObjects: true });

    return (
        <div id="blogSection" className="container mx-auto py-16 px-4">
            <h2 className="text-3xl font-extrabold text-center text-accent mb-8">
                {t("blog.title")}
            </h2>
            <Slider {...sliderSettings}>
                {blogPosts.map((post, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-lg shadow-md overflow-hidden"
                    >
                        <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="text-lg font-bold mb-2 truncate" title={post.title}>
                                {post.title}
                            </h3>
                            <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                            <p
                                className="text-sm text-gray-700 overflow-hidden"
                                style={{
                                    display: "-webkit-box",
                                    WebkitLineClamp: 2,
                                    WebkitBoxOrient: "vertical",
                                }}
                            >
                                {post.description}
                            </p>
                            <button className="mt-4 text-blue-600 hover:underline">
                                {t("blog.readMore")}
                            </button>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default BlogSection;
