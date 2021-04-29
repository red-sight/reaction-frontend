import axios from "axios";
import { Cookies } from "quasar";

export function reportScore(context, score) {
  const token = Cookies.get("reaction_jwt");
  if (token) {
    axios({
      method: "post",
      url: `${process.env.API_URL}/score/report`,
      headers: {
        Authorization: `Bearer ${token}`
      },
      data: {
        value: score
      }
    });
  }
}
