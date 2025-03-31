class LoginPage{
visit(){
cy.visit("https://opensource-demo.orangehrmlive.com/");
}
enterUsername(username){
cy.get("input[name='username']").type(username);
}
enterPassword(password){
cy.get("input[name='password']").type(password);
}
clickLogin(){
cy.get("button[type='submit']").click();
}
verifyLogin(){
cy.url().should("include","/dashboard");

}
}

export default new LoginPage();