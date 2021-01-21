import React from "react";

import { withRouter } from "react-router-dom";

import Button from "elements/Button";

function NotFound(props) {
  return (
    <div className="container">
      <div
        className="row align-items-center justify-content-center text-center"
        style={{ height: "100vh" }}
      >
        <div className="col-4">
          Maaf
          <p className="pt-4">Website ini sedang dalam tahap pengembangan</p>
          <div>
            <Button
              className="btn mt-5 border-primary"
              type="button"
              onClick={() => props.history.goBack()}
              isLight
            >
              Kembali untuk ke halaman Utama
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withRouter(NotFound);
