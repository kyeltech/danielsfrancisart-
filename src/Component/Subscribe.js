import React from "react";

function Subscribe() {
  return (
    <div>
      <div className="sub_wrapper container my-5 text-center py-5">
        <div className="">
          <p className="text-dark mb-3">
            {" "}
            SIGN UP WITH YOUR EMAIL ADDRESS TO RECEIVE NEWS AND UPDATES
          </p>
          <form action="">
            <div class="wrapper text-center m-auto">
              <div class="field">
                <input type="text" placeholder="Email Address" />
                <button type="submit" className="btn-2">
                  Subscribe
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Subscribe;
