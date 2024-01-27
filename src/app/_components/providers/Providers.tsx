// "use client";

import { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";

interface ProvidersProps {
  children: ReactNode;
}

const Providers: React.FC<ProvidersProps> = ({ children }: ProvidersProps) => {
  return (
    <>
      <SessionProvider>
        {children}
      </SessionProvider>
    </>
  );
};

export default Providers;
