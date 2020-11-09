import * as Page from "./page";

class SearchButton extends Page {

    get searchBtn() {
        return $('//*[@id="site-nav-topbar-wrapper"]/nav/div[4]/button');
    }

    open() {
        super.open('https://........');
    }

}

export default new searchBtn();