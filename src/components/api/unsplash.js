import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID nPYEyrOne7ww1ost7z82I_fLiCdT1tnIFy-jzBKPO0g ",
  },
});
