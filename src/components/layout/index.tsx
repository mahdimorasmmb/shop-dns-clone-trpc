import { type FC, type PropsWithChildren } from "react";
import Header from "./Header";
import Container from "../Container";
import Footer from "./Footer";

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      <Container tag="main">{children}</Container>
      <Footer/>
    </>
  );
};
