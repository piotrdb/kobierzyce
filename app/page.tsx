import Link from "next/link";
import ContactButton from "./components/ContactButton";
import IconBox from "./components/IconBox";
import PhotoGallery from "./components/PhotoGallery";

export default function Home() {
  return (
    <div className="w-full bg-black min-h-[100vh] overflow-x-hidden">
      <div className="px-6 md:px-12 w-full max-w-[1536px] mx-auto text-secondary  ">
        <div className="w-full text-4xl md:text-5xl xl:text-6xl font-righteous py-12 flex flex-wrap justify-center sm:justify-between items-center ">
          <h1 className="block w-full sm:w-auto sm:inline text-center sm:text-left">
            Kobierzyce
          </h1>
          <div className="text-2xl sm:text-3xl lg:text-4xl order-1 sm:order-none">
            <ContactButton className="mt-4 mb-2 sm:my-0 px-4 py-2 md:px-6 md:py-3 bg-secondary text-main rounded-lg hover:bg-accent hover:drop-shadow-glow transition-all duration-500 hover:-translate-y-1" />
          </div>
          <h2 className="mt-2 text-xl sm:text-2xl xl:text-3xl md:pr-[220px] sm:text-left text-center">
            Dom do wynajęcia w Wierzbicach k/ Kobierzyc, niedaleko Bielany
            Wrocławskie
          </h2>
        </div>
        <PhotoGallery />
        <div className="mt-24 text-sm sm:text-md flex gap-y-3 justify-center gap-x-2 flex-wrap">
          <IconBox icon="wifi" content="Darmowe Wi-Fi" />
          <IconBox icon="camera" content="Monitorowany obiekt" />
          <IconBox icon="kitchen" content="Kuchnia" />
          <IconBox icon="car" content="Kilka miejsc parkingowych" />
          <IconBox icon="garden" content="Ogród" />
          <IconBox icon="shower" content="Trzy prysznice" />
          <IconBox icon="door" content="Cztery pokoje" />
          <IconBox icon="bed" content="Dwanaście Łóżek" />
          <IconBox icon="stairs" content="Dwupiętrowy" />
          <IconBox icon="heating" content="Centralne ogrzewanie" />
          <IconBox icon="laundry" content="Pralka" />
          <IconBox icon="tv" content="TV w każdym pokoju" />
        </div>
        <div className="py-24 text-lg font-montserrat text-justify">
          Zapraszamy do wynajmu domu wolnostojącego w Wierzbicach k/ Kobierzyc,
          usytuowanych kilkanaście kilometrów od Wrocławia. Ten przestronny dom
          to doskonałe rozwiązanie dla firm poszukujących komfortowych kwater
          pracowniczych. Z łatwością pomieści do 12 osób, zapewniając wszystkim
          komfortowy i przyjazny pobyt. Lokalizacja naszego domu to dobra okazja
          dla pracujących w okolicznych miejscowościach. Wrocław jest oddalony
          zaledwie o kilkanaście minut jazdy samochodem, dzięki czemu unikacie
          Państwo codziennego zgiełku miejskiego, a jednocześnie macie dostęp do
          wszystkich jego udogodnień. Dodatkowo, w bezpośrednim sąsiedztwie
          znajdują się Bielany Wrocławskie, kilkanaście kilometrów dalej Kąty
          Wrocławskie. Dla pracowników, którzy muszą dojeżdżać do tych
          miejscowości, nasz dom to świetne lokum. Obiekt jest dostępny do
          wynajmu zarówno na dłuższy okres, jak i na pojedyncze noclegi.
          Jesteśmy elastyczni i gotowi dostosować się do Państwa potrzeb.
          Zapraszamy do kontaktu i wynajmu naszego domu, który z pewnością
          spełni Wasze oczekiwania!
        </div>
        <div className="w-full pt-6 md:pt-4 pb-4 md:pb-64">
          <h1 className="text-4xl md:text-5xl font-righteous text-center">
            Informacje kontaktowe
          </h1>
          <div className="flex md:flex-row flex-col items-center justify-center gap-y-10 lg:gap-y-0 md:gap-x-2 lg:gap-x-16 xl:gap-x-32 mt-12 md:mt-20 lg::mt-36">
            <div className=" bg-secondary h-40 w-full md:w-[600px] flex rounded-lg flex-wrap">
              <IconBox
                icon="phone"
                content={`+48 504 501 125`}
                pClassName="w-full text-md sm:text-xl 2xl:text-2xl text-center mt-4 px-4 md:px-0"
                iconClassName="mx-auto sm:mx-auto -rotate-45"
                size={48}
                containerClass="pl-0 pr-0 items-center justify-center w-full flex-wrap"
              />
            </div>
            <Link
              href="https://www.facebook.com/eliza.major.18"
              className="w-[140px] md:w-[240px] h-40 order-1 md:order-none"
            >
              <div className="w-full h-full flex rounded-lg transition-all duration-500 cursor-pointer">
                <IconBox
                  icon="fb"
                  content="Facebook"
                  pClassName="w-full text-xl 2xl:text-2xl text-center mt-4 group-hover:text-white"
                  iconClassName="mx-auto sm:mx-auto text-blue-600 group-hover:text-white"
                  size={48}
                  containerClass="items-center pl-0 pr-0 sm:pr-0 sm:pl-0 justify-center w-full flex-wrap hover:bg-blue-600 transition-all group"
                />
              </div>
            </Link>
            <div className=" bg-secondary h-40 w-full md:w-[600px] flex rounded-lg flex-wrap">
              <IconBox
                icon="mail"
                content="major.eliza997@gmail.com"
                pClassName="w-full text-md sm:text-xl 2xl:text-2xl text-center mt-4 px-4 md:px-0"
                iconClassName="mx-auto sm:mx-auto"
                size={48}
                containerClass="pl-0 pr-0 sm:pl-0 sm:pr-0 items-center justify-center w-full flex-wrap"
              />
              <p className="text-center w-full text-md sm:text-xl text-main font-montserrat font-bold mb-2">
                Adres e-mail
              </p>
            </div>
          </div>
        </div>
      </div>
      <div id="contact" />
    </div>
  );
}
