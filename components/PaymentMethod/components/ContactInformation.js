import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { ArrowSvgUp, SvgLoader } from "../../svgs";
import PrevAddress from "./PrevAddress";
import FormAddress from "./FormAddress";

const ContactInformation = ({ setAddressId }) => {
  const { t, i18n } = useTranslation("translation");

  const [isOpen, setIsOpen] = useState(true);
  const prevAddresses = useSelector(
    (state) => state.CheckoutReducer?.prevAddresses
  );
  const [selectedAddressId, setSelectedAddressId] = useState(null);

  const handleSelectAddress = (id) => {
    setSelectedAddressId(id);
    setAddressId(id);
  };

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const checked = prevAddresses?.filter((one) => one?.is_default === 1)[0]
      ?.id;
    setSelectedAddressId(checked);
    setAddressId(checked);
    if (prevAddresses?.length > 0) {
      setIsOpen(false);
    }
  }, [prevAddresses]);
  return (
    <div
      className={` transition-height duration-200 ${
        isOpen ? "h-auto" : "min-h-[220px]"
      } indexstyle-eqiam-0 hoGLcc pc-address-info`}
    >
      <div className="indexstyle-sc-172cmbz-0 kmQwZW">
        <div className="pay-title">
          <div className="pay-title-left">
            <span className="pay-panpal-step notranslate">1</span>
            <p className="pay-name">{t("user.contact_information")}</p>
          </div>
          <div className="pay-title-right" />
        </div>
        {prevAddresses?.length > 0 && (
          <div className="pb-5 ">
            <h1 className="text-center w-full font-[600] text-2xl p-2">
              {t("user.select_address")}
            </h1>
            <div className="flex flex-col">
              {prevAddresses?.map((prevAddress, index) => {
                return (
                  <PrevAddress
                    key={index}
                    isSelected={selectedAddressId === prevAddress.id}
                    onSelectAddress={handleSelectAddress}
                    prevAddress={prevAddress}
                    index={index}
                    id={prevAddress.id}
                  />
                );
              })}
            </div>
          </div>
        )}
        <div className="cursor-pointer pay-panpel-content border border-t-0 border-b-[#e7e7e7]">
          <div
            onClick={handleClick}
            className="flex items-center justify-center space-x-5"
          >
            <h1 className="text-center w-full font-[600] text-2xl p-2">
              {prevAddresses?.length > 0
                ? t("user.add_new_address")
                : t("user.add_address")}
            </h1>
            <div className="flex items-center justify-start h-full">
              <ArrowSvgUp rotate={isOpen ? 0 : 180} />
            </div>
          </div>
          <div
            className={` transition-height duration-200 ${
              isOpen ? "h-[620px] block opacity-1" : "h-0 hidden opacity-0"
            }`}
          >
            <FormAddress />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactInformation;
