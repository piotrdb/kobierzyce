import Link from "next/link";
import ContactButton from "./components/ContactButton";
import IconBox from "./components/IconBox";
import PhotoGallery from "./components/PhotoGallery";

export default function Home() {
  return (
    <div className="w-full bg-black min-h-[100vh]">
      <div className="px-12 w-full max-w-[1536px] mx-auto text-secondary ">
        <div className="w-full text-5xl xl:text-6xl font-righteous py-12 flex justify-between">
          <div>
            <h1>Kobierzyce</h1>
            <h2 className="mt-2 text-2xl xl:text-3xl">
              Dom do wynajęcia, niedaleko Bielany Wrocławskie
            </h2>
          </div>
          <div className="text-4xl">
            <ContactButton className="px-6 py-3 bg-secondary text-main rounded-lg hover:bg-accent hover:drop-shadow-glow transition-all duration-500 hover:-translate-y-1" />
          </div>
        </div>
        <PhotoGallery />
        <div className="mt-24 flex gap-y-3 justify-center gap-x-2 flex-wrap">
          <IconBox icon="wifi" content="Darmowe Wi-Fi" />
          <IconBox icon="camera" content="Monitorowany obiekt" />
          <IconBox icon="kitchen" content="Kuchnia" />
          <IconBox icon="car" content="Kilka miejsc parkingowych" />
          <IconBox icon="garden" content="Ogród" />
          <IconBox icon="shower" content="Dwa prysznice" />
          <IconBox icon="door" content="Trzy pokoje" />
          <IconBox icon="bed" content="Osiem Łóżek" />
          <IconBox icon="stairs" content="Dwupiętrowy" />
          <IconBox icon="heating" content="Centralne ogrzewanie" />
          <IconBox icon="laundry" content="Pralka" />
        </div>
        <div className="py-24 text-lg font-montserrat text-justify">
          Zapraszamy do wynajmu domu wolnostojącego w Kobierzycach, usytuowanych
          kilkanaście kilometrów od Wrocławia. Ten przestronny dom to doskonałe
          rozwiązanie dla firm poszukujących komfortowych kwater pracowniczych.
          Z łatwością pomieści od 8 do 12 osób, zapewniając wszystkim komfortowy
          i przyjazny pobyt. Lokalizacja naszego domu to dobra okazja dla
          pracujących w okolicznych miejscowościach. Wrocław jest oddalony
          zaledwie o kilkanaście minut jazdy samochodem, dzięki czemu unikacie
          Państwo codziennego zgiełku miejskiego, a jednocześnie macie dostęp do
          wszystkich jego udogodnień. Dodatkowo, w bezpośrednim sąsiedztwie
          znajdują się Bielany Wrocławskie, kilkanaście kilometrów dalej Kąty
          Wrocławskie. Dla pracowników, którzy muszą dojeżdżać do tych
          miejscowości, nasz dom to doskonałe rozwiązanie. Obiekt jest dostępny
          do wynajmu zarówno na dłuższy okres, jak i na pojedyncze noclegi.
          Jesteśmy elastyczni i gotowi dostosować się do Państwa potrzeb.
          Zapraszamy do kontaktu i wynajmu naszego domu, który z pewnością
          spełni Wasze oczekiwania!
        </div>
        <div className="w-full pt-12 pb-64">
          <h1 className="text-5xl font-righteous text-center">
            Informacje kontaktowe
          </h1>
          <div className="flex items-center justify-center gap-x-32 mt-24">
            <div className="aspect-[2/1] bg-secondary w-1/4 flex rounded-lg flex-wrap">
              <IconBox
                icon="phone"
                content="+48 504 501 125"
                pClassName="w-full text-2xl text-center mt-4"
                iconClassName="mx-auto -rotate-45"
                size={48}
                containerClass="items-center justify-center w-full flex-wrap"
              />
              <p className="text-center w-full text-xl text-main font-montserrat font-bold">
                Numer telefonu
              </p>
            </div>
            <Link
              href="https://www.facebook.com/eliza.major.18"
              className="aspect-[2/1] w-1/4"
            >
              <div className="w-full h-full flex rounded-lg transition-all duration-500 cursor-pointer">
                <IconBox
                  icon="fb"
                  content="Facebook"
                  pClassName="w-full text-2xl text-center mt-4 group-hover:text-white"
                  iconClassName="mx-auto text-blue-600 group-hover:text-white"
                  size={48}
                  containerClass="items-center justify-center w-full flex-wrap hover:bg-blue-600 transition-all group"
                />
              </div>
            </Link>
            <div className="aspect-[2/1] bg-secondary w-1/4 flex rounded-lg flex-wrap">
              <IconBox
                icon="mail"
                content="major.eliza997@gmail.com"
                pClassName="w-full text-2xl text-center mt-4"
                iconClassName="mx-auto"
                size={48}
                containerClass="items-center justify-center w-full flex-wrap"
              />
              <p className="text-center w-full text-xl text-main font-montserrat font-bold">
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
