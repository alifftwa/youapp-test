import Providers from "../../_components/providers/Providers";

const BaseLayout = ({ children }) => {
  return (
    <>
      <Providers>
        <div>
          <main>{children}</main>
        </div>
      </Providers>
    </>
  );
};

export default BaseLayout;
