import { SelectedPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const removeVietnameseTones = (str: string) => {
  return str
    .normalize("NFD") //tách các ký tự có dấu và phần dấu riêng biệt
    .replace(/[\u0300-\u036f]/g, "") // Loại bỏ dấu thanh
    .replace(/ơ/g, "o") // thay the
    .replace(/ê/g, "e") 
};

const Linkk = ({ page, selectedPage, setSelectedPage }: Props) => {
  // chuyen toan bo chu hoa sang chu thuong, loai bo khoan trang, ép kieu gtri nhan duoc
  const lowerCasePage = removeVietnameseTones(page.toLowerCase().replace(/ /g, "")) as SelectedPage;
console.log("lowerCasePage: ", lowerCasePage); 
  return (
    <AnchorLink
      className={`${selectedPage === lowerCasePage ? "text-primary-500" : ""}
        transition duration-500 hover:text-primary-300
      `}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
};

export default Linkk;
