export const generateReferalLink = () => {
    return window.location.origin + `/register?referralCode=` + Math.random().toString(36).substring(2,8).toUpperCase()
}
