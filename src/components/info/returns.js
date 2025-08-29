export function createReturnsSection() {
  const section = document.createElement("section");
  section.innerHTML = `
    <h1>Returns & Exchanges</h1>
    <p>You have 28 days from the day you receive your order to return any item for a refund.

Before returning, make sure your items are unused, in their original packaging, don’t smell like perfume or armpit, and still have their labels on.

To start your return, just drop us a message by email or Instagram.

Keep in mind that you’ll have to cover the return shipping costs yourself.

If you received a wrong or a faulty item, get in touch and we’ll hook you up with a free return label.

As soon as the items make it back to our secret base, we’ll process your refund. We’ll do it as quickly as possible, but it can take up to 14 days.

Original shipping costs are not refundable unless the products were damaged or incorrect.

If you haven’t seen the refund in 14 days, let us know!.</p>
  `;
  return section;
}
