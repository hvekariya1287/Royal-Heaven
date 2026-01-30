export const createPageUrl = (name) => {
  if (name === "Home") return "/";
  return `/${name.toLowerCase()}`;
};
