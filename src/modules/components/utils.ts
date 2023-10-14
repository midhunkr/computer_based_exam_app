/**
 * Formats a time value in seconds to a string representation in the "hh:mm:ss" format.
 *
 * @param {number} time - The time value in seconds to be formatted.
 * @returns {string} The formatted time string in the "hh:mm:ss" format.
 */
export const formatTime = (time:number): string => {
    const hours: number = Math.floor(time / 3600);
    const minutes: number = Math.floor((time % 3600) / 60);
    const seconds: number = time % 60;

    return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
};

/**
 * Pads a number with leading zeros to ensure it has at least two digits.
 *
 * @param {number} num - The number to be padded with leading zeros.
 * @returns {string} The number as a string with leading zeros if needed.
 */
export const padZero = (num: number): string => {
    return num.toString().padStart(2, '0');
};