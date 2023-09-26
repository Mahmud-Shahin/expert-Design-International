import React from "react";

const FreetestForm = () => {
  return (
    <div className="max-w-7xl mx-auto my-20 border border-red-500 bg-white">
      <div className="p-5 space-y-5 shadow-xl">
        <h4 className="text-center text-3xl pb-5">Free test</h4>
        <form>
          <div className="grid grid-cols-2 gap-5">
            <input
              type="text"
              className="border border-gray-500 px-4 py-2 focus:outline-none focus:border-red-500"
              placeholder="full name"
            />

            <input
              type="email"
              className="border border-gray-500 px-4 py-2 focus:outline-none focus:border-red-500"
              placeholder="email address"
            />
            <input
              type="text"
              className="border border-gray-500 px-4 py-2 focus:outline-none focus:border-red-500"
              placeholder="phone number"
            />
            <input
              type="text"
              className="border border-gray-500 px-4 py-2 focus:outline-none focus:border-red-500"
              placeholder="Web Address"
            />
            <select className="select select-bordered w-full max-w-xs">
              <option>-select-</option>
              <option>Background removal/Clopping path </option>
              <option>Image Masking</option>
              <option>Photoshop shadow</option>
              <option>Ghost mannequin/Neck joint</option>
              <option>Color varients/color change</option>
              <option>Image retouching</option>
              <option>realstate photo Editing</option>
              <option>Vector Convertion</option>
              <option>Restoration/old photo retouching</option>
              <option>Others</option>
            </select>
            <input
              type="text"
              className="border border-gray-500 px-4 py-2 focus:outline-none focus:border-red-500"
              placeholder="Return File type"
            />
            <input type="file" className="file-input w-full max-w-xs" />

            <textarea
              placeholder="Your Instruction"
              className="border border-gray-500 px-4 py-2 focus:outline-none focus:border-red-500 col-span-2"
              cols="30"
              rows="5"
            ></textarea>
          </div>
          <input
            type="submit"
            value="Send Message"
            className="focus:outline-none mt-5 bg-purple-500 px-4 py-2 text-white font-bold "
          />
        </form>
      </div>
    </div>
  );
};

export default FreetestForm;
