import React from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

const BlogDetail = () => {
  const { id } = useParams();
  const { t } = useTranslation();

  // Dữ liệu giả (thay thế bằng API hoặc dữ liệu thật)
  const blogData = {
    title: "Chiến Dịch 'Yêu Thương Là Sẻ Chia'",
    date: "Ngày 18/11/2024",
    content: `Trong cuộc sống hiện đại xô bồ và hối hả, việc ngồi tại cơ quan hay nhà riêng để đặt món không còn gì là quá xa lạ. Thế nhưng, để những ly đồ uống này đến được tay khách hàng, là cả một hành trình đáng trân trọng của đội ngũ giao hàng. Tinh thần sẻ chia, yêu thương luôn là giá trị cốt lõi mà chúng tôi muốn lan tỏa đến cộng đồng. Thông qua chiến dịch "Yêu Thương Là Sẻ Chia", chúng tôi muốn truyền tải thông điệp về sự đồng cảm, đoàn kết và trách nhiệm xã hội.`,
    image:
      "https://phunugioi.com/wp-content/uploads/2020/04/hinh-anh-em-be-de-thuong-ngo-nghinh-dang-yeu.jpg", // Thay bằng URL thật
  };

  return (
    <div className="container mx-auto px-4 py-24">
      <div className="max-w-4xl mx-auto">
        {/* Tiêu đề */}
        <h1 className="text-3xl font-bold mb-4 text-center">
          {blogData.title}
        </h1>

        {/* Ngày đăng */}
        <p className="text-gray-500 text-center mb-6">{blogData.date}</p>

        {/* Hình ảnh */}
        <div className="mb-6">
          <img
            src={blogData.image}
            alt={blogData.title}
            className="w-full rounded-lg shadow-md"
          />
        </div>

        {/* Nội dung bài viết */}
        <div className="text-lg leading-relaxed text-gray-700">
          <p className="mb-4">{blogData.content}</p>
        </div>

        {/* Nút quay lại */}
        <div className="text-center mt-8">
          <button
            onClick={() => window.history.back()}
            className="bg-secondary text-white px-4 py-2 rounded-lg hover:bg-bt_hover transition"
          >
            {t("BlogDetail")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
