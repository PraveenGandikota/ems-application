import express from 'express'
import db from '../utils/db.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import multer from 'multer'
import path from'path'

const router = express.Router()

router.post('/adminlogin', (req, res) => {
    const sql = 'SELECT * FROM users WHERE username = ? AND password = ?';
    
    db.query(sql, [req.body.username, req.body.password], (err, result) => {
        if (err) return res.json({ loginStatus: false, Error: 'Query Error' });

        if (result.length > 0) {
            const username = result[0].username;
            const token = jwt.sign({ role: "admin", username: username }, "jwt_secret_key", { expiresIn: "1d" });

            res.cookie('token', token);
            return res.json({ loginStatus: true });
        } else {
            return res.json({ loginStatus: false, Error: 'Wrong Email or Password' });
        }
    });
});

router.get('/category', (req, res) => {
    const sql = "SELECT * FROM category";
    db.query(sql, (err, result) => {
        if(err) return res.json({Status: false, Error: "Query Error"})
        return res.json({Status: true, Result: result})
    })
})

router.post('/add_category', (req, res) => {
    const sql = "INSERT INTO category (`category_name`, `created_at`) VALUES (?, NOW())";

    db.query(sql, [req.body.category], (err, result) => {
        if (err) {
            return res.json({ Status: false, Error: "Query Error", Details: err.sqlMessage });
        }
        return res.json({ Status: true, Message: "Category Added Successfully!" });
    });
});


// image upload 
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/Images')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname))
    }
})
const upload = multer({
    storage: storage
})
// end imag eupload 

router.post('/add_employee', upload.single('image'), (req, res) => {
    // console.log("File Upload Data:", req.file);
    // console.log("Request Body:", req.body);
    
    const sql = `INSERT INTO employee 
    (name, email, password, address, salary, image, category_id) 
    VALUES (?)`;

    bcrypt.hash(req.body.password, 10, (err, hash) => {
        if (err) return res.json({ Status: false, Error: "Hashing-Query Error" });

        const values = [
            req.body.name,
            req.body.email,
            hash, // Hashed password
            req.body.address,
            req.body.salary, 
            req.file ? req.file.filename : null, // Handle if no file is uploaded
            req.body.category_id
        ];

        db.query(sql, [values], (err, result) => {
            if (err) return res.json({ Status: false, Error: err });
            return res.json({ Status: true, Message: "Employee added successfully" });
        });
    });
});

router.get('/employee', (req, res) => {
    const sql = "SELECT * FROM employee";
    db.query(sql, (err, result) => {
        if(err) return res.json({Status: false, Error: "Query Error"})
        return res.json({Status: true, Result: result})
    })
})


router.get('/employee/:id', (req, res) => {
    const id = req.params.id;
    const sql = "SELECT * FROM employee WHERE id = ?";
    db.query(sql,[id], (err, result) => {
        if(err) return res.json({Status: false, Error: "Query Error"})
        return res.json({Status: true, Result: result})
    })
})


router.put('/edit_employee/:id', (req, res) => {
    const id = req.params.id;
    const sql = `UPDATE employee 
    set name = ?, email = ?, salary = ?, address = ?, category_id = ? 
    Where id = ?`
    const values = [
        req.body.name,
        req.body.email,
        req.body.salary,
        req.body.address,
        req.body.category_id
    ]
    db.query(sql,[...values, id], (err, result) => {
        if(err) return res.json({Status: false, Error: "Query Error"+err})
        return res.json({Status: true, Result: result})
    })
})

// router.get('/employee/:id', (req, res) => {
//     const id = req.params.id;
//     console.log(id)
// })

router.delete('/delete_employee/:id', (req, res) => {
    const id = req.params.id;
    const sql = "delete from employee where id = ?"
    db.query(sql,[id], (err, result) => {
        if(err) return res.json({Status: false, Error: "Query Error"+err})
        return res.json({Status: true, Result: result})
    })
})
 

router.get('/admin_count', (req, res) => {
    const sql = "select count(id) as admin from users";
    db.query(sql, (err, result) => {
        if(err) return res.json({Status: false, Error: "Query Error"+err})
        return res.json({Status: true, Result: result})
    })
})


router.get('/employee_count', (req, res) => {
    const sql = "select count(id) as employee from employee";
    db.query(sql, (err, result) => {
        if(err) return res.json({Status: false, Error: "Query Error"+err})
        return res.json({Status: true, Result: result})
    })
})

router.get('/salary_count', (req, res) => {
    const sql = "select sum(salary) as salaryOFEmp from employee";
    db.query(sql, (err, result) => {
        if(err) return res.json({Status: false, Error: "Query Error"+err})
        return res.json({Status: true, Result: result})
    })
})

router.get('/admin_records', (req, res) => {
    const sql = "select * from users"
    db.query(sql, (err, result) => {
        if(err) return res.json({Status: false, Error: "Query Error"+err})
        return res.json({Status: true, Result: result})
    })
})


router.get('/profile', (req, res) => {
    const sql = "select * from users";
    db.query(sql, (err, result) => {
        if(err) return res.json({Status: false, Error: "Query Error"+err})
        return res.json({Status: true, Result: result})
    })
})




router.get('/logout', (req, res) => {
    res.clearCookie('token')
    return res.json({Status: true})
})


export {router as adminRouter}  