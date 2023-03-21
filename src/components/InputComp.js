import "../css/InputComp.css";
import { Component } from "react";

//CRUD

class InputComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      rating: "",
      date: "",
    };
  }
  addPersonInfo = () => {
    alert("추가");//app에서 함수먼저 날라옴
    const { name, rating, date } = this.state;

    this.props.addPersonInfo(name, rating, date); // 호츨//app가 주입시킨함수
  };

  ratingChange = (e) => {
    //이벤트 객체가 매개변수 e로 넘어오고
    console.log(e.target.value);
    this.setState({
      //input에서 읽은 value를 상대값에 저장
      rating: e.target.value,
    });
  };

  dateChange = (e) => {
    //이벤트 객체가 매개변수 e로 넘어오고
    console.log(e.target.value);
    this.setState({
      //input에서 읽은 value를 상대값에 저장
      date: e.target.value,
    });
  };

  nameChange = (e) => {
    //이벤트 객체가 매개변수 e로 넘어오고
    console.log(e.target.value);
    this.setState({
      //input에서 읽은 value를 상대값에 저장
      name: e.target.value,
    });
  };

  render() {
    return (
      <div id="input-comp">
        <input type="text" placeholder="이름입력" onChange={this.nameChange} />
        <input
          type="text"
          placeholder="나이입력"
          onChange={this.ratingChange}
        />
        <input type="text" placeholder="키입력" onChange={this.dateChange} />
        <button onClick={this.addPersonInfo}>추가</button>
      </div>
    );
  }
}
export default InputComp;
