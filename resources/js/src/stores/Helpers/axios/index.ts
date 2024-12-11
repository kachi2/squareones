import startCompany from "./endPoints/startCompany"
import user from "./endPoints/user"
import payment from "./endPoints/payment"
import admin from "./endPoints/admin"
import auth from "./endPoints/auth"
import twofactor from "./endPoints/twofactor"
import adminStartCompany from "./endPoints/adminStartCompany"

export default {
    ...auth,
    ...startCompany,
    ...user,
    ...payment,
    ...admin,
    ...twofactor,
    ...adminStartCompany
}