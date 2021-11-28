export const format_d_currency = (number) => {
    return new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(number) // number đ
}

export const format_VND_currency = (number) => {
    return number.toLocaleString("it-IT", { style: "currency", currency: "VND" })
}
