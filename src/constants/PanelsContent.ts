export type PanelContentProps = {
  title: string;
  description: string;
  iconUrl: string;
};

const PanelsContent: PanelContentProps[] = [
  {
    title: "Podstawowa opieka zdrowotna",
    description:
      "Opieka medyczna za darmo, bez\ndodatkowych opłat w ramach NFZ",
    iconUrl: "/assets/basichealthcare.svg",
  },
  {
    title: "Badania w przychodni",
    description:
      "Pakiet badań diagnostycznych, EKG, RTG, USG\noraz laboratoryjnych, w tym punkt pobrań \nw naszej placówce medycznej.",
    iconUrl: "/assets/examinationsintheclinic.svg",
  },
  {
    title: "Szczepienia",
    description:
      "Obowiązkowe szczepienia, bilanse oraz\nindywidualna profilaktyka całkowicie bezpłatnie.",
    iconUrl: "/assets/vaccinations.svg",
  },
  {
    title: "Szybka obsługa",
    description:
      "Błyskawiczne umawianie wizyt, konstultacje online,\nzamawianie e-recept i wiele więcej!",
    iconUrl: "/assets/fastservice.svg",
  },
];

export default PanelsContent;
