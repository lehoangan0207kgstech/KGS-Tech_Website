import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const BlogComponent = () => {
  const { t } = useTranslation();

  const blogs = [
    {
      id: 1,
      image:
        "https://www.advisorpedia.com/media/2017/10/5-major-advantages-of-employees-working-from-the-office.jpg",
      title: "Thông Báo Tạm Ngưng Một Số Dịch Vụ Do Bảo Trì Hệ Thống",
      description:
        "Để nâng cao chất lượng dịch vụ, chúng tôi sẽ tiến hành bảo trì một số hệ thống quan trọng. Các dịch vụ bị ảnh hưởng bao gồm quản lý cơ sở dữ liệu và dịch vụ lưu trữ đám mây.",
    },
    {
      id: 2,
      image: "https://c.stocksy.com/a/MbO300/z9/809556.jpg",
      title: "Bảo Mật Thông Tin: Tại Sao Bạn Cần Một Tường Lửa Tốt?",
      description:
        "Trong thời đại số hóa, bảo mật thông tin là yếu tố sống còn. Một hệ thống tường lửa tốt không chỉ bảo vệ dữ liệu mà còn nâng cao hiệu suất hệ thống.",
    },
    {
      id: 3,
      image:
        "https://res.cloudinary.com/momentum-media-group-pty-ltd/image/upload/v1655714496/MyBusiness/new_articleimage/employees-office-myb.jpg",
      title: "Phát Triển Web: Xu Hướng Công Nghệ Nổi Bật 2025",
      description:
        "Năm 2025, các xu hướng như AI, ứng dụng web tiến tiến (PWA) và công nghệ không máy chủ sẽ thay đổi cách chúng ta phát triển ứng dụng web.",
    },
    {
      id: 4,
      image:
        "https://th.bing.com/th/id/OIP.rm8qRvfsjSx6TrI-cdFqAQAAAA?w=417&h=626&rs=1&pid=ImgDetMain",
      title: "Lập Trình Python: Những Thư Viện Hữu Ích Mà Bạn Cần Biết",
      description:
        "Python không chỉ mạnh mẽ mà còn có cộng đồng thư viện phong phú. Cùng khám phá những thư viện giúp bạn tối ưu hóa công việc lập trình hàng ngày.",
    },
  ];

  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-accent text-center mb-8">
          {t("blog.title")}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition flex flex-col"
            >
              <Link to={`/blog/${blog.id}`} className="block">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 flex-grow">
                  <h3 className="font-bold text-lg mb-2">{blog.title}</h3>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                    {blog.description}
                  </p>
                </div>
              </Link>
              <div className="p-4 mt-auto">
                <Link
                  to={`/blog/${blog.id}`}
                  className="text-secondary hover:underline font-medium text-sm"
                >
                  {t("blog.readMore", "Đọc thêm")}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogComponent;
