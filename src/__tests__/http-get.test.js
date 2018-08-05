import request from '../reducers/get-tasks';

describe('Request reducer', () => {
    it('has a default state', ()=>{
        expect(request(null, {type:''})).toEqual(null);
    });

    it('has a custom state', ()=>{
        expect(request(null, {type:'GET_TASKS', payload: {
            "id":1,
            "general": {
                "firstName": "Liana",
                "lastName": "Crooks",
                "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/kevinoh/128.jpg"
            },
            "job": {
                "company": "Ledner, Johnson and Predovic",
                "title": "Investor Functionality Coordinator"
            },
            "contact": {
                "email": "Gerry_Hackett77@gmail.com",
                "phone": "(895) 984-0132"
            },
            "address": {
                "street": "1520 Zemlak Cove",
                "city": "New Devon",
                "zipCode": "42586-7898",
                "country": "Guinea-Bissau"
            }
        }})).toEqual({
            "id":1,
            "general": {
                "firstName": "Liana",
                "lastName": "Crooks",
                "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/kevinoh/128.jpg"
            },
            "job": {
                "company": "Ledner, Johnson and Predovic",
                "title": "Investor Functionality Coordinator"
            },
            "contact": {
                "email": "Gerry_Hackett77@gmail.com",
                "phone": "(895) 984-0132"
            },
            "address": {
                "street": "1520 Zemlak Cove",
                "city": "New Devon",
                "zipCode": "42586-7898",
                "country": "Guinea-Bissau"
            }
        });
    });
});