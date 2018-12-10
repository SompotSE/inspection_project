import React from 'react';
import Knowledge1 from './Knowledge1';
import Knowledge2 from './Knowledge2';
class ModalExample extends React.Component {
  render() {
    return (
      <div>

        <button type="button" class="btn btn-primary" data-toggle="modal" data-target=".No1">Large modal</button>

        <div class="modal fade No1" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-lg">
            <div class="modal-content">

              <br /><br /><br />
              <Knowledge1 />
              <center>
                <div >
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                  <br /><br /><br />
                </div>
              </center>
            </div>
          </div>
        </div>

        <button type="button" class="btn btn-primary" data-toggle="modal" data-target=".No2">modal 2</button>

        {/* <div class="modal fade No2" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-lg">
            <div class="modal-content"> */}
        <Knowledge2 />
      </div >



    );
  }
}

export default ModalExample;