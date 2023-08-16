import { v4 as uuidv4 } from "uuid";
import { createSlice } from "@reduxjs/toolkit";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import enLang from "./lang/en-US.json";

const setDocumentCookie = () => {
  const cookie = uuidv4();
  document.cookie = `${
    process.env.REACT_APP_KEY
  }=${cookie}; path=/; sameSite=true; expires=${new Date(
    +new Date() + 7 * 86400000
  ).toUTCString()}`;
  return cookie;
};

export const getDate = (time: number) => {
  const d = new Date(time);
  const timeStr = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
  return timeStr;
};

const langs = {
  "en-US": enLang
};

const initialState: StoreObject = {
  lang: "en-US",
  theme: "dark",
  cookie: null,
  user: null,
  isChat: false,
  isMobileNav: false,
  conversation: [],
  isAuthenticated: false
};

const getStore = (initialState: StoreObject) => {
  try {
    const buf = window.localStorage.getItem(process.env.REACT_APP_KEY || "");
    if (buf) {
      const json = JSON.parse(buf);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const state: any = initialState;
      for (const k in json) {
        if (state[k] !== undefined) {
          state[k] = json[k];
        }
      }
    }
    if (initialState.cookie === "") {
      initialState.cookie = uuidv4();
    }
  } catch (err) {
    console.error(err);
  }

  return initialState;
};

const setStore = (state: Storage) => {
  delete state.L;
  window.localStorage.setItem(
    process.env.REACT_APP_KEY || "",
    JSON.stringify(state)
  );
};

export const slice = createSlice({
  name: "store",
  initialState: getStore(initialState),
  reducers: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    update: (state: any, action) => {
      for (const k in action.payload) {
        if (state[k] === undefined) new Error(`undefined store key ${k}`);
        state[k] = action.payload[k];
      }
      setStore(state);
    }
  }
});

const useStore = () => {
  const G = useSelector((state: StoreObject) => state);
  const lang = langs[G.lang];
  type LangType = keyof typeof lang;
  const L = lang;

  const T = (
    key: LangType,
    args?: { [key: string]: string | number } | string | number
  ): string => {
    let text = L[key];
    // if (text === undefined) throw new Error('Undefined lang key[' + String(key) + ']')
    if (typeof args === "string" || typeof args === "number") {
      text = text.replace(/\{\w+\}/, String(args));
    } else if (args) {
      for (const k in args)
        text = text.replace(new RegExp("{" + k + "}", "g"), String(args[k]));
    }
    return text;
  };

  const dispatch = useDispatch();
  const update = (payload: Partial<StoreObject>) =>
    dispatch(slice.actions.update(payload));

  const setCookie = (extra?: Partial<StoreObject>) => {
    const cookie = setDocumentCookie();
    update({ cookie, ...extra });
  };

  return { ...G, T, update, setCookie, logout };
};

export const logout = (extra?: StoreObject) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const navigate = useNavigate();

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { setCookie } = useStore();
  setCookie({ user: null, ...extra });
  navigate("/");
};

export default useStore;
