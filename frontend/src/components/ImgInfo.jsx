import React from "react";
import { useTranslation } from "react-i18next";

const ImgInfo = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-white py-16 px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-center text-accent mb-12">
          {t("ImgInfo.title")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center font-beVietnam">
          {/* Text 1 */}
          <div className="order-2 md:order-1">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              CÂU CHUYỆN THƯƠNG HIỆU
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Nốt Hương Đặc Sản – KGS Tech luôn trân quý, nâng niu những giá trị
              Nguyên Bản ở mỗi vùng đất mà chúng tôi đi qua, nơi tâm hồn được
              đồng điệu với thiên nhiên, với nỗi vất vả nhọc nhằn của người nông
              dân; cảm nhận được hết thảy những tầng hương ẩn sâu trong từng
              nguyên liệu. Một chặng đường dài đang chờ phía trước, KGS Tech đã
              sẵn sàng viết tiếp câu chuyện Nốt Hương Đặc Sản – Nguyên Bản – Thủ
              Công đầy cảm hứng và càng tự hào hơn khi được mang sứ mệnh: "Đánh
              thức những nốt hương đặc...
            </p>
          </div>

          {/* Image */}
          <div className="flex justify-center order-1 md:order-2">
            <img
              src="https://img.freepik.com/free-photo/designers-showing-project-presentation-leader_74855-9780.jpg?t=st=1736735128~exp=1736738728~hmac=680bcdcdc76abeb5b5c84cf2380c0fc46320ea1ae9bd1430d28d4e5ee7490a08&w=1380"
              alt="Câu chuyện thương hiệu"
              className="rounded-lg shadow-md h-[500px] object-cover"
            />
          </div>

          {/* Text 2 */}
          <div className="order-3">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              NGUYÊN LIỆU ĐẶC SẢN
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Trà Ô Long đặc sản tại KGS Tech còn được ươm trồng với phương pháp
              chăm bón hữu cơ, hoàn toàn với trứng gà, đậu nành và thu hái thủ
              công để có được những búp trà tươi và non nhất, tạo nên điểm khác
              biệt mạnh mẽ so với các thương hiệu khác. Có thể nói, dòng trà đặc
              sản của KGS Tech luôn giữ được hương vị thơm ngon nguyên bản nhất
              và được nhiều người biết đến như một nguồn nguyên liệu tinh hoa
              của Đà Lạt.
            </p>
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <button className="bg-secondary text-white py-2 px-6 rounded hover:bg-bt_hover transition">
            {t("ImgInfo.readmore")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImgInfo;
