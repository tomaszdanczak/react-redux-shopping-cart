// ===============================================================

export const formatCurrency = (num) => {
  return "$" + Number(parseInt(num).toFixed(1)).toLocaleString() + "";
};

// ===============================================================

export const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

// ===============================================================
