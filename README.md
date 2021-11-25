# calcultor-with-node-and-server-understanding

1. express is a library for node js used to run apps i guess.

2. whatever lib you pip install it needed to **require** in index.js file

3. **app.get**(*urlhandled,function to run*) takes a request from the user url ig and then returns a page by **res.send.** we can also return a file by **res.sendFile** but it should be given complete path and **__dirname** helps us alot in this way. it is just like pwd in terminal. 
and then we can add a html file in the res.sendFile.

4. **app.post**(u*rlhandled,function to run*) handles the post in current url. 

5. **action in form** should be sent to current url. where data needed to submitted.

6. to print in server console just use basic js console.log()
 
 7. I have also used 
 **()=>** arrow function 
 **()=>{ }** equivalent to function(){ }
 **(val)=>{ } or val=>{ }** equivalent to function(val){ }
 (req,res)=> equuivalent to function(req,res) { }
 
 9. req is **short of request and res is short of response**
 

10. then while filling form in frontend i was in need to collect data from the request so that where **body-praser** comes into picture and it integrates with our app and i hace used **app.use(bodyParser,urlenconeded{extend: true})**.
whenever i was in the need for form data i just take it by req.body.name_in_html_input_form.
