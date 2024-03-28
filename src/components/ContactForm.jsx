import bg from "../assets/gradient.png";

const ContactForm = () => {
  return (
    <div
      style={{ backgroundImage: `url(${bg})` }}
      className="h-screen w-screen bg-cover flex items-center justify-center"
    >
      <div className="bg-amber-100 p-10 rounded-lg shadow-md w-80">
        <h2 className="mb-5 text-3xl font-semibold text-center">Contact Form</h2>
        <form>
          <div className="mb-5">
            <label htmlFor="firstName" className="font-bold mb-1 text-gray-700 block">First Name</label>
            <input type="text" id="firstName" placeholder="First Name" className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500" />
          </div>
          <div className="mb-5">
            <label htmlFor="lastName" className="font-bold mb-1 text-gray-700 block">Last Name</label>
            <input type="text" id="lastName" placeholder="Last Name" className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500" />
          </div>
          <div className="mb-5">
            <label htmlFor="email" className="font-bold mb-1 text-gray-700 block">Email</label>
            <input type="email" id="email" placeholder="Email" className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500" />
          </div>
          <div className="mb-5">
            <label htmlFor="comments" className="font-bold mb-1 text-gray-700 block">Comments</label>
            <textarea id="comments" placeholder="What would you like to say?" className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500" rows="4"></textarea>
          </div>
          <button className="w-full p-3 mt-4 bg-red-600 text-white font-bold rounded shadow hover:bg-blue-600 transition-all duration-300">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;