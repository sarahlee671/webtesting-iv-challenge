const db = require('../data/dbConfig.js');

const donations = require('./donationsModel.js');

describe('donations model', () => {
    beforeEach(async() => { 
        await db('donations').truncate();
    })
    afterEach(async () => {
        await db('donations').truncate();
    })
    
    const mockDonation = {
        name: "JohnDoe",
        organization: "RedCross",
        amount: 5
    }

    describe('insert()', () => {
        it('should insert donation', async () => {
            await donations.insert(mockDonation);
            const donation = await db('donations');
            expect(donation).toHaveLength(1)
        })
    })

    describe('getAll()', () => {
        it('should get all donations', async () => {
            const allDonations = await donations.getAll();
            expect(Array.isArray(allDonations)).toBe(true)
        })
    })

    describe('findById(id)', () => {
        it('should get item by id', async() => {
            const newDonation = await donations.insert(mockDonation);
            const findDonation = await donations.findById(newDonation.id);
            expect(findDonation.name).toEqual(newDonation.name)
        })
    })

    describe('remove(id)', () => {
        it('should remove donation', async () => {
            const newDonation = await donations.insert(mockDonation);
            const removedDonation = await donations.remove(newDonation);
            expect(removedDonation).toEqual(0)

        })
    })

})