import { useCallback, useEffect } from "react";
import LayoutTemplate from "../../../template/private/layout";
import { useDispatch, useSelector } from "react-redux";
import { commonSelector } from "../../../redux/common";
import { drawerSelector, setDrawer } from "../../../redux/drawer/reducer";
import { setChangedData } from "../../../redux/common/reducer";

const headerStyle = {
  textAlign: "center",
  height: 72,
  paddingInline: 0,
};
const contentStyle = {
  padding: 12,
};

const footerStyle = {
  textAlign: "center",
};

export default function LayoutPrivatePages(props) {
  const { layoutAuth } = props;
  const { isChangeData } = useSelector(commonSelector);
  const { openDrawer } = useSelector(drawerSelector);
  const dispatch = useDispatch();

  //before load page
  const onUnload = useCallback(
    (e) => {
      e.preventDefault();
      if (openDrawer && isChangeData) {
        return (e.returnValue = "");
      } else return () => window.removeEventListener("beforeunload", onUnload);
    },
    [isChangeData, openDrawer]
  );
  //end before load page

  //fetch listen event before unload
  useEffect(() => {
    window.addEventListener("beforeunload", onUnload);
    return () => window.removeEventListener("beforeunload", onUnload);
  }, [onUnload]);
  //end fetch listen event before unload

  //fetch listen event load page
  useEffect(() => {
    const onLoad = (e) => {
      e.preventDefault();
      dispatch(setDrawer(false));
      dispatch(setChangedData(false));
    };
    window.addEventListener("load", onLoad);
    return () => window.removeEventListener("load", onLoad);
  }, [dispatch]);
  //end fetch listen event load page

  return (
    <LayoutTemplate
      headerStyle={headerStyle}
      contentStyle={contentStyle}
      footerStyle={footerStyle}
      layoutAuth={layoutAuth}
    />
  );
}
