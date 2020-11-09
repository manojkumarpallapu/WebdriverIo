describe('performance', () => {
    before(() => {
        browser.url('https://www.volvocars.com/intl/v/car-safety/a-million-more')
        $('body').waitForExist()
        browser.pause(3000)
    })

    it('getting $ performance', () => {
        const start = Date.now()
        for (let i = 0; i < 100; i++) {
            $('body')
        }
        console.log(Date.now() - start)
    })
})