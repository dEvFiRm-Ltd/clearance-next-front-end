import React, {
  createRef,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { SvgCheckbox } from "@/components/svgs";
import Slider from "rc-slider";
import { useDispatch, useSelector } from "react-redux";
import { log } from "next/dist/server/typescript/utils";
import { XSvg } from "../../svgs";
import { useTranslation } from "react-i18next";

const Attributes = {
  attributes: [{ id: 1, name: "size", options: ["s", "m", "l"] }],
  brands: [{ id: 1, name: "Pull & Bear" }],

  prices: [
    {
      min_price: "end",
      max_price: 799,
      text: "Less than 799",
    },
    {
      min_price: 799,
      max_price: 1596,
      text: "799 - 1596",
    },
    {
      min_price: 1596,
      max_price: 2393,
      text: "1596 - 2393",
    },
  ],
};
const data = [
  {
    name: "Color",
    attributes: ["Red", "BLue", "Black", "Green", "White"],
    viewMore: true,
  },
  {
    name: "Size",
    attributes: ["S", "M", "L", "XL", "XXL", "XXXL"],
    viewMore: true,
  },
  {
    name: "Pattern",
    attributes: ["Striped", "Geometric", "Floral", "Polka Dots"],
    viewMore: true,
  },
  {
    name: "Style",
    attributes: ["Vintage", "Casual", "Vacation", "Urban"],
    viewMore: true,
  },
  {
    name: "Price",
    slider: true,
    attributes: [],
    viewMore: false,
  },
];
const FilterDashboard = ({
  collections,
  Products,
  setFilteredItems,
  removeFromFilter,
  setFinalFilteredItems,
}) => {
  const { t, i18n } = useTranslation("translation");
  const dispatch = useDispatch();
  const [click, setClick] = useState(false);
  const [click1, setClick1] = useState(false);
  const [pagination, setPagination] = useState({
    Sizes: 10,
    Brands: 10,
    Prices: 10,
  });
  const attributes = useSelector((state) => state.ProductReducer.Products);
  const sync = useSelector((store) => store.ProductReducer.sync);

  const [attributesArray, setAttributesArray] = useState([]);
  const [filterItems, setFilterItems] = useState({});
  const [syncItem, setSyncItem] = useState(false);
  const [Item, setItem] = useState(null);
  const [rangeValue, setRangeValue] = useState([0, 40]);

  const parentRef = useRef(null);
  // {{*Start*  UseRef for parent attributes (color, size, ....  ) **}}
  const getSizeOptions = (attri) => {
    return (
      (attri?.attributes?.length > 0 &&
        attri?.attributes[0]?.options?.map((size) => {
          return { key: size, value: size };
        })) ||
      []
    );
  };

  const getBrandName = (attri) => {
    return (
      attri?.brands?.map((brand) => {
        return { key: brand?.name, value: brand?.id };
      }) || []
    );
  };

  const getPriceRanges = (attri) => {
    return (
      attri?.prices?.map((price) => {
        return {
          key: price?.text,
          value: `${price?.min_price}-${price?.max_price}`,
        };
      }) || []
    );
  };

  const _mergeAttributes = (sizeOptions, brandName, priceRanges) => {
    const mergedAttributes = [
      { label: t("filter.sizes"), name: "Sizes", attributes: sizeOptions },
      { label: t("filter.brands"), name: "Brands", attributes: brandName },
      { label: t("filter.prices"), name: "Prices", attributes: priceRanges },
    ];
    setAttributesArray(mergedAttributes);
  };

  const getAttributesArrays = useCallback((attri) => {
    const sizeOptions = getSizeOptions(attri);
    const brandName = getBrandName(attri);
    const priceRanges = getPriceRanges(attri);
    _mergeAttributes(sizeOptions, brandName, priceRanges);
  }, []);
  useEffect(() => {
    if (attributes) {
      getAttributesArrays(attributes);
    }
  }, [getAttributesArrays, attributes]);

  const inputRefs = useMemo(
    () =>
      Array(attributesArray.length)
        .fill(0)
        .map((i) => React.createRef()),
    [attributesArray]
  );
  useEffect(() => {}, [attributesArray]);

  const handleExpand = (index) => {
    inputRefs[index].current = !inputRefs[index].current;
    setClick1(!click1);
  };

  // {{*End*  UseRef for parent attributes (color, size, ....  ) **}}

  // {{*Start*  UseRef for Child attributes (red, XXL, ....  ) **}}

  const checkRefs = useMemo(() => {
    if (attributesArray?.length > 0) {
      return attributesArray.map((item, index) => {
        inputRefs[index].current = inputRefs[index].current || createRef();
        return {
          attributes: Array(item.attributes.length)
            .fill(0)
            .map((i) => createRef()),
        };
      });
    }
  }, [attributesArray]);

  const handleCheckFilters = (item, attribute) => {
    setFilterItems((prevState) => ({
      ...prevState,
      [item]: {
        ...prevState[item],
        [attribute.key]: {
          value: attribute.value,
          check: !prevState[item][attribute.key]?.check,
        },
      },
    }));
  };

  const handleCheck = (i, index, item, attribute) => {
    // i = 00
    if (typeof checkRefs[index].attributes[i].current === "object") {
      checkRefs[index].attributes[i].current = true;
    } else {
      checkRefs[index].attributes[i].current =
        !checkRefs[index].attributes[i].current;
    }
    handleCheckFilters(item, attribute);
    setClick(!click);
  };

  // {{*End*  UseRef for Child attributes (red, XXL, ....  ) **}}

  const handleSetRange = (value) => {
    setRangeValue(value);
  };
  const handleReset = () => {
    dispatch({ type: "RESET_FILTERS" });
  };

  const handleScroll = useCallback(
    (item) => {
      if (typeof window !== "undefined") {
        const viewMoreBtn = document.getElementById(`viewMoreBtn-${item}`);
        if (parentRef.current && viewMoreBtn) {
          viewMoreBtn.scrollIntoView({ behavior: "smooth", block: "end" });
        }
      }
    },
    [syncItem]
  );

  const handleViewMore = (item) => {
    setPagination((prevState) => ({
      ...prevState,
      [item]: prevState[item] + 10,
    }));
    setSyncItem(!syncItem);
    setItem(item);
  };
  useEffect(() => {
    handleScroll(Item);
  }, [syncItem, handleScroll, Item]);
  useEffect(() => {
    setFilteredItems(filterItems);
  }, [filterItems]);
  useEffect(() => {
    const updatedFilterItems = attributesArray.reduce(
      (prevState, item) => {
        if (item.attributes?.length > 0) {
          const attributes = item.attributes.reduce((acc, attribute) => {
            acc[attribute.key] = {
              value: attribute.value,
              check: false,
            };
            return acc;
          }, {});

          prevState[item.name] = {
            ...prevState[item.name],
            ...attributes,
          };
        }

        return prevState;
      },
      { ...filterItems }
    );
    setFilterItems(updatedFilterItems);
  }, [attributesArray]);
  useEffect(() => {
    if (removeFromFilter?.attribute && removeFromFilter?.item) {
      handleCheckFilters(removeFromFilter.item, removeFromFilter.attribute);
    }
  }, [removeFromFilter]);
  function getFilteredValues(filter) {
    return Object.entries(filter)
      .filter(([key, value]) => value.check === true)
      .map(([key, value]) => {
        return { key, value: value.value };
      });
  }
  const ObjectToArray = (filteredItems) => {
    return Object.entries(filteredItems).map(([key, value]) => ({
      key,
      value,
    }));
  };

  const dispatchFun = useCallback((keysObject) => {
    // console.log(keysObject, "keysObject");
    dispatch({ type: "Add_Filters", payload: keysObject });
  }, []);

  useEffect(() => {
    const filtersArray = ObjectToArray(filterItems);
    const keysObject = filtersArray?.reduce((acc, filter) => {
      if (getFilteredValues(filter.value)?.length > 0) {
        const mappedValues = getFilteredValues(filter.value).map((key) => key);
        acc[filter.key] = mappedValues;
      }
      return acc;
    }, {});
    dispatchFun(keysObject);
  }, [dispatchFun, click]);
  return (
    <div className="w-[216px]">
      <div style={{ top: 133 }} className="style_stickyBox__SNnmA">
        <aside className="style_filter__je3Sd">
          <h1 className="text-lg leading-10 pb-3 font-semibold leading-0 text-black border-b border-[#E0E1E3]">
            {t("user.filter")}
          </h1>
          <div className="flex flex-col gap-3">
            <div className="rc-collapse bg-transparent">
              {attributesArray?.length > 0 &&
                attributesArray.map((item, index) => {
                  return (
                    <div
                      ref={inputRefs[index]}
                      key={index}
                      id={index}
                      className="rc-collapse-item"
                    >
                      <div
                        onClick={(e) => handleExpand(index)}
                        className={`${
                          item.attributes?.length === 0 ? "hidden" : ""
                        } rc-collapse-header`}
                        aria-expanded={inputRefs[index].current}
                        aria-disabled="false"
                        role="button"
                        tabIndex={0}
                      >
                        <div className="rc-collapse-expand-icon">
                          <div className="basis-4">
                            <svg
                              width={11}
                              height={7}
                              viewBox="0 0 11 7"
                              fill="none"
                              className={
                                inputRefs[index].current ? "" : "rotate-180"
                              }
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M9.84766 6L5.84766 2L1.84766 6"
                                stroke="#31353C"
                                strokeWidth={2}
                              />
                            </svg>
                          </div>
                        </div>
                        <span className="rc-collapse-header-text">
                          <h2
                            title={item.label}
                            className="text-base font-semibold leading-10 truncate"
                          >
                            {item.label}
                          </h2>
                        </span>
                      </div>
                      <div
                        ref={parentRef}
                        id={`item-${item.name}`}
                        className={`max-h-[120px] p-2 overflow-auto
                          ${
                            inputRefs[index].current
                              ? "rc-collapse-content rc-collapse-content-active"
                              : "rc-collapse-content rc-collapse-content-inactive rc-collapse-content-hidden"
                          }
                        `}
                      >
                        <div className="rc-collapse-content-box">
                          <div className="">
                            <div className="flex flex-col gap-x-2 gap-y-4 w-full">
                              {item.attributes?.length > 0 &&
                                item.attributes.map((attribute, i) => {
                                  if (i < pagination[item?.name]) {
                                    return (
                                      <div
                                        onClick={(e) =>
                                          handleCheck(
                                            i,
                                            index,
                                            item?.name,
                                            attribute
                                          )
                                        }
                                        key={i}
                                        id={i}
                                        ref={checkRefs[index]?.attributes[i]}
                                        className="flex gap-2 items-center cursor-pointer overflow-hidden filter-checkbox"
                                      >
                                        {/*{filterItems[item]?.[attribute.key] && (*/}
                                        <SvgCheckbox
                                          click={
                                            filterItems?.[item.name]?.[
                                              attribute.key
                                            ]?.check ?? false
                                          }
                                        />
                                        {/*)}*/}
                                        <span className="text-[#484C52] text-[14px] leading-[17px] flex-1 truncate select-none">
                                          {attribute?.key}
                                        </span>
                                      </div>
                                    );
                                  }
                                })}
                            </div>
                            {pagination[item.name] <
                              item?.attributes?.length && (
                              <button
                                id={`viewMoreBtn-${item.name}`}
                                onClick={() => handleViewMore(item.name)}
                                className="mt-2 py-2 flex w-full justify-start items-center gap-x-1 text-[14px] leading-[17px] text-black"
                              >
                                <span className="cursor-pointer truncate font-[400]">
                                  + {t("main.view_more")}
                                </span>
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>

          <button
            onClick={handleReset}
            className="flex justify-center items-center overflow-hidden rounded disabled:opacity-20 disabled:cursor-not-allowed hover:opacity-80 active:opacity-90 active:shadow-[inset_0px_0px_8px_rgba(0,0,0,0.25)] group cm-btn-second border w-full px-4 h-10 border-[1.5px] self-center rounded-none"
          >
            <div className="inline-block truncate opacity-1 group-active:opacity-90">
              {t("main.reset")}
            </div>
          </button>
        </aside>
      </div>
    </div>
  );
};
export default FilterDashboard;
