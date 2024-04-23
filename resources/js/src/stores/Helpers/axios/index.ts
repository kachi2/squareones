import startCompany from "./endPoints/startCompany"
import user from "./endPoints/user"
import payment from "./endPoints/payment"

export default {
    ...startCompany,
    ...user,
    ...payment,
}