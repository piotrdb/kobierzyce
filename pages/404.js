import "../app/globals.css";
import Link from "next/link";

const Custom404 = () => {
  return (
    <div className="min-h-[100vh] bg-main px-4 py-16 sm:px-6 sm:py-24 lg:px-8 overflow-y-hidden">
      <div className="mx-auto max-w-max">
        <main className="sm:flex">
          <p className="bg-gradient-to-br from-pink-400 to-cyan-600 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl">
            404
          </p>
          <div className="sm:ml-6">
            <div className="sm:border-l sm:border-gray-200 sm:pl-6">
              <h1 className="text-4xl font-bold tracking-tight text-secondary sm:text-5xl">
                Nie odnaleziono strony
              </h1>
              <p className="mt-1 text-base text-gray-500">
                Proszę sprawdź adres strony wpisany w pasku przeglądarki lub
                przejdź do strony głównej.
              </p>
            </div>
            <div className="mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6">
              <Link href="/">
                <p className="inline-flex items-center rounded-md  border-transparent  bg-gradient-to-br from-pink-600 to-cyan-700 px-4 py-2 text-lg font-medium text-white shadow-sm hover:bg-gradient-to-br hover:from-pink-700 hover:to-cyan-800 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2">
                  Strona główna
                </p>
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Custom404;
