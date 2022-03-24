import React from 'react';
import {useRouteMatch} from "react-router-dom";
import {useHistory} from "react-router-dom";
import {FaCircle} from "react-icons/fa";
import styled from "styled-components";


const Array = [0, 1, 2, 3, 4];

const day = {
    monday: '월',
    tuesday: '화',
    wednesday: '수',
    thursday: '목',
    friday: '금',
    saturday: '토',
    sunday: '일',
}

const Detail = ({checked, setChecked}) => {
    const history = useHistory();
    const router = useRouteMatch()
    const {id} = router.params


    const handleStarClick = index => {
        let clickStates = [...checked[id]];
        for (let i = 0; i < 5; i++) {
            clickStates[i] = i <= index;
        }
        setChecked({
            ...checked,
            [id]: clickStates,
        })
    };

    return (
        <div>
            <h2>{day[id]}요일 평점남기기</h2>
            <Circles>
                {Array.map((el, idx) => {
                    return (
                        <FaCircle
                            key={idx}
                            size="50"
                            onClick={() => handleStarClick(el)}
                            className={checked[id][el] && 'yellowStar'}
                        />
                    );
                })}
            </Circles>
            <button style={{backgroundColor: "white"}} onClick={() => {
                history.push("/");
                window.location.reload();
            }}>평점 남기기
            </button>
        </div>
    );
}


export default Detail;


const Circles = styled.div`
  padding-top: 5px;

  & svg {
    color: gray;
    cursor: pointer;
  }

  :hover svg {
    color: #fcc419;
  }

  & svg:hover ~ svg {
    color: gray;
  }

  .yellowStar {
    color: #fcc419;
  }
`;