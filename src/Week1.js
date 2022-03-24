import "./App.css"
import React from 'react';
import { Link } from "react-router-dom";
import {FaCircle} from "react-icons/fa";
import styled from "styled-components";



const Array = [0, 1, 2, 3, 4];

const Week1 = ({checked}) => {
    // const history = useHistory();
    return (
        <div className="Week">
            <div className="day">월
                <Circles>
                    {Array.map((el, idx) => {
                        return (
                            <FaCircle
                                key={idx}
                                size="40"
                                className={checked['monday'][el] && 'yellowStar'}
                            />
                        );
                    })}
                </Circles>
                <Link to="/monday">
                    <button style={{backgroundColor: "white"}}>평점</button>
                </Link>
            </div>
            <div className="day">화
                <Circles>
                    {Array.map((el, idx) => {
                        return (
                            <FaCircle
                                key={idx}
                                size="40"
                                className={checked['tuesday'][el] && 'yellowStar'}
                            />
                        );
                    })}
                </Circles>
                <Link to="/tuesday">
                    <button style={{backgroundColor: "white"}}>평점</button>
                </Link>
            </div>
            <div className="day">수
                <Circles>
                    {Array.map((el, idx) => {
                        return (
                            <FaCircle
                                key={idx}
                                size="40"
                                className={checked['wednesday'][el] && 'yellowStar'}
                            />
                        );
                    })}
                </Circles>
                <Link to="/wednesday">
                    <button style={{backgroundColor: "white"}}>평점</button>
                </Link>
            </div>
            <div className="day">목
                <Circles>
                    {Array.map((el, idx) => {
                        return (
                            <FaCircle
                                key={idx}
                                size="40"
                                className={checked['thursday'][el] && 'yellowStar'}
                            />
                        );
                    })}
                </Circles>
                <Link to="/thursday">
                    <button style={{backgroundColor: "white"}}>평점</button>
                </Link>
            </div>
            <div className="day">금
                <Circles>
                    {Array.map((el, idx) => {
                        return (
                            <FaCircle
                                key={idx}
                                size="40"
                                className={checked['friday'][el] && 'yellowStar'}
                            />
                        );
                    })}
                </Circles>
                <Link to="/friday">
                    <button style={{backgroundColor: "white"}}>평점</button>
                </Link>
            </div>
            <div className="day">토
                <Circles>
                    {Array.map((el, idx) => {
                        return (
                            <FaCircle
                                key={idx}
                                size="40"
                                className={checked['saturday'][el] && 'yellowStar'}
                            />
                        );
                    })}
                </Circles>
                <Link to="/saturday">
                    <button style={{backgroundColor: "white"}}>평점</button>
                </Link>
            </div>
            <div className="day">일
                <Circles>
                    {Array.map((el, idx) => {
                        return (
                            <FaCircle
                                key={idx}
                                size="40"
                                className={checked['sunday'][el] && 'yellowStar'}
                            />
                        );
                    })}
                </Circles>
                <Link to="/sunday">
                    <button style={{backgroundColor: "white"}}>평점</button>
                </Link>
            </div>
        </div>
    )
}


export default Week1;

const Circles = styled.div`
  padding-top: 5px;

  & svg {
    color: gray;
  }

  .yellowStar {
    color: #fcc419;
  }
`;
