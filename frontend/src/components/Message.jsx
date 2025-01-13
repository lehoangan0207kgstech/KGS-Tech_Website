import React from "react";

const Message = () => {
  return (
    <div className="bg-white py-16 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Phần nội dung thông điệp */}
        <div className="text-gray-800">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-4">
            THÔNG ĐIỆP
          </h2>
          <p className="italic text-lg text-center text-gray-600 mb-6">
            Lời chào từ KGS Tech
          </p>
          <blockquote className="text-xl text-accent font-semibold mb-6">
            "Mang những giá trị nguyên bản đến với mọi người và xây dựng một
            tương lai bền vững, khởi nguồn từ thiên nhiên."
          </blockquote>
          <p className="text-gray-600 leading-relaxed mb-4">
            Tại KGS Tech, chúng tôi luôn trân trọng những giá trị truyền thống
            kết hợp với công nghệ hiện đại để tạo nên những sản phẩm thủ công
            độc đáo, đặc biệt là dòng sản phẩm trà Ô Long và các đặc sản nổi bật
            khác từ Đà Lạt. Sứ mệnh của chúng tôi không chỉ dừng lại ở việc tạo
            ra sản phẩm chất lượng, mà còn là sự cam kết đối với cộng đồng và
            môi trường.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Với đội ngũ giàu kinh nghiệm và lòng đam mê, KGS Tech mong muốn cùng
            bạn viết tiếp câu chuyện đầy cảm hứng về những giá trị nguyên bản và
            truyền thống lâu đời của Việt Nam, mang những nốt hương tinh túy ra
            thế giới.
          </p>
          <p className="text-gray-800 text-left font-semibold mt-11">
            Trân trọng, <br />
            Nguyễn Văn A <br />
            Giám đốc điều hành, KGS Tech
          </p>
        </div>

        {/* Phần hình ảnh */}
        <div className="flex justify-center">
          <img
            src="https://img.freepik.com/free-photo/confident-male-mature-lawyer-sitting-office_23-2147898674.jpg?t=st=1736739597~exp=1736743197~hmac=359039da650f3274973788038db608b7f46adc363537d9818fc9027f22f9c1cd&w=740"
            alt="Giám đốc điều hành KGS Tech"
            className="rounded-lg shadow-md object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Message;
