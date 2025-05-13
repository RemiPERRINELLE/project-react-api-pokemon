export function capitalize(str) {
    if (typeof str !== 'string') return '';
    return str.trim().charAt(0).toUpperCase() + str.trim().slice(1);
}