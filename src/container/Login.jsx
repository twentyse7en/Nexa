import { QRCodeSVG } from "qrcode.react";

const Login = () => {
  return (
  <section className="flex h-screen items-center justify-center">
    <QRCodeSVG
      value={"afsdfsdfdsf"}
      size={128}
      bgColor={"#ffffff"}
      fgColor={"#000000"}
      level={"L"}
      includeMargin={false}
      imageSettings={{
        src: "https://static.zpao.com/favicon.png",
        x: undefined,
        y: undefined,
        height: 24,
        width: 24,
        excavate: true,
      }}
    />
  </section>
  );
}

export default Login;
