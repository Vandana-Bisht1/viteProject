import { registerApplication, start } from "single-spa";
import { ROUTES } from '../../utils/routes'

registerApplication(
  "home",
  () => import('../../home/src/main'),
  (location: Location) =>
    location.pathname === "" ||
    location.pathname === "/" ||
    location.pathname.startsWith(ROUTES.HOME)
);

registerApplication(
  "about",
  () => import('../../about/src/main'),
  (location: Location) =>
    location.pathname.startsWith(ROUTES.ABOUT)
);

registerApplication(
  "posts",
  () => import('../../posts/src/main'),
  (location: Location) =>
    location.pathname.startsWith(ROUTES.POSTS)
);

registerApplication(
  "contact",
  () => import('../../contact/src/main'),
  (location: Location) =>
    location.pathname.startsWith('/contact')
);

registerApplication(
  "chat",
  () => import('../../chat-parcel/src/main'),
  (location: Location) =>
    location.pathname.startsWith(ROUTES.CHAT)
);

registerApplication(
  "user",
  () => import('../../user-detail/src/main'),
  (location: Location) =>
    location.pathname.startsWith('/user')
);

registerApplication(
  "header",
  () => import("../../header/src/main"),
  () => true
);

start();