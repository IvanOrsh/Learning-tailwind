/* eslint-disable jsx-a11y/anchor-is-valid */
const InteractivityExample = () => {
  return (
    <div>
      {/* Hover State Styling */}
      <button className="m-3 rounded-lg bg-black py-3 px-5 text-white hover:bg-orange-500 hover:text-white">
        Submit
      </button>

      {/* Focus State Styling */}
      <button className="m-3 rounded-lg bg-black py-3 px-5 text-white focus:bg-green-500 focus:text-white">
        Submit
      </button>

      {/* Active State Styling */}
      <button className="m-3 rounded-lg bg-black py-3 px-5 text-white active:bg-yellow-500 active:text-white">
        Submit
      </button>

      {/* Styling based on parent state */}
      <a
        href="#"
        className="group mx-auto block max-w-xs space-y-3 rounded-lg bg-white p-6 shadow-lg hover:bg-sky-500"
      >
        <h3 className="group-hover:text-white">Card Title</h3>
        <p className="group-hover:text-white">This is the card text</p>
      </a>

      {/* Pseudo Classes */}
      <ul>
        <li className="first:bg-red-200 odd:bg-orange-500 even:bg-green-500">
          Item 1
        </li>
        <li className="first:bg-red-200 odd:bg-orange-500 even:bg-green-500  ">
          Item 2
        </li>
        <li className="first:bg-red-200 odd:bg-orange-500 even:bg-green-500">
          Item 3
        </li>
        <li className="first:bg-red-200 odd:bg-orange-500 even:bg-green-500">
          Item 4
        </li>
        <li className="first:bg-red-200 odd:bg-orange-500 even:bg-green-500">
          Item 5
        </li>
        <li className="first:bg-red-200 odd:bg-orange-500 even:bg-green-500">
          Item 6
        </li>
      </ul>

      {/* Appearance */}
      <select className="appearance-none">
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select>

      {/* Cursor */}
      <button className="m-3 cursor-wait rounded-lg bg-black py-3 px-5 text-white">
        Submit
      </button>
      <button className="m-3 cursor-not-allowed rounded-lg bg-black py-3 px-5 text-white">
        Not allowed
      </button>

      <p className="cursor-pointer">Hello</p>

      {/* User Selct */}
      <div className="select-none">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum voluptate
        atque odio ratione numquam! Accusantium soluta expedita omnis dicta quo,
        alias nihil iste. Hic perferendis, nesciunt illo quod quisquam sapiente?
      </div>
      <div className="select-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum voluptate
        atque odio ratione numquam! Accusantium soluta expedita omnis dicta quo,
        alias nihil iste. Hic perferendis, nesciunt illo quod quisquam sapiente?
      </div>
      <div className="select-all">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum voluptate
        atque odio ratione numquam! Accusantium soluta expedita omnis dicta quo,
        alias nihil iste. Hic perferendis, nesciunt illo quod quisquam sapiente?
      </div>
      <div className="select-auto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum voluptate
        atque odio ratione numquam! Accusantium soluta expedita omnis dicta quo,
        alias nihil iste. Hic perferendis, nesciunt illo quod quisquam sapiente?
      </div>

      <a href="#item" className="my-6 block">
        Go To Item
      </a>

      {/* Smooth Scroll Example -> scroll-smoth */}
    </div>
  );
};

export default InteractivityExample;
