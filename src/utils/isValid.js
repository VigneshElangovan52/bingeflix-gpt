export const isValid = (nm,mail,pwd) => {

    const name = /^[a-zA-Z]+ [a-zA-Z]+$/.test(nm);
    const email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail);
    const password = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(pwd);

    if(!name) return 'Enter your Full Name (Eg. Harry Potter)';
    if(!email) return 'Enter a valid e-mail (Eg. hogwarts@gmail.com)';
    if(!password) return 'Enter a valid 8 -digit password with at least 1 uppercase, 1 special character (Eg. Alohomora!)';

    if(name && email && password) return 'Sign in successfully completed!!!';

}
