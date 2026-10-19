/* empty css                        */
import { c as createAstro, d as createComponent, r as renderTemplate, e as addAttribute, f as renderHead, g as renderComponent, h as renderSlot, m as maybeRenderHead } from '../astro_B3M5hTmr.mjs';
import 'kleur/colors';
import { initializeApp } from 'firebase/app';
import { getFirestore, query, collection, getDocs, doc, getDoc } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import menuIcon from '@iconify/icons-mdi/menu.js';
import closeIcon from '@iconify/icons-mdi/close.js';
/* empty css                        */
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import 'firebase/database';

const Header = ({ title, navs }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const headerHeight = 200;
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > headerHeight);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
    setIsScrolled(isNavOpen ? false : true);
  };
  return /* @__PURE__ */ jsxs(
    "header",
    {
      className: `fixed top-0 z-40 h-[7.5vh] flex w-screen justify-between px-4 py-2 text-center align-middle transition-all duration-1000 lg:grid lg:grid-cols-5 lg:px-0 lg:py-2 ${isScrolled ? "bg-opacity-100" : "bg-opacity-100 dark:bg-opacity-100"} bg-ltbg1 lg:hover:bg-opacity-100 dark:bg-dkbg1`,
      children: [
        /* @__PURE__ */ jsx("div", { className: "items-center justify-center align-middle lg:col-span-1 flex", children: /* @__PURE__ */ jsx("h2", { className: "text-center text-2xl text-black transition-all duration-300 hover:text-accent dark:text-white", children: /* @__PURE__ */ jsx("a", { href: "/", className: "align-middle", children: title }) }) }),
        /* @__PURE__ */ jsx("nav", { className: "hidden items-center justify-center gap-16 align-middle lg:col-span-3 lg:flex", children: navs.map((nav) => /* @__PURE__ */ jsx(
          "a",
          {
            className: "text-bold text-base text-black transition duration-300 ease-in-out hover:text-accent dark:text-white",
            href: `${nav.link}`,
            children: nav.name
          },
          nav.name
        )) }),
        /* @__PURE__ */ jsx(
          "div",
          {
            onClick: toggleNav,
            className: `z-50 flex w-10 cursor-pointer items-center justify-center text-2xl text-black transition-transform duration-300 lg:hidden dark:text-white ${isNavOpen ? "rotate-180 opacity-100" : "rotate-0 opacity-50"}`,
            children: isNavOpen ? /* @__PURE__ */ jsx(Icon, { icon: closeIcon }) : /* @__PURE__ */ jsx(Icon, { icon: menuIcon })
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: `absolute left-0 top-full z-50 w-full transform bg-white shadow-md lg:hidden ${isNavOpen ? "scale-y-100" : "scale-y-0"} origin-top transition-transform duration-300 ease-in-out`,
            children: /* @__PURE__ */ jsxs("nav", { className: "flex flex-col dark:bg-dkbg1", children: [
              navs.map((nav, index) => /* @__PURE__ */ jsx(
                "a",
                {
                  href: `${nav.link}`,
                  className: "px-6 py-4 text-base text-black dark:bg-dkbg1 dark:text-white",
                  children: nav.name
                },
                index
              )),
              /* @__PURE__ */ jsx("a", { href: "/app", className: "", children: /* @__PURE__ */ jsx("button", { className: "my-2 mb-4 transform rounded-xl bg-tertiary px-4 py-2 text-base transition duration-300 ease-in-out hover:scale-110 hover:bg-accent", children: "Log In" }) })
            ] })
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "hidden lg:col-span-1 lg:flex justify-center items-center align-middle", children: /* @__PURE__ */ jsx("a", { href: "/app", className: "", children: /* @__PURE__ */ jsx("button", { className: "transform rounded-xl bg-tertiary px-4 py-2 text-lg  transition duration-300 ease-in-out hover:scale-110 hover:bg-accent", children: "Log In" }) }) })
      ]
    }
  );
};

const $$Astro$1 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, metaDescription } = Astro2.props;
  const websiteName = "MarkItStorage";
  const navs = [{ link: "/about", name: "About" }];
  const cta = "Start Marking!";
  return renderTemplate`<html lang="en" class="bg-black font-sans font-light text-white"> <head><meta charset="UTF-8"><meta name="description"${addAttribute(metaDescription, "content")}><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title ? `${title} - ${websiteName}` : websiteName}</title>${renderHead()}</head> <body class="bg-ltbg2 dark:bg-dkbg2"> ${renderComponent($$result, "Header", Header, { "title": websiteName, "navs": navs.filter((nav) => nav.link !== "/"), "cta": cta, "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Code/MarkIt/mark-it/src/components/Header", "client:component-export": "default" })} ${renderSlot($$result, $$slots["default"])}  </body></html>`;
}, "C:/Code/MarkIt/mark-it/src/layouts/Layout.astro", void 0);

