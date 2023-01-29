import "./UtilityFirstExample.css";

const UtilityFirstExample = () => {
  // alert box with regular css
  // return (
  //   <div className="alert">
  //     <div className="alert-logo-wrap">
  //       <img
  //         className="alert-logo"
  //         src="../../../assets/img/warning.svg"
  //         alt="alert"
  //       />
  //     </div>
  //     <div className="alert-body">
  //       <h4 className="alert-title">Are You Sure?</h4>
  //       <p className="alert-message">You are about to delete a post</p>
  //     </div>
  //   </div>
  // );

  // same as above with tailwind:
  return (
    <div className="flex items-center p-6 max-w-sm mx-auto bg-white roundded-xl shadow-lg space-x-4 mt-12">
      <img className="w-12 h-12" src="../../../assets/img/warning.svg" alt="" />
      <div>
        <div className="text-xl font-medium text-black">Are you sure?</div>
        <p className="text-slate-500">You are about to delete a post</p>
      </div>
    </div>
  );
};

export default UtilityFirstExample;
