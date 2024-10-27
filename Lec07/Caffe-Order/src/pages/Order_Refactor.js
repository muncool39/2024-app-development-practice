// ./src/pages/Order.js
import React, { Fragment, useMemo, useState } from 'react';

const formatter = Intl.NumberFormat( 'ko-KR' );
const data = [
    { name: '에스프레소', price: 2800 },
    { name: '아메리카노', price: 2000 },
    { name: '카페라떼', price: 3000 },
    { name: '카페모카', price: 3500 }
]

function Order() {
    const [ selected, setSelected ] = useState([]);
    console.log('selected ', selected);

    const sum = useMemo(()=>{
        let value = 0;
        selected.forEach(item => value+=item.price);
        return value;
    }, [selected]);

    return (
        <div className="container">
            <h1 className="font-bold">Order</h1>
            <h2 className="text-xl font-bold">메뉴판</h2>
            <dl>
                {
                    data.map(menu=>(
                        <Fragment key={menu.name}>
                            <dt>{menu.name}</dt>
                            <dd>
                                {formatter.format(menu.price)}원
                                <small>
                                    <button onClick={()=>{
                                        if(selected.includes(menu)) {
                                            setSelected(selected.filter(obj => obj !==menu));
                                        } else {
                                            setSelected([...selected, menu]);
                                        }
                                    }}>
                                        [{selected.includes(menu) ? '선택해제' : '선택'}]
                                    </button>
                                </small>
                            </dd>
                        </Fragment>
                    ))
                }
            </dl>    
            <hr />
            <h3 className="text-xl font-bold">주문서</h3>
            <ul className="list-unstyled">
                { selected.map(menu=> <li key={menu.name}>{menu.name}</li>) }
            </ul>
            합계: { formatter.format(sum) }원

            <div className='mt-4'>
                <button className="btn btn-primary">주문하기</button>
            </div> 
        </div>
    )
}

export default Order;