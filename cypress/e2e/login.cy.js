import LoginPage from "../pageObjects/LoginPage";

describe("Login",()=>{
it("should login successfully",()=>{
LoginPage.visit();
LoginPage.enterUsername("Admin");
LoginPage.enterPassword("admin123");
LoginPage.clickLogin();

LoginPage.verifyLogin();
})
})