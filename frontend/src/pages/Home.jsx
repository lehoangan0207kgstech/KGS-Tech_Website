import React from "react";
import { useTranslation } from "react-i18next";
import PageDownUp from '../components/PageDownUp';
import BlogComponent from "../components/BlogComponent";
import WhyChoose from "../components/WhyComponent";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { FaHandshake, FaCogs, FaProjectDiagram, FaClipboardCheck } from "react-icons/fa";
import { motion } from "framer-motion"; // Import Framer Motion

const Home = () => {
    const { t, i18n } = useTranslation();

    const features = [
        {
            description: t("features.strategicPartner"),
            icon: <FaHandshake size={40} className="text-white" />,
            image: "https://images.spiceworks.com/wp-content/uploads/2021/12/14163643/working_culture_is_the_part_of_business_success_5d8cd5099e53a.jpg",
            bgColor: "bg-cover bg-center",
        },
        {
            description: t("features.comprehensiveSolutions"),
            icon: <FaCogs size={40} className="text-white" />,
            image: "https://www.companybug.com/wp-content/uploads/2019/05/pexels-photo-1153213.jpeg",
            bgColor: "bg-cover bg-center",
        },
        {
            description: t("features.internationalWorkflow"),
            icon: <FaClipboardCheck size={40} className="text-white" />,
            image: "https://smallbizclub.com/wp-content/uploads/2020/06/bigstock-Group-Of-Professional-Business-349068817.jpg",
            bgColor: "bg-cover bg-center",
        },
        {
            description: t("features.largeProjects"),
            icon: <FaProjectDiagram size={40} className="text-white" />,
            image: "https://purisconsulting.com/wp-content/uploads/2019/01/Company-Branding_team-work.png",
            bgColor: "bg-cover bg-center",
        },
    ];

    return (
        <motion.div
            className="bg-gray-50 min-h-screen"
            initial={{ opacity: 0 }} // Bắt đầu animation
            animate={{ opacity: 1 }} // Khi xuất hiện
            exit={{ opacity: 0 }} // Khi biến mất
            transition={{ duration: 0.5 }} // Thời gian hiệu ứng
        >
            {/* Banner Section */}
            <motion.div
                className="relative w-full h-[95vh] bg-cover bg-top"
                style={{
                    backgroundImage:
                        "url('https://res.cloudinary.com/kgstech/image/upload/v1736305532/full-shot-smiley-people-work-min_vae5yg.jpg')",
                }}
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7 }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                {/* Main Content */}
                <div className="relative z-10 flex flex-col items-start justify-center h-full pl-10 md:pl-20 text-white">
                    <motion.h1
                        className="text-4xl md:text-6xl font-bold mb-4"
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        KGS TECH
                    </motion.h1>
                    <motion.p
                        className="text-lg md:text-2xl mb-6"
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                    >
                        {t("banner.description")}
                    </motion.p>

                    {/* Button */}
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.7, delay: 0.6 }}
                    >
                        <Link to="/company">
                            <button className="flex items-center space-x-2 px-6 py-3 bg-secondary text-white font-medium text-lg rounded-lg hover:bg-amber-800">
                                <span>{t("banner.title")}</span>
                            </button>
                        </Link>
                    </motion.div>
                </div>
            </motion.div>

            {/* Scroll Indicator */}
            <PageDownUp sections={["chooseSection", "blogSection"]} label="Roll" icon="⬇" />

            {/* Why Choose Section */}
            <motion.div
                id="chooseSection"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
            >
                <WhyChoose features={features} t={t} />
            </motion.div>

            {/* Blog Section */}
            <motion.div
                id="blogSection"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                viewport={{ once: true }}
            >
                <BlogComponent />
            </motion.div>
        </motion.div>
    );
};

export default Home;
