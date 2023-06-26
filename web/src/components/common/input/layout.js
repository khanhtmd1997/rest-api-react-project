import { Fragment } from "react";

export default function Layout(props) {
  const { renderInputType } = props;
  return <Fragment>{renderInputType()}</Fragment>;
}
