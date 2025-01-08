import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import PageDownUp from "../components/PageDownUp";

const Blog = () => {
    const { t } = useTranslation();

    const blogPosts = [
        {
            title: "Cách mạng công nghệ 4.0",
            date: "01/01/2025",
            description: "Khám phá cách KGS-Tech đang dẫn đầu trong cuộc cách mạng công nghệ 4.0.",
            image: "https://th.bing.com/th/id/OIP.OQoQytoTUoRYHFyaPX8eBAHaE8?rs=1&pid=ImgDetMain",
            link: "/blog/tech-revolution",
            category: "Công nghệ",
        },
        {
            title: "Sức mạnh của trí tuệ nhân tạo",
            date: "15/12/2024",
            description: "AI không chỉ là xu hướng mà còn là tương lai của công nghệ.",
            image: "https://th.bing.com/th/id/R.8abbfef792896a4577d062bee9ef3fd2?rik=t%2bhUQVctHYqORw&pid=ImgRaw&r=0",
            link: "/blog/ai-power",
            category: "AI",
        },
        {
            title: "Giải pháp phần mềm cho doanh nghiệp",
            date: "10/11/2024",
            description: "Cách các giải pháp của chúng tôi giúp doanh nghiệp tối ưu hóa hoạt động.",
            image: "https://1.bp.blogspot.com/-3a0X38ejFqg/Xl-6dm_6EOI/AAAAAAAAFgI/aY0rOId7zAsUliQpOKpTXrZMcpnY1Z8wACLcBGAsYHQ/w1200-h630-p-k-no-nu/RYZYKO-ICT-AdobeStock_243619030-WrightStudio.jpg",
            link: "/blog/software-solutions",
            category: "Phần mềm",
        },
        {
            title: "Xu hướng công nghệ blockchain 2025",
            date: "05/01/2025",
            description: "Blockchain đang thay đổi cách chúng ta giao dịch và bảo mật dữ liệu như thế nào.",
            image: "https://external-preview.redd.it/state-of-the-service-yet-again-tech-and-digital-top-aps-v0-W6dPzVOXfCrOWRAPlEzXQkfDdHbF2IUdnhXTHa5hCeY.jpg?auto=webp&s=fe165a0f87c7f4ad7e9c8fadf465490a355cdb48",
            link: "/blog/blockchain-trends",
            category: "Công nghệ",
        },
        {
            title: "Phần mềm quản lý dự án hiệu quả",
            date: "20/12/2024",
            description: "Các công cụ giúp bạn quản lý dự án dễ dàng hơn bao giờ hết.",
            image: "https://ascendata.com/assets/img/staff.jpg",
            link: "/blog/project-management-software",
            category: "Phần mềm",
        },
        {
            title: "IoT và cuộc sống thông minh",
            date: "08/12/2024",
            description: "Internet of Things (IoT) đang thay đổi cách chúng ta sống và làm việc.",
            image: "https://purisconsulting.com/wp-content/uploads/2019/01/Company-Branding_team-work.png",
            link: "/blog/iot-smart-living",
            category: "Công nghệ",
        },
        {
            title: "Ứng dụng AI trong chăm sóc sức khỏe",
            date: "01/12/2024",
            description: "Khám phá cách AI đang cải tiến ngành y tế và sức khỏe cộng đồng.",
            image: "https://th.bing.com/th/id/R.e1685bc3bb6b2f067ad081e61729a1e5?rik=kGb%2bz1uRRYwFPw&pid=ImgRaw&r=0",
            link: "/blog/ai-healthcare",
            category: "AI",
        },
        {
            title: "Cybersecurity: Bảo vệ doanh nghiệp của bạn",
            date: "25/11/2024",
            description: "Những chiến lược hàng đầu để bảo mật thông tin trong thời đại số.",
            image: "https://i.pinimg.com/originals/9f/44/de/9f44ded4f7c619c2c3ddd6e14778d5c4.jpg",
            link: "/blog/cybersecurity-tips",
            category: "Công nghệ",
        },
        {
            title: "Tự động hóa doanh nghiệp với RPA",
            date: "15/11/2024",
            description: "RPA đang giúp doanh nghiệp tự động hóa quy trình như thế nào?",
            image: "https://www.mindinventory.com/blog/wp-content/uploads/2023/11/RPA-for-enterprises.webp",
            link: "/blog/rpa-automation",
            category: "Phần mềm",
        },
        
    ];

    const [selectedCategory, setSelectedCategory] = useState("Tất cả");

    // Lấy danh sách các nhãn duy nhất
    const categories = ["Tất cả", ...new Set(blogPosts.map(post => post.category))];

    // Lọc bài blog theo nhãn
    const filteredPosts = selectedCategory === "Tất cả"
        ? blogPosts
        : blogPosts.filter(post => post.category === selectedCategory);

    return (
        <div className="bg-gray-100 min-h-screen py-40 px-6">
            <div className="container mx-auto max-w-7xl">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-extrabold text-secondary mb-4">
                        {t("blog.title")}
                    </h1>
                    <p className="text-lg text-gray-600">
                        {t("blog.description", "Nơi chia sẻ những kiến thức và xu hướng công nghệ mới nhất.")}
                    </p>
                </div>

                {/* Categories */}
                <div className="flex justify-center space-x-4 mb-8">
                    {categories.map((category, index) => (
                        <button
                            key={index}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-4 py-2 rounded ${
                                selectedCategory === category
                                    ? "bg-secondary text-white"
                                    : "bg-white text-gray-700 border"
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <PageDownUp sections={["frame"]} />

                {/* Blog Posts Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredPosts.map((post, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition"
                        >
                            <img
                                src={post.image}
                                alt={post.title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h2 className="text-xl font-bold text-gray-800 mb-2">{post.title}</h2>
                                <p className="text-sm text-gray-500 mb-4">{post.date}</p>
                                <p className="text-gray-600 mb-4">{post.description}</p>
                                <a
                                    href={post.link}
                                    className="text-secondary font-semibold hover:underline"
                                >
                                    {t("blog.readMore", "Đọc thêm")}
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
                <div id="frame"></div>
            </div>
        </div>
    );
};

export default Blog;
