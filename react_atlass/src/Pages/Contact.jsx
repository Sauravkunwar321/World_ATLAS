export const Contact = () => {

    const handleFormSUbmit = (formData) => {
        console.log(formData.entries());
        const formInputData = Object.fromEntries(formData.entries());
        console.log(formInputData);
    }
  return (
    <section className="section-contact">
      <h2 className="container-title">Contact Us</h2>

<div className="contact-wrapper container">


      <form action={handleFormSUbmit} >
        <input
          type="text"
          autoComplete="false"
          placeholder="Enter your name"
          name="username"
          required
        />
        <input
          type="email"
          autoComplete="false"
          placeholder="Enter your email"
          name="email"
          className="form-control"
          required
        />
        <textarea
          className="form-control"
          rows="10"
          placeholder="Enter your message"
          name="message"
          autoComplete="off"
          required
        ></textarea>
        <button type="submit" value="send">Send</button>
      </form>
      </div>
    </section>
  );
};
