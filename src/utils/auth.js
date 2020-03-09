export function getToken() {
  return localStorage.getItem("ticket")
}
export function setToken(ticket) {
  localStorage.setItem("ticket",ticket)
}
export function isLogin() {
  if(localStorage.getItem("ticket")){
    return true
  }else{
    return false
  }
}
export function clearToken() {
  localStorage.removeItem("ticket")
}