import { ArrowBackIos } from "@mui/icons-material";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
        <div className="h-screen bg-[#09141A]">
            {children}
        </div>
    );
}
