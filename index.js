//Librerias y dependencias
const http=require('http');
const express=require('express');
const app=express();
const sqlite3=require('sqlite3').verbose();
const path=require('path');

//Recursos
app.use(express.static(__dirname+'/'));

//Configuracion del servidor
app.set("view engine", "ejs"); //Establece el motor de plantilla, con arcivos ejs
app.set("views", path.join(__dirname, "")); //Permite gestionar las rutas de los diferentes recursos de la app
app.use(express.urlencoded({extended:false})); //Permiten recuperar valores publicados en un request
app.listen(5000)
console.log("Servidor corriendo exitosamente en el puerto 5000")

//Base de Datos
const db_name=path.join(__dirname,"db","db.db");
const db=new sqlite3.Database(db_name, err =>{ 
if (err){
	return console.error(err.message);
}else{
	console.log("Conexión exitosa con la base de Datos");
}
})

// //Crear la tabla
// const sql_create= `CREATE TABLE IF NOT EXISTS lancamentos(lancamento_ID INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, Nombre VARCHAR(100) NOT NULL, Precio REAL NOT NULL, Descripcion TEXT);


// CREATE TABLE IF NOT EXISTS usuarios(user_ID INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, nome VARCHAR(100) NOT NULL, senha TEXT NOT NULL, email TEXT); INSERT INTO usuarios (user_id, nome, senha, user_email) VALUES
// (1, 'FRANCO', '1234', 'admin@admin.com')`





//Enrutamiento

app.get('/',(req,res)=>{
	res.render('login.ejs')
})

app.get('/login',(req,res)=>{
	res.render('login.ejs')
})

app.get('/menu',(req,res)=>{
	res.render('menu.ejs')
})
app.get('/lancamentos',(req,res)=>{
	
let sql = `SELECT valor FROM lancamentos where id_lancamentos in (1,2,3)`;

db.all(sql, [], (err, rows) => {
if (err) {
throw err;
}
console.log  (rows)
res.render('lancamentos.ejs',  {ad:rows})
});

})

//Mostrar tabla de Productos
app.get('/lancamentos',(req,res)=>{
	const sql="SELECT * FROM Lancamentos ORDER BY Nombre";
	db.all(sql, [],(err, rows)=>{
			if (err){
				return console.error(err.message);
			}else{
			res.render("lancamentos.ejs",{modelo:rows});
			}
	})
})

//Crear un nuevo Registro
app.get('/crear',(req,res)=>{
	res.render('crear.ejs',{modelo: {}})
});

//POST /crear
app.post('/crear',(req,res)=>{
	const sql="INSERT INTO lancamentos(Nombre, Precio, Descripcion) VALUES(?,?,?)";
	const nuevo_producto=[req.body.Nombre, req.body.Precio, req.body.Descripcion];
	//const nuevo_producto=["Laptop",1200,"Ultima generación"];
	db.run(sql, nuevo_producto, err =>{
	if (err){
				return console.error(err.message);
			}
			else{
			res.redirect("/productos");
		}
	})
});

//GET /edit/id
app.get("/editar/:id",(req, res)=>{
	const id=req.params.id;
	const sql="SELECT * FROM Productos WHERE Producto_ID=?";
	db.get(sql,id,(err, rows)=>{
		res.render("editar.ejs",{modelo: rows})
	})
})

//POST /edit/id
app.post("/editar/:id",(req, res)=>{

	const id=req.params.id;
	const info_producto=[req.body.Nombre, req.body.Precio, req.body.Descripcion, id];
	const sql="UPDATE Productos SET Nombre=?, Precio=?, Descripcion=? WHERE (Producto_ID=?)";

	db.run(sql, info_producto, err =>{
			if (err){
				return console.error(err.message);
			}
			else{
					res.redirect("/productos");
		}
	});
})

// Eliminar Registros

//GET /eliminar/id
app.get("/eliminar/:id",(req, res)=>{
	const id=req.params.id;
	const sql="SELECT * FROM Productos WHERE Producto_ID=?";
	db.get(sql,id,(err, rows)=>{
		res.render("eliminar.ejs",{modelo: rows})
	})
})



//POST /eliminar/id
app.post("/eliminar/:id",(req, res)=>{

	const id=req.params.id;
	const sql="DELETE FROM Productos WHERE Producto_ID=?";

	db.run(sql, id, err =>{
			if (err){
				return console.error(err.message);
			}
			else{
					res.redirect("/productos");
		}
	});
})




//Este metodo siempre debe ir al final
app.get('/*',(req,res)=>{
	res.render('notfound.ejs')
})







