const { faker } = require('@faker-js/faker');
module.exports.getFakeUser = async(req, res) =>{

const createProduct = () => {
    const newFake = {
       password: faker.internet.password(),
        email:faker.internet.email(),
        phoneNumber: faker.phone.phoneNumber(),
        lastName: faker.name.lastName(),
        firstName: faker.name.firstName(),
        _id: faker.datatype.uuid(),
    };
    return newFake;
};
    
const newFakeProduct = createProduct();
console.log(newFakeProduct);
res.send(newFakeProduct)
}

module.exports.getFakeCompany = async(req, res) =>{

    const createProduct = () => {
        const newFake = {
            _id: faker.datatype.uuid(),
            name: faker.name.fullName(),
            address: {
                street:faker.address.street(),
                city:faker.address.city(),
                state:faker.address.state(),
                zipCode:faker.address.zipCode(),
                country:faker.address.country(),
            }
         };
         return newFake;
     };
         
     const newFakeProduct = createProduct();
     console.log(newFakeProduct);
     res.send(newFakeProduct)
     }