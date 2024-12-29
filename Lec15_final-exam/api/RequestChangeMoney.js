import axios from 'axios';


const RequestChangeMoney = async (date) => { 
    let response;
    try {
        response = await
        axios.get(
            'https://www.koreaexim.go.kr/site/program/financial/exchangeJSON', 
            { params: {
                authkey: 'ZyPPJqk0jbm9YUrJLB6fuKnySp87b9nG',
                searchdate: 20241217, 
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