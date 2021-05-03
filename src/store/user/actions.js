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

export async function getPersonalResults(ctx) {
  const token = Cookies.get("reaction_jwt");
  if (token) {
    const res = await axios({
      method: "get",
      url: `${process.env.API_URL}/results/personal`,
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    if (res && res.data) {
      ctx.commit("setResults", res.data);
    }
  }
}
