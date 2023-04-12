import React from "react";
import axios from "axios";

const apiService = axios.create({
  baseURL: "https://api.mercadolibre.com/",
  timeout: 10000,
});

export default apiService;
