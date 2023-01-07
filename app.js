let menuCard = document.getElementById('menu-card')
let menuOpenBtn = document.getElementById('menu-open-btn')
let menuCloseBtn = document.getElementById('menu-close-btn')

menuOpenBtn.addEventListener('click', () => {
    menuCard.classList.add('active')
})

menuCloseBtn.addEventListener('click', () => {
    menuCard.classList.remove('active')
})

window.addEventListener('resize', () => {
    menuCard.classList.remove('active')
})

const blogs = [
    {
        id: 1,
        title: "SF expands focus on recyclable paper-based packaging",
        desc: "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading....",
        date: "Nov 28",
        poster: "./aassets/blog01.jpg"
    },
    {
        id: 2,
        title: "Hillside Industries will subsidize recycling stations for local schools",
        desc: "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading....",
        date: "Nov 28",
        poster: "./aassets/blog02.jpg"
    },
    {
        id: 3,
        title: "Understanding agricultural waste recycling",
        desc: "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading....",
        date: "Nov 28",
        poster: "./aassets/blog03.jpg"
    }
]

let blogsParent = document.getElementById("blogs-parent")

function displayBlogs() {
    let content = ""
    blogs.map(blog => {
        content += `
        <div class="blog">
            <img src="${blog.poster}" alt="blog-poster" class="blog-poster">
            <div class="blog-content">
                <span class="blog-date">${blog.date}</span>
                <h2 class="blog-title">${blog.title}</h2>
                <p class="blog-desc">${blog.desc}</p>
                <div class="blog-content-bottom-line"></div>
            </div>

            <div class="blog-btn-box">
                <div class="blog-btn">
                    <i class="fa-regular fa-eye"></i>
                    <span class="blog-btn-count">0</span>
                </div>
                <div class="blog-btn">
                    <i class="fa-regular fa-message"></i>
                    <span class="blog-btn-count">0</span>
                </div>
            </div>
        </div>
        `
        return content
    })

    blogsParent.innerHTML = content
}

displayBlogs()