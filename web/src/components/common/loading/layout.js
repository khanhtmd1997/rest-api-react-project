import { Fragment } from "react";

export default function Layout(props) {
  const { renderComponent } = props;
  return <Fragment>{renderComponent()}</Fragment>;
}
