import { Outlet } from "react-router";
import GlobalDrawer from "../../../components/GlobalDrawer";
import GlobalModal from "../../../components/GlobalModal";
import Header from "./Header";
import Sidebar from "./Sidebar";

export default function HydrogenLayout() {
  return (
    <>
      <main className="flex h-[100dvh] flex-grow bg-[var(--app-bg)] overflow-hidden">
        <Sidebar className="fixed hidden xl:block" />
        <div className="flex h-[100dvh] w-full flex-col xl:ms-[270px] xl:w-[calc(100%-270px)] 2xl:ms-72 2xl:w-[calc(100%-288px)]">
          <Header className="w-full h-[80px] max-h-[80px]" />
          <div className="flex flex-grow flex-col px-4 pb-6 pt-2 md:px-5 lg:px-6 lg:pb-8 3xl:px-8 3xl:pt-4 4xl:px-10 4xl:pb-9 overflow-y-auto"
               style={{ maxHeight: "calc(100dvh - 80px)" }}>
            <Outlet />
          </div>
        </div>
      </main>
      <GlobalDrawer />
      <GlobalModal />
    </>
  );
}
