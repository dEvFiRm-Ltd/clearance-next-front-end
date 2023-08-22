import { useEffect, useState } from "react";
import { Provider, useSelector } from "react-redux";
import store from "../store";
import GlobalStyle from "../styles/GlobalStyle";

const Root = ({ sitting }) => {
  const [fontFamily, setFontFamily] = useState(null);
  const [textColor, setTextColor] = useState(null);
  const [rootCss, setRoot] = useState(null);
  const [BackgroundColor, setBackgroundColor] = useState(null);
  const loading = useSelector((state) => state?.mainReducer?.loading);
  useEffect(() => {
    // console.log(sitting);
    setFontFamily(sitting?.font);
    setRoot(sitting?.color);
    setTextColor(sitting?.root);
    setBackgroundColor(sitting?.backgroundColor);
  }, [sitting, loading]);
  return (
    <GlobalStyle
      fontFamily={fontFamily}
      textColor={textColor}
      BackgroundColor={BackgroundColor}
      root={rootCss}
    />
  );
};

export default Root;