const firebaseConfig = {
  apiKey: "AIzaSyCBdqei3UhG1APt-4CiMEBGM46n3IczvZs",
  authDomain: "markit-a6d25.firebaseapp.com",
  projectId: "markit-a6d25",
  storageBucket: "markit-a6d25.appspot.com",
  messagingSenderId: "103527109310",
  appId: "1:103527109310:web:487002e25ba0676f3404ef"
};
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

const getUserCollections = async (uid) => {
  const q = query(collection(db, `users/${uid}/Collections`));
  const querySnapshot = await getDocs(q);
  const fetchedCollections = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data()
    // Assuming doc.data() includes collectionName and description
  }));
  console.log("fetchedCollections", fetchedCollections);
  return fetchedCollections;
};
getUserCollections("uid");
const useAuthStore = create()(
  persist(
    (set) => ({
      user: null,
      // Default state
      setUser: (user) => set({ user }),
      logout: () => set({ user: null })
    }),
    {
      name: "auth-storage-local"
    }
  )
);
const useAddSequenceStore = create((set) => ({
  currentStep: 'select-collection',
  setCurrentStep: (arg) => set((state) => ({
    currentStep: typeof arg === "function" ? arg(state.currentStep) : arg
  })),
  isCenterButtonEnabled: true,
  setIsCenterButtonEnabled: (isCenterButtonEnabled) => set({ isCenterButtonEnabled }),
  leftButtonIcon: "ep:back",
  setCenterButtonIcon: (centerButtonIcon) => set({ centerButtonIcon }),
  centerButtonIcon: "tabler:plus",
  setLeftButtonIcon: (leftButtonIcon) => set({ leftButtonIcon }),
  titlePreview: "",
  setTitlePreview: (titlePreview) => set({ titlePreview }),
  descriptionPreview: "",
  setDescriptionPreview: (descriptionPreview) => set({ descriptionPreview }),
  fetchFlag: false,
  toggleFetchFlag: () => set((state) => ({ fetchFlag: !state.fetchFlag })),
  // State for the working item
  selectedCollection: "",
  setSelectedCollection: (selectedCollection) => set({ selectedCollection }),
  initializeCollections: async (uid) => {
    const fetchedCollections = await getUserCollections(uid);
    if (fetchedCollections.length > 0) {
      set({ selectedCollection: fetchedCollections[0].id });
    }
  },
  QRCode: "",
  setQRCode: (QRCode) => set({ QRCode }),
  dumpWorkingItem: () => {
    set({
      QRCode: "",
      actionType: "",
      title: "",
      description: "",
      photo1: "",
      photo2: "",
      photo3: "",
      titlePreview: "",
      descriptionPreview: ""
    });
  },
  actionType: "",
  setActionType: (actionType) => set({ actionType }),
  photo1: "",
  setPhoto1: (photo1) => set({ photo1 }),
  photo2: "",
  setPhoto2: (photo2) => set({ photo2 }),
  photo3: "",
  setPhoto3: (photo3) => set({ photo3 }),
  title: "",
  setTitle: (title) => set({ title }),
  description: "",
  setDescription: (description) => set({ description }),
  priceRange: [0, 500],
  setPriceRange: (priceRange) => set({ priceRange })
}));

const ItemVerificationPage = ({
  item,
  id
}) => {
  return /* @__PURE__ */ jsx("div", {});
};

const $$Astro = createAstro();
const prerender = false;
const $$qr = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$qr;
  const { qr: id = "" } = Astro2.params;
  let item = null;
  try {
    const itemRef = doc(db, "Items", id ?? "");
    const itemSnap = await getDoc(itemRef);
    if (itemSnap.exists()) {
      item = itemSnap.data();
      console.log("item:", item);
    } else {
      throw new Error("Item not found");
    }
  } catch (error) {
    console.error("Error fetching item:", error);
  }
  console.log("item:", item);
  const { itemDetails } = item || {};
  const { photos, title, priceRange, description } = itemDetails || {};
  typeof priceRange === "object" ? priceRange.max : priceRange;
  const actionType = item ? item.actionType : null;
  if (actionType === "sell" || actionType === "rent") {
    return Astro2.redirect(`/shop/${id}`);
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "metaDescription": description }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> ${renderComponent($$result2, "ItemVerificationPage", ItemVerificationPage, { "item": item, "id": id, "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Code/MarkIt/mark-it/src/components/ItemVerificationPage", "client:component-export": "default" })} </main> ` })} `;
}, "C:/Code/MarkIt/mark-it/src/pages/qr/[qr].astro", void 0);

const $$file = "C:/Code/MarkIt/mark-it/src/pages/qr/[qr].astro";
const $$url = "/qr/[qr]";

const _qr_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$qr,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, Header as H, _qr_ as _, useAddSequenceStore as a, db as d, firebaseApp as f, getUserCollections as g, storage as s, useAuthStore as u };
