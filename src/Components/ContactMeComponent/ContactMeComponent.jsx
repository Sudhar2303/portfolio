
const ContactMeComponent = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6">

        {/* HEADER */}
        <div className="mb-16 text-center">
          <p className="text-3xl md:text-5xl font-semibold tracking-tight">
            <span className="text-black">Say Hi!</span>{" "}
            <span className="text-black/60">
              and start a conversation with me
            </span>
          </p>
        </div>

        {/* FORM */}
        <form className="space-y-10">

          {/* NAME */}
          <div>
            <label
              htmlFor="name"
              className="block text-md font-medium text-black/70 mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full text-base px-3 py-3 border-none outline-none bg-transparent"
            />
            <div className="h-px bg-black/20 mt-2"></div>
          </div>

          {/* EMAIL */}
          <div>
            <label
              htmlFor="email"
              className="block text-md font-medium text-black/70 mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full text-base px-3 py-3 border-none outline-none bg-transparent"
            />
            <div className="h-px bg-black/20 mt-2"></div>
          </div>

          {/* COMPANY */}
          <div>
            <label
              htmlFor="company"
              className="block text-md font-medium text-black/70 mb-2"
            >
              Company Name
            </label>
            <input
              type="text"
              id="company"
              name="company"
              className="w-full text-base px-3 py-3 border-none outline-none bg-transparent"
            />
            <div className="h-px bg-black/20 mt-2"></div>
          </div>

          {/* MESSAGE */}
          <div>
            <label
              htmlFor="message"
              className="block text-md font-medium text-black/70 mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              className="w-full text-base px-3 py-3 border-none outline-none bg-transparent resize-none"
            />
            <div className="h-px bg-black/20 mt-2"></div>
          </div>

          {/* BUTTON */}
          <div className="pt-6 flex justify-center">
            <button
              type="submit"
              className="px-8 py-3 bg-black text-white text-sm font-medium rounded-md 
                         hover:bg-black/80 transition-colors"
            >
              Submit
            </button>
          </div>
        </form>

      </div>
    </section>
  );
};

export default ContactMeComponent;