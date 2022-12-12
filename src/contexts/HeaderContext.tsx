import {
  createContext,
  Dispatch,
  ReactNode,
  useEffect,
  useReducer,
} from "react";

type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};

type initialState = {
  isHamburger: boolean;
  isScroll: boolean;
  isHiddenHamburgerMenu: boolean;
  isSelectedDropdown: boolean;
};

export enum Action {
  SET_ISHAMBURGER = "SET_ISHAMBURGER",
  SET_ISSCROLL = "SET_ISSCROLL",
  SET_ISHIDDENHAMBURGERMENU = "SET_ISHIDDENHAMBURGERMENU",
  TOGGLE_ISHIDDENHAMBURGERMENU = "TOGGLE_ISHIDDENHAMBURGERMENU",
  SET_ISSELECTEDDROPDOWN = "SET_ISSELECTEDDROPDOWN",
}

type ActionPayload = {
  [Action.SET_ISHAMBURGER]: boolean;
  [Action.SET_ISSCROLL]: boolean;
  [Action.SET_ISHIDDENHAMBURGERMENU]: boolean;
  [Action.TOGGLE_ISHIDDENHAMBURGERMENU]: undefined;
  [Action.SET_ISSELECTEDDROPDOWN]: boolean;
};

type HeaderActions = ActionMap<ActionPayload>[keyof ActionMap<ActionPayload>];

const initialState: initialState = {
  isHamburger: false,
  isScroll: false,
  isHiddenHamburgerMenu: true,
  isSelectedDropdown: false,
};

export const HeaderContext = createContext<{
  state: initialState;
  dispatch: Dispatch<HeaderActions>;
}>({
  state: initialState,
  dispatch: () => null,
});

const HeaderReducer = (state: initialState, action: HeaderActions) => {
  switch (action.type) {
    case Action.SET_ISHAMBURGER:
      return { ...state, isHamburger: action.payload };
    case Action.SET_ISSCROLL:
      return { ...state, isScroll: action.payload };
    case Action.SET_ISHIDDENHAMBURGERMENU:
      return { ...state, isHiddenHamburgerMenu: action.payload };
    case Action.TOGGLE_ISHIDDENHAMBURGERMENU:
      return { ...state, isHiddenHamburgerMenu: !state.isHiddenHamburgerMenu };
    case Action.SET_ISSELECTEDDROPDOWN:
      return { ...state, isSelectedDropdown: action.payload };
    default:
      return { ...state };
  }
};

export const HeaderProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(HeaderReducer, initialState);

  useEffect(() => {
    document.getElementsByTagName("html")[0].style.overflowY =
      state.isHiddenHamburgerMenu ? "initial" : "hidden";
  }, [state.isHiddenHamburgerMenu]);

  useEffect(() => {
    const onResize = () => {
      const width = window.innerWidth;

      if (width <= 1260) {
        dispatch({
          type: Action.SET_ISHAMBURGER,
          payload: true,
        });
      } else {
        dispatch({
          type: Action.SET_ISSELECTEDDROPDOWN,
          payload: false,
        });
        dispatch({
          type: Action.SET_ISHIDDENHAMBURGERMENU,
          payload: true,
        });
        dispatch({
          type: Action.SET_ISHAMBURGER,
          payload: false,
        });

        document.getElementsByTagName("html")[0].style.overflowY = "initial";
      }
    };

    const onScroll = () => {
      const scroll = window.scrollY;

      if (scroll >= 100) {
        dispatch({
          type: Action.SET_ISSCROLL,
          payload: true,
        });
      } else {
        dispatch({
          type: Action.SET_ISSCROLL,
          payload: false,
        });
      }
    };

    onResize();
    onScroll();
    window.addEventListener("resize", onResize);
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <HeaderContext.Provider value={{ state, dispatch }}>
      {children}
    </HeaderContext.Provider>
  );
};
