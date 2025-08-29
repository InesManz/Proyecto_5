export function createShippingSection() {
  const section = document.createElement("section");
  section.innerHTML = `
    <h1>Shipping policy</h1>
    <p>Shipping Conditions

All orders will be processed as soon as possible—usually within 1-2 business days under normal circumstances.

Keep in mind that delivery times might vary slightly for reasons beyond our control (busy holidays, your local driver having a bad day, a cannibal civil war…) and are counted from the shipping date, not the order date.

We work with limited stock, so if the item you purchased isn’t available at the time, we’ll make it for you. That could take up to 20 days, but don’t worry—we’ll let you know if that happens.

We don’t ship on weekends or holidays, obviously.

Shipping Rates

Spain
Spend €60 or more and shipping is on us.
We ship via GLS for €5.90. Once your order is ready, it usually takes 1-2 days depending on your area.
If you’re in the Canary Islands, we ship through Correos (8€). Please keep in mind possible customs fees and include your DNI number for the paperwork.
European Union
Spend €60 or more and shipping is on us.
We offer shipping with GLS for €9.90. Once your order is ready, it usually takes 3-10 days depending on your location.
UK
Spend €60 or more and shipping is on us.
We offer shipping with Correos Spain for €9.90. Once your order is ready, it usually takes 3-10 days depending on your location.
Remember there may be customs fees!
USA / CANADA
Spend €60 or more and shipping is on us.
We offer shipping with Correos Spain for €12.90. Once your order is ready, it usually takes 5-20 days depending on your location.
Remember there may be customs fees!
Rest of the World
Spend €60 or more and shipping is on us.
We offer shipping with Correos Spain for €9.90. Once your order is ready, it usually takes 5-20 days depending on your location.
Keep in mind there may be customs fees!
Is the place on Earth you’re ordering from not listed on our website? Shoot us a message and we’ll figure it out!.</p>
  `;
  return section;
}
