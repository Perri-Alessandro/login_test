const Footer = () => {
  // const [scriptResult, setScriptResult] = useState("");

  const mobileStyles = {
    fontSize: "0.69em",
  };

  const desktopStyles = {
    fontSize: "0.9em",
  };

  const mobileBottomStyles = {
    fontSize: "0.6em",
  };

  const desktopBottomStyles = {
    fontSize: "0.8em",
  };

  // useEffect(() => {
  //   let annoCorrente = new Date().getFullYear();
  //   let eccolo =
  //     "©" +
  //     annoCorrente +
  //     " My Meteo Page. All rights reserved. Created by Perri Alessandro";

  //   setScriptResult(eccolo);
  // }, []);

  return (
    <footer className="container-fluid bg-black text-white pt-3 ">
      <div
        className="row justify-content-between mt-2"
        style={{
          fontSize:
            window.innerWidth < 768
              ? mobileStyles.fontSize
              : desktopStyles.fontSize,
        }}
      >
        <div className="col">
          <div className="row flex-column">
            CONTACT US
            <div className="col mt-2">Our History</div>
            <div className="col">Lavora con noi</div>
            <div className="col">Social</div>
          </div>
        </div>
        <div className="col">
          <div className="row flex-column">
            PRODUCTS
            <div className="col mt-2">I prodotti più richiesti</div>
            <div className="col">Acquista ora</div>
          </div>
        </div>
        <div className="col">
          <div className="row flex-column">
            TERMS OF SERVICES
            <div className="col mt-2">uee</div>
            <div className="col">ueee</div>
            <div className="col">ueeeee</div>
          </div>
        </div>
      </div>
      <div className="row">
        <p
          className="mt-4 col"
          id="anno"
          style={{
            fontSize:
              window.innerWidth < 768
                ? mobileBottomStyles.fontSize
                : desktopBottomStyles.fontSize,
          }}
        >
          {/* {scriptResult} */}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
