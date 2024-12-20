const Contact = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold">Contact Me</h1>
      <form className="bg-white shadow-md rounded-md p-4 mt-4">
        <div className="mb-4">
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            className="w-full border border-gray-300 p-2 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            className="w-full border border-gray-300 p-2 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Message</label>
          <textarea className="w-full border border-gray-300 p-2 rounded-md"></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Submit
        </button>
      </form>
      <div className="mt-4">
        <h2 className="text-2xl font-bold">Contact Information</h2>
        <p>Email: your-email@example.com</p>
        <p>Mobile: your-mobile-number</p>
        <p>Address: your-address</p>
      </div>
    </div>
  );
};

export default Contact;
