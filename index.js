import express from "express";
import multer from "multer";
import path from "path";




const app = express();
const PORT = 3500;
app.set('view engine', 'ejs');

// middleware setup
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

// setup multer for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) =>{
        cb(null, 'public/uploads');
    },
    filename: (req, file, cb) =>{
        cb(null, Date.now() +path.extname(file.originalname));
    }
});
const upload = multer({ storage: storage});

//  blog posts storage
const blogPosts = [];


// Home Page
app.get("/", (req,res) =>{
    res.render("index", {blogPosts})
});

// projects Page
app.get("/projects", (req,res) =>{
    res.render("projects")
});

app.get("/contact", (req,res) =>{
    res.render("contact")
});

// Create Page
app.get("/create", (req,res) =>{
    res.render("create")
})

app.post("/create", upload.single("featured_image"), (req, res) =>{
    const {title, content,tags, fontStyle} =req.body;
    const imagePath =req.file? "/uploads/" +req.file.filename: null;
    const blogPost ={
        id: Date.now().toString(),
        title,
        content,
        imagePath,
        tags,
        fontStyle: fontStyle || 'normal',
        createdAt: new Date(),
    };
    blogPosts.unshift(blogPost);
    res.redirect("/");
});


app.get("/blog/:id", (req, res) =>{
    const blogPost = blogPosts.find((post) => post.id === req.params.id);
    if (!blogPost) {
        return res.redirect('/');
    }
    res.render("blog", {blogPost});
})

// get new posts from create




app.listen(PORT, () => {
console.log(`Server is running on http://localhost:${PORT}`);
});
