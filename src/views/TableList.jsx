// we should be GET-ting and POST-ing data from this page

import React, { Component } from "react";
import { Table } from "react-bootstrap";
// import Card from "components/Card/Card.jsx";
import { titleArray, msgArray } from "variables/Variables.jsx";
import Modal from "components/Modal/modal.jsx";

class TableList extends Component {
 
  constructor(props) {
    super(props);

    this.replaceModalItem = this.replaceModalItem.bind(this);
    this.saveModalDetails = this.saveModalDetails.bind(this);
    this.state = {
      requiredItem: 0,
      brochure: [

          // data from here should be getting pulled from variables - however, GET/POST should be done from DB

        <Table striped hover>
                    <thead>
                      <tr>
                        {titleArray.map((prop, key) => {
                          return <th key={key}>{prop}</th>;
                        })}
                      </tr>
                    </thead>
                    <tbody>
                      {msgArray.map((prop, key) => {
                        return (
                          <tr key={key}>
                            {prop.map((prop, key) => {
                              return <td key={key}>{prop}</td>;
                            })}
                          </tr>
                        );
                      })}
                    </tbody>
                  </Table>
      ]
    }
  }
  
 
  replaceModalItem(index) {
    this.setState({
      requiredItem: index
    });
  }

  saveModalDetails(item) {
    const requiredItem = this.state.requiredItem;
    let tempbrochure = this.state.brochure;
    tempbrochure[requiredItem] = item;
    this.setState({ brochure: tempbrochure });
  }

  deleteItem(index) {
    let tempBrochure = this.state.brochure;
    tempBrochure.splice(index, 1);
    this.setState({ brochure: tempBrochure });
  }

  render() {    
    const brochure = this.state.brochure.map((item, index) => {
      return (
        <tr key={index}>
          <td>{item.title}</td>
          <td>{" "} - {" "}</td>
          <td>{item.msg}</td>
          <td>
            <button className="btn btn-primary" data-toggle="modal" data-target="#exampleModal"
              onClick={() => this.replaceModalItem(index)}>edit</button> {" "}
            <button className="btn btn-danger" onClick={() => this.deleteItem(index)}>remove</button>
          </td>
        </tr>
      )
    });
    
    const requiredItem = this.state.requiredItem;
    let modalData = this.state.brochure[requiredItem];
    return (
      <div>
        <div style={{ textAlign: "center" }}>
          <h1>Blue Moon Fabrics Inventory</h1>
          <h6>Inventory Management Tool 1.0</h6>
        </div>
        <table className="table table-striped">
          <tbody>
            {brochure}
          </tbody>
        </table>
        <Modal
          title={modalData.title}
          msg={modalData.msg}
          saveModalDetails={this.saveModalDetails}
        />
      </div>
    );
  }
}

export default TableList;


