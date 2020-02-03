import numeral from 'numeral';

/**
 * Da formato de moneda $ ###,###, usando la libreria "numeral"
 * @param {number | string} number Numero a ser formateada
 */
export const formatMoney = number => numeral(number).format('$ #, ## 0');
