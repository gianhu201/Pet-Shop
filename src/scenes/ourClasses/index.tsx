import { SelectedPage, ClassType } from "@/shared/types";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import Class from "./Class";

const classes: Array<ClassType> = [
  {
    name: "Đào tạo thú cưng",
    description:
      "Các khóa học đào tạo giúp thú cưng phát triển kỹ năng và hành vi tốt.",
    image: image1,
  },
  {
    name: "Dịch vụ ăn uống",
    description:
      "Cung cấp chế độ ăn uống đầy đủ và khoa học cho thú cưng của bạn, đảm bảo chúng nhận đủ dinh dưỡng cần thiết",
    image: image5,
  },
  {
    name: "Chăm sóc thú cưng",
    description:
      "Dịch vụ chăm sóc hàng ngày cho thú cưng của bạn, bao gồm ăn uống, đi dạo và chơi đùa.",
    image: image3,
  },
  {
    name: "Khách sạn thú cưng",
    description:
      "Cung cấp chỗ ở an toàn và thoải mái cho thú cưng khi bạn không có thời gian chăm sóc.",
    image: image4,
  },
  {
    name: "Dịch vụ vận chuyển thú cưng",
    image: image2,
  },
  {
    name: "Dịch vụ thú y",
    description:
      "Các khóa học đào tạo giúp thú cưng phát triển kỹ năng và hành vi tốt.",
    image: image6,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-14">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item: ClassType, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;
