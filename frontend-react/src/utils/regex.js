export const regexObj = {
    USERNAME: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,12}$/,
    PASSWORD: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,20}$/,
    EMAIL: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
    PHONE: /^(?:\+64|0064|0)[2-9][0-9]{7,9}$/,
    VALIDATION_CODE: /^\d{6}$/,
    CAPTCHA_ID: /^.{5}$/
}