describe('volvocars.com page', () => {
    it('should have the right title', () => {
        browser.url('https://www.volvocars.com/intl/v/car-safety/a-million-more')
        expect(browser).toHaveTitle('A million more | Volvo Cars');
    })

    
    it('should play the video of main', () => {

        const playvideo = $('//*[@id="root"]/div/div/main/div[2]/section/div/div/div/button');

        playvideo.click();
        browser.pause(40000)
    })

    it('should play the video of amy', () => {

        const playvideoamy = $('//*[@id="root"]/div/div/main/div[5]/section/div/div[2]/div[1]/div[1]/button');

        playvideoamy.click();
        browser.pause(7000)

    })

    it('should play the video of summer', () => {

        const playvideosummer = $('//*[@id="root"]/div/div/main/div[5]/section/div/div[2]/div[2]/div[1]/button');

        playvideosummer.click();
        browser.pause(7000)
    })

    it('should play the video of Linda', () => {

        const playvideolinda = $('//*[@id="root"]/div/div/main/div[5]/section/div/div[2]/div[3]/div[1]/button');

        playvideolinda.click();
        browser.pause(7000)
    })

    
    it('should play the video of Alex', () => {

        const playvideoalex = $('//*[@id="root"]/div/div/main/div[5]/section/div/div[2]/div[4]/div[1]/button');

        playvideoalex.click();
        browser.pause(7000)
    })


    it('should click on the top pane', () => {

        const paneBtn = $('//*[@id="site-nav-topbar-wrapper"]/nav/div[4]/button');

        paneBtn.click();
        browser.pause(2000)

        const closeBtn = $('/html/body/div[4]/div/nav/div[2]/div[2]/button');
        browser.pause(2000)
    })

})

