import React from "react";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaHandshake, FaCogs, FaProjectDiagram, FaClipboardCheck } from "react-icons/fa";

const Home = () => {
    const { t, i18n } = useTranslation();

    // const features = [
    //     {
    //         icon: <FaHandshake size={40} className="text-secondary" />,
    //         title: t("features.strategicPartner"),
    //     },
    //     {
    //         icon: <FaCogs size={40} className="text-secondary" />,
    //         title: t("features.comprehensiveSolutions"),
    //     },
    //     {
    //         icon: <FaClipboardCheck size={40} className="text-secondary" />,
    //         title: t("features.internationalWorkflow"),
    //     },
    //     {
    //         icon: <FaProjectDiagram size={40} className="text-secondary" />,
    //         title: t("features.largeProjects"),
    //     },
    // ];
    const features = [
        {
            title: t("features.onlineGame"),
            icon: <FaHandshake size={40} className="text-secondary" />,
            image: "https://example.com/online-game.jpg", // Đường dẫn ảnh
            bgColor: "bg-cover bg-center",
        },
        {
            title: "ZALO & AI",
            icon: <FaCogs size={40} className="text-secondary" />,
            image: "https://example.com/fintech.jpg",
            bgColor: "",
        },
        {
            title: t("features.fintech"),
            icon: <FaClipboardCheck size={40} className="text-secondary" />,
            image: "https://example.com/fintech.jpg",
            bgColor: "bg-cover bg-center",
        },
        {
            title: t("features.digitalTransformation"),
            icon: <FaProjectDiagram size={40} className="text-secondary" />,
            image: "https://example.com/digital-transformation.jpg",
            bgColor: "bg-cover bg-center",
        },
    ];

    const blogPosts = [
        {
            title: "Cảnh sắc hoa anh đào",
            date: "2024-12-30",
            description:
                "Khu rừng hoa anh đào tuyệt đẹp với sắc hồng rực rỡ, biểu tượng nổi bật của mùa xuân Nhật Bản. Cảnh sắc mang đến cảm giác thanh bình, lãng mạn và đầy chất thơ, khiến bất kỳ ai cũng cảm nhận được vẻ đẹp tự nhiên đặc trưng của đất nước Mặt Trời Mọc.",
            image: "https://i.pinimg.com/originals/66/28/db/6628db2d4c6c1e5ed45902ede5b4e241.jpg",
        },
        {
            title: "Núi Phú Sĩ - Nhật Bản",
            date: "2025-01-01",
            description:
                "Núi Phú Sĩ hùng vĩ nằm giữa nền trời xanh thẳm, bao quanh bởi những cánh hoa anh đào nở rộ. Cảnh sắc kết hợp giữa thiên nhiên và kiến trúc truyền thống Nhật Bản, biểu tượng của sự hài hòa và vẻ đẹp bất tận. Đây là một trong những khung cảnh đặc trưng mà du khách không thể bỏ lỡ khi đến Nhật Bản.",
            image: "https://th.bing.com/th/id/R.b07b6766662161a8ad461b6272b9c90e?rik=qeIQrdLmkUH7cw&riu=http%3a%2f%2fwww.jigsaw.jp%2fimg%2fgoods%2fL%2fbev7752451276.jpg&ehk=3qFZARRpbnQUNOtFFWBtFntr0Pl2Lb8KILLjOTElQec%3d&risl=&pid=ImgRaw&r=0",
        },
        {
            title: "Nét đẹp SUMO - Nhật Bản",
            date: "2025-01-02",
            description:
                "Những võ sĩ Sumo Nhật Bản đứng trên sàn đấu, thể hiện tinh thần và văn hóa độc đáo của môn võ truyền thống lâu đời. Đây không chỉ là một môn thể thao, mà còn là niềm tự hào và di sản văn hóa của Nhật Bản, được yêu thích và tôn vinh qua nhiều thế hệ.",
            image: "https://vietsensetravel.com/view/at_sumo-khong-chi-la-vo-ma-con-la-ton-giao_fc07ad483160f1aec7d7e5d55152145b.jpeg",
        },
    ];

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <div className="bg-gray-50 min-h-screen">

            <div className="relative w-full h-[95vh] bg-cover bg-center" style={{ backgroundImage: "url('https://rsdigitalservices.com/er/it%20company.webp')" }}>
                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                {/* Nội dung chính */}
                <div className="relative z-10 flex flex-col items-start justify-center h-full pl-10 md:pl-20 text-white">
                    {/* Tiêu đề */}
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">KGS TECH</h1>
                    <p className="text-lg md:text-2xl mb-6">Technology champion of Vietnam</p>

                    {/* Nút */}
                    <button className="flex items-center space-x-2 px-6 py-3 bg-secondary text-white font-medium text-lg rounded-lg hover:bg-orange-600">
                        <span>{t("about.title")}</span>
                    </button>
                </div>
            </div>

            {/* Why Choose Section */}
            <div className="container mx-auto py-12 px-4">
                <h2 className="text-3xl font-extrabold text-center text-accent mb-8">
                    {t("features.title")}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className={`relative rounded-lg shadow-md h-64 overflow-hidden group transform transition-transform duration-300 hover:scale-105 ${feature.bgColor}`}
                            style={{
                                backgroundImage: feature.bgColor ? `url(${feature.image})` : "",
                            }}
                        >
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-60 transition-all duration-300"></div>

                            {/* Nội dung */}
                            <div className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
                                <h3 className="text-lg font-bold uppercase text-center">
                                    {feature.title}
                                </h3>
                            </div>

                            {/* Ảnh hoặc màu nền */}
                            {feature.bgColor === "" && (
                                <div className={`${feature.image} h-full w-full`}></div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Blog Section */}
            <div className="container mx-auto py-16 px-4">
                <h2 className="text-3xl font-bold text-center mb-8">{t("blog.title")}</h2>
                <Slider {...sliderSettings}>
                    {blogPosts.map((post, index) => (
                        <div
                            key={index}
                            className="bg-white mr-10 rounded-lg shadow-md overflow-hidden"
                        >
                            <img
                                src={post.image}
                                alt={post.title}
                                className="w-full h-48 object-cover"
                            />
                            {/* Nội dung */}
                            <div className="p-4">
                                <h3
                                    className="text-lg font-bold mb-2 truncate"
                                    title={post.title}
                                >
                                    {post.title}
                                </h3>
                                <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                                <p
                                    className="text-sm text-gray-700 overflow-hidden text-ellipsis h-16"
                                    style={{
                                        display: "-webkit-box",
                                        WebkitLineClamp: 2,
                                        WebkitBoxOrient: "vertical",
                                    }}
                                >
                                    {post.description}
                                </p>
                                <button className="mt-4 text-blue-600 hover:underline">
                                    {t("Xem thêm")}
                                </button>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Home;
