import React, { type PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  className?: string;
  tag?: keyof HTMLElementTagNameMap;
}

const Container = (props: Props) => {
  const { children, className, tag: TagName = "div" } = props;
  return (
    <TagName
      className={`mx-auto max-w-4xl  xl:max-w-6xl  ${
        className ? className : ""
      }`}
    >
      {children}
    </TagName>
  );
};

export default Container;
