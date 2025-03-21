import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {

  useEffect(() => {
    window.scrollTo(0, 120);
  }, [useLocation()]);

  return null;
};

export default ScrollToTop;
