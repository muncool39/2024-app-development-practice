// ./src/pages/Order.js
import React, { useState } from 'react';

const formatter = Intl.NumberFormat( 'ko-KR' );
function Order() {
    const [ hasEspresso, setEspresso ] = useState(false);
    const [ hasAmericano, setAmericano ] = useState(false); 
    const [ hasLatte, setLatte ] = useState(false);  

    let sum = 0;
    sum += hasEspresso ? 2800 : 0;
    sum += hasAmericano ? 3000 : 0;
    sum += hasLatte ? 3500 : 0;

    return (
        <div className="container">
            <h1 className="font-bold">Order</h1>
            <h2 className="text-xl font-bold">메뉴판</h2>
            <dl>
                <dt>에스프레소</dt>
                <dd>
                    2,800원
                    <small>
                        <button onClick={ () => setEspresso(!hasEspresso)}>
                           [{ hasEspresso ? '선택 해제' : '선택' }]
                        </button>
                    </small>
                </dd>
                <dt>아메리카노</dt>
                <dd>
                    3,000원
                    <small>
                        <button onClick={ () => setAmericano(!hasAmericano)}>
                           [{ hasAmericano ? '선택 해제' : '선택' }]
                        </button>
                    </small>
                </dd>
                <dt>카페라떼</dt>
                <dd>
                    3,500원
                    <small>
                        <button onClick={ () => setLatte(!hasLatte)}>
                           [{ hasLatte ? '선택 해제' : '선택' }]
                        </button>
                    </small>
                </dd>
                <hr />
                <h3 className="text-xl font-bold">주문서</h3>

                <ul className="list-unstyled">
                    { hasEspresso && <li>에스프레소</li>}
                    { hasAmericano && <li>아메리카노</li>}
                    { hasLatte && <li>카페라떼</li>}
                </ul>
                  합계: { formatter.format(sum) }원
         
                <div>
                    <button className="btn btn-primary">주문하기</button>
                </div>
            </dl>
        </div>
    )
}

export default Order;