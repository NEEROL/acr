export type NavbarProps = {
  name: string;
  to: string;
  note?: string;
  groups?: Array<DropdownProps[]>;
};

export type DropdownProps = {
  name: string;
  to?: string;
  isDisabled?: boolean;
  note?: string;
};

const Navbar: NavbarProps[] = [
  {
    name: "Strona główna",
    to: "/",
  },
  {
    name: "NFZ",
    to: "#",
    groups: [
      [
        { name: "Medycyna rodzinna", isDisabled: true },
        { name: "Pediatria", isDisabled: true },
        { name: "Internista", isDisabled: true },
        { name: "Dietetyk", isDisabled: true },
        { name: "Diabetolog", isDisabled: true },
        { name: "Położona", isDisabled: true },
      ],
      [
        { name: "Szkoła rodzenia", isDisabled: true },
        { name: "Geriatra", isDisabled: true },
        { name: "Szczepienia", isDisabled: true },
        { name: "Spirometria", isDisabled: true },
        { name: "EKG, RTG, USG", isDisabled: true },
        { name: "Badania laboratoryjne", isDisabled: true },
      ],
    ],
  },
  {
    name: "Stomatologia",
    to: "https://acrodent.pl/",
    note: "poza NFZ",
  },
  {
    name: "Usługi medyczne",
    to: "/uslugi-medyczne",
  },
  {
    name: "Kontakt",
    to: "/#aboutus",
  },
];

export default Navbar;
