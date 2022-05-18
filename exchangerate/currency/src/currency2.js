import React from "react";
import Axios from "axios";

class ExchangeRate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      klay: "",
      result: "",
    };
  }

  render() {

    const { klay } = this.state;
    const { result } = this.state;

    let key;
    let value;
    const exObj = {}

    const res = async () => {
      (() => {
        Axios.get(
          "https://quotation-api-cdn.dunamu.com/v1/forex/recent?codes=FRX.KRWUSD&&codes=FRX.KRWRUB&&codes=FRX.KRWGBP&&codes=FRX.KRWEUR&&codㅁㄴㅇㄹㅁㅇㄴㄹes=FRX.KRWCNY&&codes=FRX.KRWJPY&&codes=FRX.KRWAUD&&codes=FRX.KRWCAD&&codes=FRX.KRWTHB&&codes=FRX.KRWINR&&codes=FRX.KRWTWD&&codes=FRX.KRWMYR&&codes=FRX.KRWSGD&&codes=FRX.KRWHKD&&codes=FRX.KRWNZD&&codes=FRX.KRWVND&&codes=FRX.KRWAED"
        ).then((res) => {
          for (let i = 0; i < 17; i++) {
            key = `'${res.data[i].currencyCode}'`;
            value = res.data[i].basePrice;
            exObj[key] = value;
          }
          this.setState({ result: exObj });

          console.log(result); // Object
        })
        .catch(err => {
          console.error(err);
          Axios.get(
            "https://quotation-api-cdn.dunamu.com/v1/forex/recent?codes=FRX.KRWUSD&&codes=FRX.KRWRUB&&codes=FRX.KRWGBP&&codes=FRX.KRWEUR&&codes=FRX.KRWCNY&&codes=FRX.KRWJPY&&codes=FRX.KRWAUD&&codes=FRX.KRWCAD&&codes=FRX.KRWTHB&&codes=FRX.KRWINR&&codes=FRX.KRWTWD&&codes=FRX.KRWMYR&&codes=FRX.KRWSGD&&codes=FRX.KRWHKD&&codes=FRX.KRWNZD&&codes=FRX.KRWVND&&codes=FRX.KRWAED"
          ).then((res) => {
            for (let i = 0; i < 17; i++) {
              key = `'${res.data[i].currencyCode}'`;
              value = res.data[i].basePrice;
              exObj[key] = value;
            }
            this.setState({ result: exObj });
  
            console.log(result); // Object
          })
        })

      })();

      (() => {
        Axios.get(
          "/public/v2/ticker_new/krw/klay"
        ).then((res) => {
          this.setState({ klay: res.data.tickers[0].last });
        });
      })();

    }
    return (
      <>
        <div>
          <h1>klay : {klay}</h1>
          <button onClick={() => res()}>Exchange</button>
        </div>

        <div>
          <h3>{Object.keys(result)[0]} {Object.values(result)[0]}</h3>
          <h4>{(klay/Object.values(result)[0]).toFixed(2)}</h4>
        </div>
        <div>
          <h3>{Object.keys(result)[1]} {Object.values(result)[1]}</h3>
          <h4>{(klay/Object.values(result)[1]).toFixed(2)}</h4>
        </div>
        <div>
          <h3>{Object.keys(result)[2]} {Object.values(result)[2]}</h3>
          <h4>{(klay/Object.values(result)[2]).toFixed(2)}</h4>
        </div>
        <div>
          <h3>{Object.keys(result)[3]} {Object.values(result)[3]}</h3>
          <h4>{(klay/Object.values(result)[3]).toFixed(2)}</h4>
        </div>
        <div>
          <h3>{Object.keys(result)[4]} {Object.values(result)[4]}</h3>
          <h4>{(klay/Object.values(result)[4]).toFixed(2)}</h4>
        </div>
      </>
    );
  }
}

export default ExchangeRate;