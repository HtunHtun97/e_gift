import React, { Component } from "react";
import axios from "../../axios-cards";
import Auxiliary from "../../hoc/Auxiliary/Auxiliary";
import { Card, Button } from "@material-ui/core";
import "./Shop.css";
import Spinner from "../../components/UI/Spinner/Spinner";
import QRCode from "react-qr-code";

class Shop extends Component {
  state = {
    previewData: {},
    loading: false,
    qrString: "hello world",
    confirmedData: {},
    showComfirm: false,
    modalStatus: 0,
  };

  componentDidMount() {
    this.setState({ loading: true });
    const reqBody = {
      giftCardId: this.props.id,
    };
    axios
      .post("/purchaseCard", reqBody)
      .then((response) => {
        if (response.data) {
          this.setState({
            previewData: response.data,
            loading: false,
            qrString: response.data.qrString,
          });
        }
      })
      .catch((error) => {
        this.setState({ loading: false });
        console.log(error);
      });
  }

  render() {
    const previewData = this.state.previewData ? this.state.previewData : null;

    let shopData = this.state.loading ? (
      <Spinner />
    ) : (
      <Auxiliary>
        <div>
          <h2>Google Playstore USA</h2>
          <div>
            <QRCode value={this.state.qrString} />
          </div>
        </div>
        <div className="Preview">
          <h2 style={{ textAlign: "center" }}>eGift Shop</h2>
          <div>
            <div className="PreviewContent">
              <div>Tansaction Id: </div>
              <div>{previewData.txnId}</div>
            </div>
            <div className="PreviewContent">
              <div>Card Price: </div>
              <div>{previewData.cardPrice}</div>
            </div>
            <div className="PreviewContent">
              <div>Fee: </div>
              <div>{previewData.fee}</div>
            </div>
            <div className="PreviewContent">
              <div>Total:</div>
              <div>{previewData.total}</div>
            </div>
            <div>
              <p>After pay with AYA-Pay, Please click the payment button</p>
            </div>
          </div>
          <Button
            className="PaymentBtn"
            onClick={(event) =>
              this.props.clicked(event, previewData && previewData.txnId)
            }
          >
            Payment
          </Button>
        </div>
      </Auxiliary>
    );
    return (
      <Auxiliary>
        <Card className="Shop">{shopData} </Card>
      </Auxiliary>
    );
  }
}

export default Shop;
