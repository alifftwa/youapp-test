import { ArrowBackIos } from "@mui/icons-material";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full h-screen overflow-hidden bg-cover bg-gradient-to-bl from-[#1F4247] from-[0%] via-[#0D1D23] via-[56.18%] to-[#09141A] to-[100%] ">
      <div className="flex pt-5 pl-3">
        <ArrowBackIos />
        <p className="font-semibold">Back</p>
      </div>

      <div className="flex flex-col h-screen justify-center">
        <div className="mx-6 my-5 align-middle">{children}</div>
      </div>

      <div>
        <div className="flex justify-center mt-5">
          <p className="">No account?</p>
          <button className="pl-1 underline underline-offset-3">
            <p className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#F3EDA6] from-[-6.8%] via-[#F8FAE5] via-[89.01%] to-[#D5BE88] to-[100.43%]">
              Register here
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}
