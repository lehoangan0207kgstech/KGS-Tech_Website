import React from "react";
import { useTranslation } from "react-i18next";
import PageDownUp from '../components/PageDownUp';

const Blog = () => {
    const { t } = useTranslation();

    const blogPosts = [
        {
            title: "Cách mạng công nghệ 4.0",
            date: "01/01/2025",
            description: "Khám phá cách KGS-Tech đang dẫn đầu trong cuộc cách mạng công nghệ 4.0.",
            image: "https://th.bing.com/th/id/OIP.OQoQytoTUoRYHFyaPX8eBAHaE8?rs=1&pid=ImgDetMain",
            link: "/blog/tech-revolution",
        },
        {
            title: "Sức mạnh của trí tuệ nhân tạo",
            date: "15/12/2024",
            description: "AI không chỉ là xu hướng mà còn là tương lai của công nghệ.",
            image: "https://th.bing.com/th/id/R.8abbfef792896a4577d062bee9ef3fd2?rik=t%2bhUQVctHYqORw&pid=ImgRaw&r=0",
            link: "/blog/ai-power",
        },
        {
            title: "Giải pháp phần mềm cho doanh nghiệp",
            date: "10/11/2024",
            description: "Cách các giải pháp của chúng tôi giúp doanh nghiệp tối ưu hóa hoạt động.",
            image: "https://1.bp.blogspot.com/-3a0X38ejFqg/Xl-6dm_6EOI/AAAAAAAAFgI/aY0rOId7zAsUliQpOKpTXrZMcpnY1Z8wACLcBGAsYHQ/w1200-h630-p-k-no-nu/RYZYKO-ICT-AdobeStock_243619030-WrightStudio.jpg",
            link: "/blog/software-solutions",
        },
        {
            title: "Giải pháp phần mềm cho doanh nghiệp",
            date: "10/11/2024",
            description: "Cách các giải pháp của chúng tôi giúp doanh nghiệp tối ưu hóa hoạt động.",
            image: "https://1.bp.blogspot.com/-3a0X38ejFqg/Xl-6dm_6EOI/AAAAAAAAFgI/aY0rOId7zAsUliQpOKpTXrZMcpnY1Z8wACLcBGAsYHQ/w1200-h630-p-k-no-nu/RYZYKO-ICT-AdobeStock_243619030-WrightStudio.jpg",
            link: "/blog/software-solutions",
        },
        {
            title: "Cách mạng công nghệ 4.0",
            date: "01/01/2025",
            description: "Khám phá cách KGS-Tech đang dẫn đầu trong cuộc cách mạng công nghệ 4.0.",
            image: "https://th.bing.com/th/id/OIP.OQoQytoTUoRYHFyaPX8eBAHaE8?rs=1&pid=ImgDetMain",
            link: "/blog/tech-revolution",
        },
        {
            title: "Sức mạnh của trí tuệ nhân tạo",
            date: "15/12/2024",
            description: "AI không chỉ là xu hướng mà còn là tương lai của công nghệ.",
            image: "https://th.bing.com/th/id/R.8abbfef792896a4577d062bee9ef3fd2?rik=t%2bhUQVctHYqORw&pid=ImgRaw&r=0",
            link: "/blog/ai-power",
        },
        {
            title: "Cách mạng công nghệ 4.0",
            date: "01/01/2025",
            description: "Khám phá cách KGS-Tech đang dẫn đầu trong cuộc cách mạng công nghệ 4.0.",
            image: "https://th.bing.com/th/id/OIP.OQoQytoTUoRYHFyaPX8eBAHaE8?rs=1&pid=ImgDetMain",
            link: "/blog/tech-revolution",
        },
        {
            title: "Sức mạnh của trí tuệ nhân tạo",
            date: "15/12/2024",
            description: "AI không chỉ là xu hướng mà còn là tương lai của công nghệ.",
            image: "https://th.bing.com/th/id/R.8abbfef792896a4577d062bee9ef3fd2?rik=t%2bhUQVctHYqORw&pid=ImgRaw&r=0",
            link: "/blog/ai-power",
        },
        {
            title: "Giải pháp phần mềm cho doanh nghiệp",
            date: "10/11/2024",
            description: "Cách các giải pháp của chúng tôi giúp doanh nghiệp tối ưu hóa hoạt động.",
            image: "https://1.bp.blogspot.com/-3a0X38ejFqg/Xl-6dm_6EOI/AAAAAAAAFgI/aY0rOId7zAsUliQpOKpTXrZMcpnY1Z8wACLcBGAsYHQ/w1200-h630-p-k-no-nu/RYZYKO-ICT-AdobeStock_243619030-WrightStudio.jpg",
            link: "/blog/software-solutions",
        },
        {
            title: "Giải pháp phần mềm cho doanh nghiệp",
            date: "10/11/2024",
            description: "Cách các giải pháp của chúng tôi giúp doanh nghiệp tối ưu hóa hoạt động.",
            image: "https://1.bp.blogspot.com/-3a0X38ejFqg/Xl-6dm_6EOI/AAAAAAAAFgI/aY0rOId7zAsUliQpOKpTXrZMcpnY1Z8wACLcBGAsYHQ/w1200-h630-p-k-no-nu/RYZYKO-ICT-AdobeStock_243619030-WrightStudio.jpg",
            link: "/blog/software-solutions",
        },
        {
            title: "Cách mạng công nghệ 4.0",
            date: "01/01/2025",
            description: "Khám phá cách KGS-Tech đang dẫn đầu trong cuộc cách mạng công nghệ 4.0.",
            image: "https://th.bing.com/th/id/OIP.OQoQytoTUoRYHFyaPX8eBAHaE8?rs=1&pid=ImgDetMain",
            link: "/blog/tech-revolution",
        },
        {
            title: "Sức mạnh của trí tuệ nhân tạo",
            date: "15/12/2024",
            description: "AI không chỉ là xu hướng mà còn là tương lai của công nghệ.",
            image: "https://th.bing.com/th/id/R.8abbfef792896a4577d062bee9ef3fd2?rik=t%2bhUQVctHYqORw&pid=ImgRaw&r=0",
            link: "/blog/ai-power",
        },
    ];

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
                <PageDownUp sections={["frame"]}/>
                {/* Blog Posts Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post, index) => (
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
                </div >
                <div id="frame"></div>
            </div>
        </div>
    );
};

export default Blog;
