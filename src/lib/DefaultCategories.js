export const categories = [
  { name: "Humor", color: "#B55BDB" },
  { name: "Noticias", color: "#5F7BD6" },
  { name: "Deportes", color: "#D66B5F" },
  { name: "Ciencia", color: "#3FB252" },
  { name: "Musica", color: "#000000" },
  { name: "Cultura", color: "#5BC9DB" },
  { name: "Politica", color: "#69E5AB" },
  { name: "Ocio", color: "#CAD946" },
];

export function findCategorybyText(text) {
  const foundCategories = categories.filter((category) =>
    category.name.toLowerCase().includes(text.toLowerCase())
  );
  return foundCategories;
}

export function findCategoryColorByName(name) {
  const foundCategory = categories.find((category) => category.name === name);
  if (!foundCategory) {
    return "";
  }
  return foundCategory.color;
}
