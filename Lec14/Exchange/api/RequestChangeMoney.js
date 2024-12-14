import axios from 'axios';


const RequestChangeMoney = async (date) => { 
    let response;
    try {
        response = await
        axios.get(
            'https://www.koreaexim.go.kr/site/program/financial/exchangeJSON', 
            { params: {
                authkey: '자신의 Key 입력',
                searchdate: 20241211, 
                data:'AP01'
            }}
        )
    } catch (err) {
        console.log(err);
        return false;
    }
    return response;
}

export default RequestChangeMoney;