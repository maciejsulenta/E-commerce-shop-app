import axios from "axios";

const BASE_URL = "http://localhost:5000/api";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyN2Q0MjJmOThiZWEzM2ZiYmMyNmMwZCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1Mjg4OTgxNCwiZXhwIjoxNjUzMTQ5MDE0fQ.KLhYqGopT7BWyvZ3JDlsHRAdKwscCKpv4aC6xaqQMKw";
export const publicRequest = axios.create({
  baseURL: BASE_URL,
});
export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
