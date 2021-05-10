import { Cookies } from "quasar";
import axios from "axios";

export default async ({ app, router, store, Vue }) => {
  const token = Cookies.get("reaction_jwt");
  if (token) {
    const res = await axios.get(`${process.env.API_URL}/users/me`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    if (!!res.data && !res.data.blocked && !!res.data.confirmed) {
      store.commit("user/setProfile", res.data);
    } else {
      Cookies.remove("reaction_jwt", { path: "/" });
    }
  } else {
    const res = await axios.get(
      `${process.env.API_URL}/users-permissions/providers`
    );
    console.log(res.data);
    if (res.data) {
      store.commit("providers/setList", res.data);
    }
  }
};
