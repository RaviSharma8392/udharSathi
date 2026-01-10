import {
  HomeIcon,
  PlusCircleIcon,
  ClipboardDocumentListIcon,
  UsersIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";

export const bottomTabs = [
  {
    name: "home",
    icon: HomeIcon,        // classic home
    route: "",
  },

  {
    name: "history",
    icon: ClipboardDocumentListIcon, 
    route: "/transactions-history",
  },

    {
    name: "addCustomer",
    icon: PlusCircleIcon,  
    center: true,
    route: "select-customers",
  },
  {
    name: "customers",
    icon: UsersIcon,       // represents multiple customers/users
    route: "/customers",
  },
  {
    name: "account",
    icon: UserCircleIcon, 
    route: "/account",
  },
];
