import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [useLocation()]);

  return null;
};

export default ScrollToTop;
