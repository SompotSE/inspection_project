import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, Form, FormGroup } from 'reactstrap';

class ModalExample extends React.Component {
  render() {
    return (
      <div class="w3-container">
        <h2>W3.CSS Modal</h2>
        <p>Use w3-container classes to create different sections in the modal (e.g. header & footer).</p>
        <button onclick={"document.getElementById('id01').style.display='block'"} class="w3-button w3-black">Open Modal</button>

        <div id="id01" class="w3-modal">
          <div class="w3-modal-content">
            <header class="w3-container w3-teal">
              <span onclick="document.getElementById('id01').style.display='none'"
                class="w3-button w3-display-topright">&times;</span>
              <h2>Modal Header</h2>
            </header>
            <div class="w3-container">
              <p>Some text..</p>
              <p>Some text..</p>
            </div>
            <footer class="w3-container w3-teal">
              <p>Modal Footer</p>
            </footer>
          </div>
        </div>
      </div>
    );
  }
}

export default ModalExample;