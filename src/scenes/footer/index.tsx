import Logo from "@/assets/LogoName.png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo}  className="w-1/6" />
          <p className="my-5">
          PETNOW là cửa hàng thú cưng hàng đầu, cung cấp thức ăn, phụ kiện và dịch vụ chăm sóc chuyên nghiệp. Đội ngũ nhân viên tận tâm của chúng tôi luôn sẵn sàng mang đến cho thú cưng của bạn sự chăm sóc tốt nhất và sản phẩm chất lượng. Hãy đến với PETNOW để trải nghiệm dịch vụ tuyệt vời!
          </p>
          <p>© PetShop Sẽ Không Làm Bạn Thất Vọng.</p>
        </div>
        <div className="m-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Liên kết nhanh</h4>
          <p className="my-5">Trang chủ</p>
          <p className="my-5">Các bé</p>
          <p>Dịch vụ</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Thông tin liên hệ</h4>
          <p className="my-5">Email: contact@petshop.com</p>
          <p>Số điện thoại: 012 345 679</p>
          <p>(333)425-6825</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
