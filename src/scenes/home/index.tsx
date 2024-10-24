import useMediaQuery from "@/hooks/useMediaQuery";
import { SelectedPage } from "@/shared/types";
import ActionButton from "@/shared/ActionButton";
import Text from "@/assets/textHome.png";
import Pet from "@/assets/pet.png";
import Category1 from "@/assets/category1.png";
import Category2 from "@/assets/category2.png";
import Category3 from "@/assets/category3.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";
import OurClasses from "@/scenes/ourClasses";
import Benefits from "@/scenes/benefits";
import ContactUs from "@/scenes/contactUs";
import Footer from "@/scenes/footer";
import Product from "@/scenes/product";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  return (
    <section id="home" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
      {/* IMAGE AND MAIN HEADER */}
      <motion.div
        className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        {/* MAIN HEADER */}
        <div className="z-10 mt-32 md:basis-3/5">
          {/* HEADINGS */}
          <motion.div
            className="md:-mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1]">
                <img alt="home-page-text" src={Text} className="w-1/3 h-auto"/>
              </div>
            </div>

            <p className="mt-8 text-sm">
              Hệ thống cửa hàng thú cưng hàng đầu Việt Nam. Cung cấp thú cảnh,
              thức ăn, phụ kiện và dịch vụ dành cho thú cưng.
            </p>
          </motion.div>

          {/* ACTIONS */}
          <motion.div
            className="mt-8 flex items-center gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <ActionButton setSelectedPage={setSelectedPage}>
              Đặt Hàng Ngay
            </ActionButton>
            <AnchorLink
              className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
              onClick={() => setSelectedPage(SelectedPage.ContactUs)}
              href={`#${SelectedPage.ContactUs}`}
            >
              <p>Tư Vấn</p>
            </AnchorLink>
          </motion.div>
        </div>

        {/* IMAGE */}
        <div
          className="flex basis-3/5 justify-center md:z-10
              md:ml-40 md:mt-16 md:justify-items-end"
        >
          <img alt="home-pageGraphic" src={Pet} />
        </div>
      </motion.div>

      {/* SPONSORS */}
      {isAboveMediumScreens && (
      <div className="w-full bg-primary-100 ">
      <div className="mx-auto w-5/6">
        <div className="flex w-3/5 items-center justify-between h-24 p-4 ">
          <img alt="category1" src={Category1} className="w-1/5 h-full object-contain" />
          <img alt="category2" src={Category2} className="w-1/5 h-full object-contain" />
          <img alt="category3" src={Category3} className="w-1/5 h-full object-contain" />
        </div>
      </div>

    </div>    
      )}
      {/* các thành phần khác  */}
      <div className="pt-10">
        <Product />
      </div>
      <div className="">
        <Benefits setSelectedPage={setSelectedPage} />
      </div>
      <div className="">
        <OurClasses setSelectedPage={setSelectedPage} />
      </div>
      <div className="">
        <ContactUs setSelectedPage={setSelectedPage} />
      </div>
      <Footer />
    </section>
  );
};

export default Home;
