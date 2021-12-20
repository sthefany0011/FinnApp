const express = require('express');
const router = express.Router();

const conexion = require('./b_dados/db');


router.get('/', (req, res) => {
	res.render('login.ejs')
})
router.get('/login', (req, res) => {
	res.render('login.ejs')
})


router.get('/menu', (req, res) => {
 
    conexion.query('SELECT * FROM lancamentos',(error, results)=>{
        if(error){
            throw error;
        } else {                       
            res.render('menu', {results:results});            
        }   
    })
});



router.get('/lancamentos', (req, res) => {
    res.render('lancamentos.ejs')
})



const crud = require('./controllers/crud');

router.post('/save_user', crud.save_user);
router.post('/dados', crud.dados);

module.exports = router;