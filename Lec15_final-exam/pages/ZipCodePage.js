import React, { useCallback, useEffect, useState } from 'react';  
import { Button, FlatList, Text, TextInput } from 'react-native';  
import axios from 'axios';
import Padding from '../components/components/Padding'
import Row from '../components/components/Row';
import AddressItem from '../components/components/AddressItem';
import juso from '../api/juso';

function ZipCodePage() {
    const [ keyword, setKeyword ] = useState('');  
    const [ list, setList ] = useState( [] );
    const search = useCallback(()=>{  
        axios.get('https://business.juso.go.kr/addrlink/addrLinkApi.do', {
            params: {
                confmKey: juso,
                currentPage: 1,
                countPerPage: 100,  
                keyword,  
                resultType: 'json',
            }
        } ).then( response => {
            setList( response.data.results.juso );
        }).catch( console.warn )
    },[keyword, list]);
    
    return (
        <Padding style={{flex: 1}}>
            <Row>
                <TextInput
                    style={{ flex: 1 }}  
                    value={ keyword }
                    onChangeText={ text => setKeyword( text ) }
                />
                <Button title="검색" onPress={search} />
            </Row>
            <FlatList
                data={ list }
                renderItem={ item => <AddressItem item={ item.item }/> }  
                keyExtractor={ item => item.rnMgtSn + item.roadAddr }  
                style={{ flex: 1 }}
            />
        </Padding>
    )
}

export default ZipCodePage;
    