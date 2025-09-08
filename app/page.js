import AllPages from "./pages/AllPages";

export default function MainApp() {
  return (
    <div className=" items-start justify-center bg-neutral-100 font-sans text-neutral-800 transition-colors duration-500 dark:bg-[#0a0a1a] dark:text-neutral-300">
      <div
        className="fixed inset-0 z-0 opacity-20 dark:opacity-30"
        aria-hidden="true"
      >
        <div className="animate-gradient-x absolute inset-0 bg-gradient-to-r from-fuchsia-600 to-pink-600" />
      </div>

      <div className="min-h-screen w-full flex flex-col gap-8 text-gray-900 dark:text-gray-100">
        <AllPages />
      </div>
    </div>
  );
}
