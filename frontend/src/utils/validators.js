import { isValidUsername } from "6pp";

export const usernameValidator = (username) => {
  if (!isValidUsername(username))
    return { isValid: false, errorMessage: "Username is Invalid" };
};
// validator for gla
function isEmailFromGla(email) {
  const regex = /@gla\.ac\.in$/;
  return regex.test(email);
}
export const emialValidator=(email)=>{
  if(!isEmailFromGla(email))
    return { isValid: false, errorMessage: "Email is Invalid" };
}