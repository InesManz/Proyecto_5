export function createSizesSection() {
  const section = document.createElement("section");
  section.innerHTML = `
    <h1>Sizes</h1>
    <p>If you're unsure about the size, we recommend measuring the garment that fits you best from your wardrobe and comparing it with ours. You can find a list of measurements in the images of each product.

Our sizes, both unisex and women's are standard but you know, your body is unique and it's better to ensure :) .</p>
  `;
  return section;
}
