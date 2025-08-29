import "./contact.css"; 

export function createContactSection() {
  const section = document.createElement("section");
  section.className = "contact-section";

  section.innerHTML = `
    <h1>Contact us</h1>
    <form class="contact-form">
      <label for="name">Name</label>
      <input type="text" id="name" name="name" required />

      <label for="email">Email</label>
      <input type="email" id="email" name="email" required />

      <label for="message">Message</label>
      <textarea id="message" name="message" rows="5" required></textarea>

      <p class="extra-info">
        You can also contact via mail: <a href="mailto:sepulcroshop@gmail.com">sepulcroshop@gmail.com</a><br />
        or Instagram: <a href="https://instagram.com/sepulcroshop" target="_blank">@sepulcroshop</a>
      </p>

      <button type="submit" class="send-btn">SEND</button>
    </form>
  `;

  return section;
}
