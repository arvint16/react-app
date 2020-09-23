export function emailFieldValidation(email) {
    if (!email) {
        return null
    }
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}
export function passwordValidation(value) {
    if (!value) {
        return false
    }
    return value && value.length >= 1
}