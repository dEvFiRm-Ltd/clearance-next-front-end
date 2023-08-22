import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

const CountFlashSale = ({ pro, Upper, h }) => {
  const [product, setProduct] = useState(pro);
  const intervalRef = useRef(null);
  const currentDate = new Date();
  useEffect(() => {
    const updateTimers = () => {
      const currentDate = new Date();

      const date = new Date(pro?.flash_deal_details?.end_date);
      const remainingTime = date.getTime() - currentDate.getTime();

      if (remainingTime > 0) {
        const remainingSeconds = Math.floor(remainingTime / 1000);
        const remainingMinutes = Math.floor(remainingSeconds / 60);
        const remainingHours = Math.floor(remainingMinutes / 60);
        const remainingDays = Math.floor(remainingHours / 24);

        setProduct({
          days: remainingDays > 9 ? remainingDays : "0" + remainingDays,
          hours:
            remainingHours % 24 > 9
              ? remainingHours % 24
              : "0" + (remainingHours % 24),
          minutes:
            remainingMinutes % 60 > 9
              ? remainingMinutes % 60
              : "0" + (remainingMinutes % 60),
          seconds:
            remainingSeconds % 60 > 9
              ? remainingSeconds % 60
              : "0" + (remainingSeconds % 60),
        });
      } else {
      }
    };

    intervalRef.current = setInterval(updateTimers, 1000);

    // const timer = setTimeout(() => {
    //   updateTimers();
    // }, 1000);
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);
  useEffect(() => {}, [pro?.flash_deal_details?.end_date]);
  const { t, i18n } = useTranslation("translation");
  return Upper ? (
    <div
      className={`z-10 bg-[#fabe32] items-center ProductTagstyle-sc-8t39ll-0 idnvmM items-center truncate ${
        h === 0 ? "" : "h-[40px]"
      } text-black opacity-[0.7]`}
    >
      <div className="contents justify-between truncate">
        {h === 0 ? (
          ""
        ) : (
          <div className="flex space-x-4 justify-start max-left font-[700]">
            {t("main.flash_sale")}
          </div>
        )}
        <div className="flex space-x-4 justify-end max-right font-[700]">
          Ends In: {product?.days}d : {product?.hours}h : {product?.minutes}m :
          {product?.seconds}s
        </div>
      </div>
    </div>
  ) : (
    <div className={`ProductTagstyle-sc-8t39ll-0 idnvmM items-center truncate`}>
      <div className="contents justify-between truncate">
        <div className="flex space-x-4 justify-start max-left">
          {t("main.ends_in")}:
        </div>
        <div className="flex space-x-4 justify-end max-right">
          {product?.days}d : {product?.hours}h : {product?.minutes}m :
          {product?.seconds}s
        </div>
      </div>
    </div>
  );
};
export default CountFlashSale;
