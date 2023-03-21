import "./App.css";
import { Component } from "react";
import Movie from "./components/Movie.js";
import InputComp from "./components/InputComp.js";
import poster1 from "./images/poster1.jpg";
import poster2 from "./images/poster2.jpg";
import poster3 from "./images/poster3.jpg";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieList: [
        {
          image: poster1,
          name: "빌리엘리어트",
          rating: "9.5⭐",
          date: "2023년 10월2일",
        },
        {
          image: poster2,
          name: "원더풀라이프",
          rating: "8.3⭐",
          date: "2022년 2월4일",
        },
        {
          image: poster3,
          name: "시네마천국",
          rating: "10⭐",
          date: "1927년 3월 7일",
        },
      ],
    };
  }
  addPersonInfo = (name, rating, date) => {
    alert("추가");
    alert("넘어온이름:" + name);
    alert("넘어온평점:" + rating);
    alert("날짜:" + date);
    const movieObj = { name: name, rating: rating, date: date };
    const concatedList = this.state.movieList.concat(movieObj);
    this.setState({
      movieList: concatedList
    });
  };

  render() {
    const test = this.state.movieList.map((data, index) => (
      <Movie
        key={index}
        //에러뜰때용, component의 번호를 구분 짓는 것
        index={index}
        //몇번째 배열인지 알려주는 것
        image={data.image}
        name={data.name}
        rating={data.rating}
        date={data.date}
      />
    ));

    return (
      <div className="App">
        <h1>🎥BEST MOVIE🎥</h1>
        <ul className="flex_comp">
          <li>
            {test}
            {/* <Movie
          image={this.state.movieList[0].image}
          name={this.state.movieList[0].name}
          rating={this.state.movieList[0].rating}
          date={this.state.movieList[0].date}
          
        />
          </li>
          <li>
          <Movie
          image={this.state.movieList[1].image}
          name={this.state.movieList[1].name}
          rating={this.state.movieList[1].rating}
          date={this.state.movieList[1].date}
        />
          </li>
          <li>
          <Movie
          image={this.state.movieList[2].image}
          name={this.state.movieList[2].name}
          rating={this.state.movieList[2].rating}
          date={this.state.movieList[2].date}
        /> */}
          </li>
        </ul>
        {/* <InputComp/> */}
        <InputComp addPersonInfo={this.addPersonInfo} />
      </div>
    );
  }
}

export default App;
